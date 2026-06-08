from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from .models import Profile
from .models import Kelas, Profile
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import make_password
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.db.models import Count, Q
from django.db.models import Q
import openpyxl
from django.http import HttpResponse
from .models import HasilKuis
import json
from django.http import JsonResponse
from django.utils import timezone
from .models import HasilKuis
from .models import Kelas
from .models import KKM
from .models import AktivitasSelesai


# ================= BERANDA =================
def beranda(request):
    return render(request, 'EnhanceLearn/beranda.html')

def tentang(request):
    return render(request, 'EnhanceLearn/tentang.html')

def materi(request):
    return render(request, 'EnhanceLearn/materi.html')
def petunjuk(request):
    return render(request, 'EnhanceLearn/petunjuk.html')


# =========================
# LOGIN
# =========================
def login_user(request):

    if request.method == "POST":

        email = request.POST.get("email")
        password = request.POST.get("password")

        try:
            user_obj = User.objects.get(email=email)
        except User.DoesNotExist:
            return render(request, "EnhanceLearn/login.html", {
                "error": "Email tidak ditemukan"
            })

        user = authenticate(
            request,
            username=user_obj.username,
            password=password
        )

        if user is not None:

            login(request, user)

            if user.profile.role == "dosen":
                return redirect("dashboard_dosen")

            else:
                return redirect("dashboard")

        else:
            return render(request, "EnhanceLearn/login.html", {
                "error": "Password salah"
            })

    return render(request, "EnhanceLearn/login.html")

    if request.method == "POST":

        email = request.POST.get("email")
        password = request.POST.get("password")

        try:
            user_obj = User.objects.get(email=email)
        except User.DoesNotExist:
            return render(request, "EnhanceLearn/login.html", {
                "error": "Email tidak ditemukan"
            })

        user = authenticate(
            request,
            username=user_obj.username,
            password=password
        )

        if user is not None:

            login(request, user)

            if user.profile.role == "dosen":
                return redirect("dashboard_dosen")

            else:
                return redirect("dashboard_mahasiswa")

        else:
            return render(request, "EnhanceLearn/login.html", {
                "error": "Password salah"
            })

    return render(request, "EnhanceLearn/login.html")


# =========================
# DASHBOARD DOSEN
# =========================
def dashboard_dosen(request):

    jumlah_mahasiswa = Profile.objects.filter(
        role='mahasiswa',
        kelas__dosen=request.user
    ).count()

    jumlah_kelas = Kelas.objects.filter(
        dosen=request.user
    ).count()

    jumlah_selesai = ProgressMahasiswa.objects.filter(
        progress=100,
        user__profile__kelas__dosen=request.user
    ).count()

    kkm, created = KKM.objects.get_or_create(id=1)

    context = {
        "kkm": kkm.nilai,
        "jumlah_mahasiswa": jumlah_mahasiswa,
        "jumlah_kelas": jumlah_kelas,
        "jumlah_selesai": jumlah_selesai,
    }

    return render(
        request,
        "EnhanceLearn/dosen/dashboard-dosen.html",
        context
    )


def update_kkm(request):

    if request.method == "POST":

        nilai = request.POST.get("kkm")

        kkm, created = KKM.objects.get_or_create(id=1)
        kkm.nilai = nilai
        kkm.save()

    return redirect("dashboard_dosen")

# =========================
# REGISTER DOSEN
# =========================
def register_dosen(request):

    if request.method == "POST":

        nama = request.POST.get("nama")
        nip = request.POST.get("nip")
        email = request.POST.get("email")
        password = request.POST.get("password")
        konfirmasi = request.POST.get("password2")

        if password != konfirmasi:
            return render(request, "EnhanceLearn/dosen/register.html", {
                "error": "Password tidak sama"
            })

        if User.objects.filter(username=nip).exists():
            return render(request, "EnhanceLearn/dosen/register.html", {
                "error": "NIP sudah digunakan"
            })

        user = User.objects.create_user(
            username=nip,
            email=email,
            password=password,
            first_name=nama
        )

        Profile.objects.create(
            user=user,
            role="dosen"
        )

        messages.success(
            request,
            "Akun dosen berhasil didaftarkan. Silakan login menggunakan akun Anda."
        )

        return redirect("login")

    return render(request, "EnhanceLearn/dosen/register.html")

# =========================
# LOGOUT DOSEN
# =========================
def logout_dosen(request):
    logout(request)
    return redirect("login")


# =========================
# DATA KELAS
# =========================
@login_required
def data_kelas(request):

    if request.method == "POST":

        nama_kelas = request.POST.get("nama_kelas")

        if nama_kelas:
            Kelas.objects.create(
                nama_kelas=nama_kelas,
                dosen=request.user
            )

        return redirect("data_kelas")


    kelas_list = Kelas.objects.filter(
    dosen=request.user).annotate(
    jumlah_mahasiswa=Count('profile', filter=Q(profile__role='mahasiswa'))
    )


    context = {
        "kelas_list": kelas_list
    }

    return render(
        request,
        "EnhanceLearn/dosen/data-kelas.html",
        context
    )

@login_required
def hapus_kelas(request, id):

    kelas = Kelas.objects.get(id=id)

    if kelas.dosen == request.user:
        kelas.delete()

    return redirect("data_kelas")

# =========================
# DATA MAHASISWA
# =========================
def data_mahasiswa(request):

    mahasiswa = Profile.objects.filter(role="mahasiswa", kelas__dosen=request.user).select_related("user","kelas")
    kelas_id = request.GET.get('kelas')
    search = request.GET.get('search')

    # filter jika kelas dipilih
    if kelas_id:
        mahasiswa = mahasiswa.filter(kelas_id=kelas_id)

    kelas_list = Kelas.objects.filter(dosen=request.user)

    # fitur search
    if search:
        mahasiswa = mahasiswa.filter(
            Q(user__first_name__icontains=search) |
            Q(nim__icontains=search)
        )

    kelas_list = Kelas.objects.filter(dosen=request.user)

    context = {
        "mahasiswa": mahasiswa,
        "kelas_list": kelas_list,
        "search": search
    }
    
    return render(request, "EnhanceLearn/dosen/data-mahasiswa.html", context)

def edit_mahasiswa(request, id):

    profile = get_object_or_404(Profile, id=id)
    user = profile.user 

    if request.method == "POST":
        nama = request.POST.get("nama")
        nim = request.POST.get("nim")
        email = request.POST.get("email")

        # update user
        user.first_name = nama
        user.username = nim
        user.email = email
        user.save()

        # update profile
        profile.nim = nim
        profile.save()

        messages.success(request, "Data mahasiswa berhasil diperbarui")
        return redirect("data_mahasiswa")

    return render(request, "EnhanceLearn/dosen/edit-mahasiswa.html", {"mhs": profile})

def hapus_mahasiswa(request, id):

    profile = get_object_or_404(Profile, id=id)

    user = profile.user

    user.delete()

    return redirect("data_mahasiswa")


def export_mahasiswa_excel(request):

    mahasiswa = Profile.objects.filter(
        role="mahasiswa",
        kelas__dosen=request.user
    ).select_related("user", "kelas")

    # FILTER KELAS
    kelas_id = request.GET.get("kelas")

    if kelas_id:
        mahasiswa = mahasiswa.filter(kelas_id=kelas_id)

    # FILTER SEARCH
    search = request.GET.get("search")

    if search:
        mahasiswa = mahasiswa.filter(
            Q(user__first_name__icontains=search) |
            Q(nim__icontains=search)
        )

    # membuat workbook
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Data Mahasiswa"

    # header tabel
    ws.append([
        "No",
        "Nama",
        "NIM",
        "Kelas"
    ])

    # isi data
    for i, mhs in enumerate(mahasiswa, start=1):

        ws.append([
            i,
            mhs.user.first_name,
            mhs.nim,
            mhs.kelas.nama_kelas if mhs.kelas else "-"
        ])

    response = HttpResponse(
        content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    )

    response["Content-Disposition"] = "attachment; filename=data_mahasiswa.xlsx"

    wb.save(response)

    return response


# =========================
# PROGRES MAHASISWA
# =========================
from .models import ProgressMahasiswa, Profile

def progres_mahasiswa(request):

    mahasiswa_list = Profile.objects.select_related(
        'user', 'kelas'
    ).filter(
        role='mahasiswa',
        kelas__dosen=request.user
    )

    data = []

    kelas_list = Kelas.objects.filter(
        dosen=request.user
    )

    for mhs in mahasiswa_list:

        progress_obj = ProgressMahasiswa.objects.filter(user=mhs.user).first()

        persen = progress_obj.progress if progress_obj else 0

        data.append({
            "user_id": mhs.user.id,
            "nama": mhs.user.first_name,
            "nim": mhs.nim,
            "kelas": mhs.kelas.nama_kelas if mhs.kelas else "-",
            "progress": persen
        })

    context = {"data": data,
               "kelas_list" : kelas_list}

    return render(request,"EnhanceLearn/dosen/progres-mahasiswa.html",context)

from django.http import JsonResponse
from .models import ProgressMahasiswa, HasilKuis

from django.http import JsonResponse
from django.contrib.auth.models import User
from .models import Profile

from django.http import JsonResponse
from django.contrib.auth.models import User
from .models import ProgressMahasiswa, HasilKuis, Profile


def detail_progress(request, user_id):

    progress_obj = ProgressMahasiswa.objects.filter(
        user_id=user_id
    ).first()

    aktivitas = progress_obj.aktivitas_selesai if progress_obj else 0
    progress_persen = progress_obj.progress if progress_obj else 0

    user = User.objects.get(id=user_id)
    profile = Profile.objects.filter(user=user).first()

    data = {

        "nama": user.get_full_name() or user.username,
        "nim": profile.nim if profile else "-",
        "progress": progress_persen,

        "section": [

            # =========================
            # PENDAHULUAN
            # =========================
            {
                "judul": "PENDAHULUAN",
                "items": [
                    {
                        "nama": "1. Pengertian Citra Digital",
                        "selesai": aktivitas >= 1
                    },
                    {
                        "nama": "2. Jenis-Jenis Citra Digital",
                        "selesai": aktivitas >= 2
                    },
                    {
                        "nama": "3. Kuis 1",
                        "selesai": HasilKuis.objects.filter(
                            user_id=user_id,
                            judul_kuis="pendahuluan",
                            status="lulus"
                        ).exists()
                    }
                ]
            },

            # =========================
            # PENGANTAR PENINGKATAN KUALITAS CITRA
            # =========================
            {
                "judul": "PENGANTAR PENINGKATAN KUALITAS CITRA",
                "items": [
                    {
                        "nama": "1. Pengertian Peningkatan Kualitas Citra",
                        "selesai": aktivitas >= 3
                    },
                    {
                        "nama": "2. Perbedaan Image Enhancement VS Image Restoration",
                        "selesai": aktivitas >= 4
                    },
                    {
                        "nama": "3. Kuis 2",
                        "selesai": HasilKuis.objects.filter(
                            user_id=user_id,
                            judul_kuis="pkc",
                            status="lulus"
                        ).exists()
                    }
                ]
            },

            # =========================
            # INTENSITAS
            # =========================
            {
                "judul": "INTENSITAS",
                "items": [
                    {
                        "nama": "1. Brightness (Kecerahan)",
                        "selesai": aktivitas >= 5
                    },
                    {
                        "nama": "2. Contrast",
                        "selesai": aktivitas >= 6
                    },
                    {
                        "nama": "3. Negative Transformation (Operasi Negasi)",
                        "selesai": aktivitas >= 7
                    },
                    {
                        "nama": "4. Thresholding (Operasi Ambang Batas)",
                        "selesai": aktivitas >= 8
                    },
                    {
                        "nama": "5. Log Transformation (Transformasi Logaritmik)",
                        "selesai": aktivitas >= 9
                    },
                    {
                        "nama": "6. Transformasi Power-Law (Gamma)",
                        "selesai": aktivitas >= 10
                    },
                    {
                        "nama": "7. Kuis 3",
                        "selesai": HasilKuis.objects.filter(
                            user_id=user_id,
                            judul_kuis="intensitas",
                            status="lulus"
                        ).exists()
                    }
                ]
            },

            # =========================
            # HISTOGRAM
            # =========================
            {
                "judul": "HISTOGRAM",
                "items": [
                    {
                        "nama": "1. Histogram Equalization",
                        "selesai": aktivitas >= 11
                    },
                    {
                        "nama": "2. Histogram Specification",
                        "selesai": aktivitas >= 12
                    },
                    {
                        "nama": "3. Kuis 4",
                        "selesai": HasilKuis.objects.filter(
                            user_id=user_id,
                            judul_kuis="histogram",
                            status="lulus"
                        ).exists()
                    }
                ]
            },

            # =========================
            # IMAGE ENHANCEMENT DENGAN PYTHON
            # =========================
            {
                "judul": "IMAGE ENHANCEMENT DENGAN PYTHON",
                "items": [
                    {
                        "nama": "1. Citra Grayscale & Biner",
                        "selesai": aktivitas >= 13
                    },
                    {
                        "nama": "2. Point Operations",
                        "selesai": aktivitas >= 14
                    },
                    {
                        "nama": "3. Histogram",
                        "selesai": aktivitas >= 15
                    },
                    {
                        "nama": "4. Kuis 5",
                        "selesai": HasilKuis.objects.filter(
                            user_id=user_id,
                            judul_kuis="praktik",
                            status="lulus"
                        ).exists()
                    }
                ]
            },

            # =========================
            # EVALUASI
            # =========================
            {
                "judul": "EVALUASI",
                "items": [
                    {
                        "nama": "Evaluasi",
                        "selesai": HasilKuis.objects.filter(
                            user_id=user_id,
                            judul_kuis="evaluasi",
                            status="lulus"
                        ).exists()
                    }
                ]
            }

        ]
    }

    return JsonResponse(data)


# =========================
# DATA NILAI MAHASISA
# =========================
from .models import HasilKuis, Profile

def data_nilai(request):

    # ambil semua mahasiswa
    mahasiswa_list = Profile.objects.select_related(
        'user', 'kelas'
    ).filter(
        role='mahasiswa',
        kelas__dosen=request.user
    )


    # =========================
    # FILTER KELAS
    # =========================

    kelas_id = request.GET.get("kelas")

    if kelas_id:
        mahasiswa_list = mahasiswa_list.filter(kelas_id=kelas_id)

    search = request.GET.get("search")

    if search:
        mahasiswa_list = mahasiswa_list.filter(
            Q(user__first_name__icontains=search) |
            Q(user__username__icontains=search) |
            Q(nim__icontains=search)
        )
    

    # ambil semua hasil kuis
    # ambil hanya nilai yang lulus, urut dari percobaan paling awal
    hasil_kuis = HasilKuis.objects.filter(
        status="lulus"
    ).order_by("user_id", "judul_kuis", "percobaan_ke")

    nilai_dict = {}

    for h in hasil_kuis:

        user_id = h.user_id

        if user_id not in nilai_dict:
            nilai_dict[user_id] = {
                "k1": "-",
                "k2": "-",
                "k3": "-",
                "k4": "-",
                "k5": "-",
                "evaluasi": "-"
            }

        if h.judul_kuis.lower() == "pendahuluan":
            if nilai_dict[user_id]["k1"] == "-":
                nilai_dict[user_id]["k1"] = h.nilai

        elif h.judul_kuis.lower() == "pkc":
            if nilai_dict[user_id]["k2"] == "-":
                nilai_dict[user_id]["k2"] = h.nilai

        elif h.judul_kuis.lower() == "intensitas":
            if nilai_dict[user_id]["k3"] == "-":
                nilai_dict[user_id]["k3"] = h.nilai

        elif h.judul_kuis.lower() == "histogram":
            if nilai_dict[user_id]["k4"] == "-":
                nilai_dict[user_id]["k4"] = h.nilai

        elif h.judul_kuis.lower() == "praktik":
            if nilai_dict[user_id]["k5"] == "-":
                nilai_dict[user_id]["k5"] = h.nilai

        elif h.judul_kuis.lower() == "evaluasi":
            if nilai_dict[user_id]["evaluasi"] == "-":
                nilai_dict[user_id]["evaluasi"] = h.nilai

    data_nilai = []

    for mhs in mahasiswa_list:

        nilai = nilai_dict.get(mhs.user_id, {})

        data_nilai.append({
            "user_id": mhs.user.id,
            "nama": mhs.user.first_name,
            "nim": mhs.nim,
            "kelas": mhs.kelas.nama_kelas if mhs.kelas else "-",
            "k1": nilai.get("k1", "-"),
            "k2": nilai.get("k2", "-"),
            "k3": nilai.get("k3", "-"),
            "k4": nilai.get("k4", "-"),
            "k5": nilai.get("k5", "-"),
            "evaluasi": nilai.get("evaluasi", "-"),
        })

    kelas_list = Kelas.objects.filter(
        dosen=request.user
    )
    
    context = {
        "data_nilai": data_nilai,
        "kelas_list": kelas_list
    }

    return render(request, "EnhanceLearn/dosen/data-nilai.html", context)



# ===============================
# API RIWAYAT KUIS UNTUK MODAL
# ===============================

def riwayat_kuis_json(request, user_id):

    hasil = HasilKuis.objects.filter(
        user_id=user_id
    ).order_by('judul_kuis', 'percobaan_ke')

    data = {}

    for h in hasil:

        kuis = h.judul_kuis

        if kuis not in data:
            data[kuis] = []

        data[kuis].append({
            "percobaan": h.percobaan_ke,
            "tanggal": h.tanggal.strftime("%d/%m/%Y"),
            "mulai": h.waktu_mulai.strftime("%H:%M:%S"),
            "selesai": h.waktu_selesai.strftime("%H:%M:%S"),
            "nilai": h.nilai,
            "status": h.status,
            "detail_soal": h.detail_soal,
        })

    return JsonResponse(data)


from django.http import HttpResponse
import openpyxl
from .models import Profile, HasilKuis


def export_nilai_excel(request):

    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Data Nilai Mahasiswa"

    # Header tabel
    ws.append([
        "Nama Mahasiswa",
        "NIM",
        "Kelas",
        "K1",
        "K2",
        "K3",
        "K4",
        "K5",
        "Evaluasi"
    ])

    mahasiswa_list = Profile.objects.select_related(
        'user','kelas'
    ).filter(
        role='mahasiswa',
        kelas__dosen=request.user
    )

    kelas_id = request.GET.get("kelas")

    if kelas_id:
        mahasiswa_list = mahasiswa_list.filter(kelas_id=kelas_id)

    search = request.GET.get("search")

    if search:
        mahasiswa_list = mahasiswa_list.filter(
            Q(user__first_name__icontains=search) |
            Q(user__username__icontains=search) |
            Q(nim__icontains=search)
        )

    for mhs in mahasiswa_list:

        hasil = HasilKuis.objects.filter(
            user=mhs.user,
            status="lulus"
        ).order_by("judul_kuis", "percobaan_ke")

        nilai = {
            "k1":"-",
            "k2":"-",
            "k3":"-",
            "k4":"-",
            "k5":"-",
            "evaluasi":"-"
        }

        for h in hasil:

            judul = h.judul_kuis.lower()

            if judul == "pendahuluan" and nilai["k1"] == "-":
                nilai["k1"] = h.nilai

            elif judul == "pkc" and nilai["k2"] == "-":
                nilai["k2"] = h.nilai

            elif judul == "intensitas" and nilai["k3"] == "-":
                nilai["k3"] = h.nilai

            elif judul == "histogram" and nilai["k4"] == "-":
                nilai["k4"] = h.nilai

            elif judul == "praktik" and nilai["k5"] == "-":
                nilai["k5"] = h.nilai

            elif judul == "evaluasi" and nilai["evaluasi"] == "-":
                nilai["evaluasi"] = h.nilai


        ws.append([
            mhs.user.first_name if mhs.user.first_name else mhs.user.username,
            mhs.nim,
            mhs.kelas.nama_kelas if mhs.kelas else "-",
            nilai["k1"],
            nilai["k2"],
            nilai["k3"],
            nilai["k4"],
            nilai["k5"],
            nilai["evaluasi"]
        ])


    response = HttpResponse(
        content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    )

    response['Content-Disposition'] = 'attachment; filename=data_nilai_mahasiswa.xlsx'

    wb.save(response)

    return response


def dashboard_mhs(request):

    user = request.user

    kuis_selesai = HasilKuis.objects.filter(
        user=user
    ).values_list(
        'judul_kuis',
        flat=True
    )

    aktivitas_selesai = AktivitasSelesai.objects.filter(
        user=user
    ).values_list(
        'nama_aktivitas',
        flat=True
    )

    context = {
        "kuis_selesai": list(kuis_selesai),
        "aktivitas_selesai": list(aktivitas_selesai),
    }

    return render(
        request,
        "EnhanceLearn/dashboard-mhs.html",
        context
    )


import json
from django.http import JsonResponse
from .models import ProgressMahasiswa
import json
from django.http import JsonResponse
from .models import ProgressMahasiswa

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import ProgressMahasiswa, Profile

def simpan_progress(request):

    if request.method == "POST":

        user = request.user

        # cek apakah user mahasiswa
        try:
            profile = Profile.objects.get(user=user)

            if profile.role != "mahasiswa":
                return JsonResponse({"status": "ignored"})

        except Profile.DoesNotExist:
            return JsonResponse({"status": "ignored"})

        data = json.loads(request.body)

        progress = data.get("progress", 0)
        aktivitas = data.get("aktivitas", 0)
        kuis = data.get("kuis", 0)

        ProgressMahasiswa.objects.update_or_create(
            user=user,
            defaults={
                "progress": progress,
                "aktivitas_selesai": aktivitas,
                "kuis_selesai": kuis
            }
        )

        return JsonResponse({"status": "ok"})
    

# ================= REGISTER MAHASISWA =================
def register_mhs(request):

    if request.method == "POST":

        nama = request.POST.get("nama")
        nim = request.POST.get("nim")
        email = request.POST.get("email")
        token = request.POST.get("token")
        password = request.POST.get("password")
        konfirmasi = request.POST.get("password2")

        if password != konfirmasi:
            return render(request, "EnhanceLearn/mahasiswa/register.html", {
                "error": "Password tidak sama"
            })

        if User.objects.filter(username=nim).exists():
            return render(request, "EnhanceLearn/mahasiswa/register.html", {
                "error": "NIM sudah digunakan"
            })

        try:
            kelas = Kelas.objects.get(token=token)
        except Kelas.DoesNotExist:
            return render(request, "EnhanceLearn/mahasiswa/register.html", {
                "error": "Token kelas tidak ditemukan"
            })

        user = User.objects.create_user(
            username=nim,
            email=email,
            password=password,
            first_name=nama
        )

        Profile.objects.create(
            user=user,
            role="mahasiswa",
            nim=nim,
            kelas=kelas
        )

        messages.success(
            request,
            "Akun berhasil didaftarkan. Silakan login menggunakan akun Anda."
        )

        return redirect("login")

    return render(request, "EnhanceLearn/mahasiswa/register.html")


# ================= LOGOUT MAHASISWA (TAMBAHAN AMAN) =================
def logout_mhs(request):
    request.session.flush()
    return redirect("login")


def simpan_aktivitas(request):

    if request.method == "POST":

        data = json.loads(request.body)

        nama_aktivitas = data.get("aktivitas")
        print("AKTIVITAS MASUK:", nama_aktivitas)

        AktivitasSelesai.objects.get_or_create(
            user=request.user,
            nama_aktivitas=nama_aktivitas
        )

        return JsonResponse({
            "status": "ok"
        })

    return JsonResponse({
        "status": "error"
    })

from django.shortcuts import redirect
from .models import AktivitasSelesai

def halaman_kuis(request, judul):

    if judul == "pendahuluan":

        aktivitas1 = AktivitasSelesai.objects.filter(
            user=request.user,
            nama_aktivitas="aktivitas1"
        ).exists()

        aktivitas2 = AktivitasSelesai.objects.filter(
            user=request.user,
            nama_aktivitas="aktivitas2"
        ).exists()

        if not (aktivitas1 and aktivitas2):
            return redirect("jenis_citra")


    if judul == "pkc":

        aktivitas3 = AktivitasSelesai.objects.filter(
            user=request.user,
            nama_aktivitas="aktivitas3"
        ).exists()

        aktivitas4 = AktivitasSelesai.objects.filter(
            user=request.user,
            nama_aktivitas="aktivitas4"
        ).exists()

        if not (aktivitas3 and aktivitas4):
            return redirect("pkc_restoration")
        

    if judul == "intensitas":

        aktivitas5 = AktivitasSelesai.objects.filter(
            user=request.user,
            nama_aktivitas="aktivitas5"
        ).exists()

        aktivitas6 = AktivitasSelesai.objects.filter(
            user=request.user,
            nama_aktivitas="aktivitas6"
        ).exists()

        aktivitas7 = AktivitasSelesai.objects.filter(
            user=request.user,
            nama_aktivitas="aktivitas7"
        ).exists()

        aktivitas8 = AktivitasSelesai.objects.filter(
            user=request.user,
            nama_aktivitas="aktivitas8"
        ).exists()

        aktivitas9 = AktivitasSelesai.objects.filter(
            user=request.user,
            nama_aktivitas="aktivitas9"
        ).exists()

        aktivitas10 = AktivitasSelesai.objects.filter(
            user=request.user,
            nama_aktivitas="aktivitas10"
        ).exists()

        if not (
            aktivitas5 and
            aktivitas6 and
            aktivitas7 and
            aktivitas8 and
            aktivitas9 and
            aktivitas10
        ):
            return redirect("rangkuman3")
        
        if judul == "histogram":

            aktivitas11 = AktivitasSelesai.objects.filter(
                user=request.user,
                nama_aktivitas="aktivitas11"
            ).exists()

            aktivitas12 = AktivitasSelesai.objects.filter(
                user=request.user,
                nama_aktivitas="aktivitas12"
            ).exists()

            if not (aktivitas11 and aktivitas12):
                return redirect("rangkuman4")
        

        if judul == "praktik":

            aktivitas13 = AktivitasSelesai.objects.filter(
                user=request.user,
                nama_aktivitas="aktivitas13"
            ).exists()

            aktivitas14 = AktivitasSelesai.objects.filter(
                user=request.user,
                nama_aktivitas="aktivitas14"
            ).exists()

            aktivitas15 = AktivitasSelesai.objects.filter(
                user=request.user,
                nama_aktivitas="aktivitas15"
            ).exists()

            if not (
                aktivitas13 and
                aktivitas14 and
                aktivitas15
            ):
                return redirect("rangkuman5")
        

        if judul == "evaluasi":

            if not cek_lulus_kuis(
                request.user,
                "praktik"
            ):
                return redirect(
                    "halaman_kuis",
                    judul="praktik"
                )


    context = {
        "judul_kuis": judul
    }

    return render(
        request,
        "EnhanceLearn/kuis/kuis.html",
        context
    )

def halaman_hasil(request, id):

    hasil = HasilKuis.objects.get(id=id)

    waktu = request.GET.get("waktu")

    materi_map = {
        "pendahuluan": {
            "sebelum": "jenis_citra",
            "sesudah": "pkc"
        },
        "pkc": {
            "sebelum": "pkc_restoration",
            "sesudah": "brightness"
        },
        "intensitas": {
            "sebelum": "power_law",
            "sesudah": "histogram_equalization"
        },
        "histogram": {
            "sebelum": "histogram_specification",
            "sesudah": "grayscale_biner"
        },
        
        "praktik": {
        "sebelum": "rangkuman5",
        "sesudah": "evaluasi"
        }
    }

    materi_sebelum = materi_map.get(
        hasil.judul_kuis, {}
    ).get("sebelum")

    materi_sesudah = materi_map.get(
        hasil.judul_kuis, {}
    ).get("sesudah")

    judul_tampil = (
        "Evaluasi Akhir"
        if hasil.judul_kuis == "evaluasi"
        else f"Kuis Subbab {hasil.judul_kuis.title()}"
    )

    context = {
        "judul": judul_tampil,          # untuk ditampilkan
        "judul_kuis": hasil.judul_kuis, # untuk URL
        "nama": hasil.user.first_name,
        "nilai": hasil.nilai,
        "waktu": waktu,
        "lulus": hasil.status == "lulus",
        "materi_sebelum": materi_sebelum,
        "materi_sesudah": materi_sesudah
    }

    return render(
        request,
        "EnhanceLearn/kuis/hasil_kuis.html",
        context
    )




def hasil_kuis(request):

    if request.method == "POST":

        data = json.loads(request.body)

        detail_soal = data.get("detail_soal", [])
        nilai = data.get("nilai")
        judul = data.get("judul")
        waktu = data.get("waktu")

        user = request.user

        percobaan = HasilKuis.objects.filter(
            user=user,
            judul_kuis=judul
        ).count() + 1

        kkm = KKM.objects.first()
        batas = kkm.nilai if kkm else 70
        status = "lulus" if int(nilai) >= batas else "tidak lulus"

        hasil = HasilKuis.objects.create(
            user=user,
            judul_kuis=judul,
            waktu_mulai=timezone.now(),
            waktu_selesai=timezone.now(),
            nilai=nilai,
            status=status,
            percobaan_ke=percobaan,
            detail_soal=detail_soal
        )

        return JsonResponse({
            "redirect_url": f"/hasil-kuis/{hasil.id}/?waktu={waktu}"
        })


from .models import AktivitasSelesai

def cek_aktivitas(user, nama_aktivitas):
    return AktivitasSelesai.objects.filter(
        user=user,
        nama_aktivitas=nama_aktivitas
    ).exists()

def cek_lulus_kuis(user, judul_kuis):
    return HasilKuis.objects.filter(
        user=user,
        judul_kuis=judul_kuis,
        status="lulus"
    ).exists()

# ===== Pendahuluan =====
def citra_digital(request):
    return render(request, "EnhanceLearn/pendahuluan/citra_digital.html")

@login_required
def jenis_citra(request):

    if not cek_aktivitas(
        request.user,
        "aktivitas1"
    ):
        return redirect("citra_digital")

    return render(
        request,
        "EnhanceLearn/pendahuluan/jenis_citra.html"
    )

@login_required
def rangkuman1(request):

    aktivitas1 = AktivitasSelesai.objects.filter(
        user=request.user,
        nama_aktivitas="aktivitas1"
    ).exists()

    aktivitas2 = AktivitasSelesai.objects.filter(
        user=request.user,
        nama_aktivitas="aktivitas2"
    ).exists()

    if not (aktivitas1 and aktivitas2):
        return redirect("jenis_citra")

    return render(
        request,
        "EnhanceLearn/pendahuluan/rangkuman1.html"
    )


# ===== Pengantar Citra Digital =====
@login_required
def pkc(request):

    if not cek_lulus_kuis(
        request.user,
        "pendahuluan"
    ):
        return redirect(
            "halaman_kuis",
            judul="pendahuluan"
        )

    return render(
        request,
        "EnhanceLearn/pkc/pkc.html"
    )

@login_required
def pkc_restoration(request):

    if not cek_aktivitas(
        request.user,
        "aktivitas3"
    ):
        return redirect("pkc")

    return render(
        request,
        "EnhanceLearn/pkc/pkc_restoration.html"
    )

@login_required
def rangkuman2(request):

    aktivitas3 = AktivitasSelesai.objects.filter(
        user=request.user,
        nama_aktivitas="aktivitas3"
    ).exists()

    aktivitas4 = AktivitasSelesai.objects.filter(
        user=request.user,
        nama_aktivitas="aktivitas4"
    ).exists()

    if not (aktivitas3 and aktivitas4):
        return redirect("pkc_restoration")

    return render(
        request,
        "EnhanceLearn/pkc/rangkuman2.html"
    )


# ===== Transformasi Intensitas =====
@login_required
def brightness(request):

    if not cek_lulus_kuis(
        request.user,
        "pkc"
    ):
        return redirect(
            "halaman_kuis",
            judul="pkc"
        )

    return render(
        request,
        "EnhanceLearn/intensitas/brightness.html"
    )

@login_required
def contrast(request):

    aktivitas5 = AktivitasSelesai.objects.filter(
        user=request.user,
        nama_aktivitas="aktivitas5"
    ).exists()

    if not aktivitas5:
        return redirect("brightness")

    return render(
        request,
        "EnhanceLearn/intensitas/contrast.html"
    )

@login_required
def negasi(request):

    aktivitas6 = AktivitasSelesai.objects.filter(
        user=request.user,
        nama_aktivitas="aktivitas6"
    ).exists()

    if not aktivitas6:
        return redirect("contrast")

    return render(
        request,
        "EnhanceLearn/intensitas/negasi.html"
    )

@login_required
def thresholding(request):

    aktivitas7 = AktivitasSelesai.objects.filter(
        user=request.user,
        nama_aktivitas="aktivitas7"
    ).exists()

    if not aktivitas7:
        return redirect("negasi")

    return render(
        request,
        "EnhanceLearn/intensitas/thresholding.html"
    )

@login_required
def logaritmik(request):

    aktivitas8 = AktivitasSelesai.objects.filter(
        user=request.user,
        nama_aktivitas="aktivitas8"
    ).exists()

    if not aktivitas8:
        return redirect("thresholding")

    return render(
        request,
        "EnhanceLearn/intensitas/logaritmik.html"
    )

@login_required
def power_law(request):

    aktivitas9 = AktivitasSelesai.objects.filter(
        user=request.user,
        nama_aktivitas="aktivitas9"
    ).exists()

    if not aktivitas9:
        return redirect("logaritmik")

    return render(
        request,
        "EnhanceLearn/intensitas/power_law.html"
    )

@login_required
def rangkuman3(request):

    aktivitas10 = AktivitasSelesai.objects.filter(
        user=request.user,
        nama_aktivitas="aktivitas10"
    ).exists()

    if not aktivitas10:
        return redirect("power_law")

    return render(
        request,
        "EnhanceLearn/intensitas/rangkuman3.html"
    )


# ===== Histogram =====
@login_required
def histogram_equalization(request):

    if not cek_lulus_kuis(
        request.user,
        "intensitas"
    ):
        return redirect(
            "halaman_kuis",
            judul="intensitas"
        )

    return render(
        request,
        "EnhanceLearn/histogram/equalization.html"
    )

@login_required
def histogram_specification(request):

    aktivitas11 = AktivitasSelesai.objects.filter(
        user=request.user,
        nama_aktivitas="aktivitas11"
    ).exists()

    if not aktivitas11:
        return redirect("histogram_equalization")

    return render(
        request,
        "EnhanceLearn/histogram/specification.html"
    )

@login_required
def rangkuman4(request):

    aktivitas12 = AktivitasSelesai.objects.filter(
        user=request.user,
        nama_aktivitas="aktivitas12"
    ).exists()

    if not aktivitas12:
        return redirect("histogram_specification")

    return render(
        request,
        "EnhanceLearn/histogram/rangkuman4.html"
    )


# ===== Praktek Python =====
@login_required
def grayscale_biner(request):

    if not cek_lulus_kuis(
        request.user,
        "histogram"
    ):
        return redirect(
            "halaman_kuis",
            judul="histogram"
        )

    return render(
        request,
        "EnhanceLearn/praktik/grayscale_biner.html"
    )

@login_required
def intensitas(request):

    aktivitas13 = AktivitasSelesai.objects.filter(
        user=request.user,
        nama_aktivitas="aktivitas13"
    ).exists()

    if not aktivitas13:
        return redirect("grayscale_biner")

    return render(
        request,
        "EnhanceLearn/praktik/intensitas.html"
    )

@login_required
def histogram(request):

    aktivitas14 = AktivitasSelesai.objects.filter(
        user=request.user,
        nama_aktivitas="aktivitas14"
    ).exists()

    if not aktivitas14:
        return redirect("intensitas")

    return render(
        request,
        "EnhanceLearn/praktik/histogram.html"
    )

@login_required
def rangkuman5(request):

    aktivitas15 = AktivitasSelesai.objects.filter(
        user=request.user,
        nama_aktivitas="aktivitas15"
    ).exists()

    if not aktivitas15:
        return redirect("histogram")

    return render(
        request,
        "EnhanceLearn/praktik/rangkuman5.html"
    )


@login_required
def evaluasi(request):

    if not cek_lulus_kuis(
        request.user,
        "praktik"
    ):
        return redirect(
            "halaman_kuis",
            judul="praktik"
        )

    return render(
        request,
        "EnhanceLearn/evaluasi.html"
    )

