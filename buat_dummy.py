from django.contrib.auth.models import User
from EnhanceLearn.models import Profile, Kelas

# Sesuaikan dengan ID kelas baru milik dosen baru
kelas1 = Kelas.objects.get(id=9)
kelas2 = Kelas.objects.get(id=10)
kelas3 = Kelas.objects.get(id=11)

nama_mahasiswa = [
    "Muhammad Noor",
    "Siti Rahmah",
    "Ahmad Syauqi",
    "Nur Aini",
    "Rahmadi",
    "Fitriah",
    "Hairullah",
    "Nadia Safitri",
    "M. Ridho",
    "Aulia Rahman",

    "Fahmi Hidayat",
    "Putri Amelia",
    "Abdul Aziz",
    "Rina Marlina",
    "Muhammad Iqbal",
    "Nisa Khairunnisa",
    "Ardiansyah",
    "Dewi Sartika",
    "Fajar Ramadhan",
    "Anisa Putri",

    "Rizki Maulana",
    "Salsa Nabila",
    "M. Fadil",
    "Yuni Kartika",
    "Akbar Maulana",
    "Nurul Hikmah",
    "Hendra Saputra",
    "Tiara Ramadhani",
    "Alfiansyah",
    "Aisyah Zahra"
]

for i in range(1, 31):

    # NIM baru agar tidak bentrok dengan data lama
    nim = f"231013{i:04d}"

    if User.objects.filter(username=nim).exists():
        print(f"{nim} sudah ada")
        continue

    # Pembagian kelas
    if i <= 10:
        kelas = kelas1
    elif i <= 20:
        kelas = kelas2
    else:
        kelas = kelas3

    nama = nama_mahasiswa[i - 1]

    user = User.objects.create_user(
        username=nim,
        password="12345678",
        first_name=nama,
        email=f"mhs{i}@gmail.com"
    )

    Profile.objects.create(
        user=user,
        role="mahasiswa",
        nim=nim,
        kelas=kelas
    )

    print(f"Berhasil membuat: {nama} ({nim})")

print("30 mahasiswa berhasil dibuat")