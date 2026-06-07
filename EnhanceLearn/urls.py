from django.urls import path
from . import views

urlpatterns = [
    path('', views.beranda, name='beranda'),
    path('tentang/', views.tentang, name='tentang'),
    path('materi/', views.materi, name='materi'),
    path('login/', views.login_user, name='login'),

    # ================= DOSEN =================
    path('register-dosen/', views.register_dosen, name='register_dosen'),
    path('logout-dosen/', views.logout_dosen, name='logout_dosen'),
    path('dashboard-dosen/', views.dashboard_dosen, name='dashboard_dosen'),
    path("update-kkm/", views.update_kkm, name="update_kkm"),
    path('dosen/data-kelas/', views.data_kelas, name='data_kelas'),
    path('dosen/data-kelas/hapus-kelas/<int:id>/', views.hapus_kelas, name='hapus_kelas'),
    path('dosen/data-mahasiswa/', views.data_mahasiswa, name='data_mahasiswa'),
    path('dosen/data-mahasiswa/edit/<int:id>/', views.edit_mahasiswa, name='edit_mahasiswa'),
    path('dosen/data-mahasiswa/hapus/<int:id>/', views.hapus_mahasiswa, name='hapus_mahasiswa'),
    path("dosen/export-mahasiswa/", views.export_mahasiswa_excel, name="export_mahasiswa_excel"),
    path('dosen/progres-mahasiswa/', views.progres_mahasiswa, name='progres_mahasiswa'),
    path("detail-progress/<int:user_id>/", views.detail_progress, name="detail_progress"),
    path('dosen/data-nilai/', views.data_nilai, name='data_nilai'),
    path("data-nilai/", views.data_nilai, name="data_nilai"),
    path("riwayat-json/<int:user_id>/", views.riwayat_kuis_json, name="riwayat_json"),
    path("export-nilai-excel/", views.export_nilai_excel, name="export_nilai_excel"),

    # ================= MAHASISWA =================
    path("dashboard/", views.dashboard_mhs, name="dashboard"),
    path("simpan-progress/", views.simpan_progress, name="simpan_progress"),
    path('simpan-aktivitas/', views.simpan_aktivitas, name='simpan_aktivitas'),
    path("dosen/progres-mahasiswa/", views.progres_mahasiswa, name="progres_mahasiswa"),
    # path('login-mhs/register/', views.login_mhs, name='login_mhs'),
    path('mahasiswa/register/', views.register_mhs, name='register_mhs'),

    # TAMBAHAN LOGOUT
    path('mahasiswa/logout/', views.logout_mhs, name='logout_mhs'),

    # Pendahuluan
    path("pendahuluan/citra-digital/", views.citra_digital, name="citra_digital"),
    path("pendahuluan/jenis-citra/", views.jenis_citra, name="jenis_citra"),
    path("pendahuluan/rangkuman1/", views.rangkuman1, name="rangkuman1"),


    # Pengantar PKC
    path("pkc/pkc/", views.pkc, name="pkc"),
    path("pkc/pkc-restoration/", views.pkc_restoration, name="pkc_restoration"),
    path("pkc/rangkuman2/", views.rangkuman2, name="rangkuman2"),


    # Transformasi Intensitas
    path("intensitas/brightness/", views.brightness, name="brightness"),
    path("intensitas/contrast/", views.contrast, name="contrast"),
    path("intensitas/negasi/", views.negasi, name="negasi"),
    path("intensitas/thresholding/", views.thresholding, name="thresholding"),
    path("intensitas/logaritmik/", views.logaritmik, name="logaritmik"),
    path("intensitas/power-law/", views.power_law, name="power_law"),
    path("intensitas/rangkuman3/", views.rangkuman3, name="rangkuman3"),


    # Modifikasi Histogram
    path("histogram/equalization/", views.histogram_equalization, name="histogram_equalization"),
    path("histogram/specification/", views.histogram_specification, name="histogram_specification"),
    path("histogram/rangkuman4/", views.rangkuman4, name="rangkuman4"),


    # Kuis
    path("kuis/<str:judul>/", views.halaman_kuis, name="halaman_kuis"),
    path("hasil-kuis/", views.hasil_kuis, name="hasil_kuis"),
    path("hasil-kuis/<int:id>/", views.halaman_hasil, name="halaman_hasil"),

    # Python
    path("praktik/grayscale_biner", views.grayscale_biner, name="grayscale_biner"),
    path("praktik/intensitas", views.intensitas, name="intensitas"),
    path("praktik/histogram", views.histogram, name="histogram"),
    path("praktik/rangkuman5/", views.rangkuman5, name="rangkuman5"),

    path('evaluasi/', views.evaluasi, name='evaluasi'),
]
