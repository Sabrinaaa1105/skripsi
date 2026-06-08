from django.contrib.auth.models import User

nama_baru = [
    "Aisyah Putri",
    "Nadila Rahma",
    "Muhammad Rizki",
    "Siti Aulia",
    "Fajar Ramadhan",
    "Ananda Putra",
    "Rina Kartika",
    "Dimas Saputra",
    "Yusuf Maulana",
    "Nabila Zahra",
    "Rahmat Hidayat",
    "Farhan Akbar",
    "Maya Sari",
    "Budi Santoso",
    "Dewi Lestari",
    "Andi Pratama",
    "Nina Oktaviani",
    "Rafi Kurniawan",
    "Sarah Amanda",
    "Iqbal Ramadhan",
    "Intan Permata",
    "Fikri Ananda",
    "Tasya Maharani",
    "Kevin Jonathan",
    "Laila Nuraini",
    "Hendra Wijaya",
    "Citra Dewi",
    "Adit Nugraha",
    "Rizka Amelia",
    "Bagas Mahendra"
]

for i in range(1, 31):
    nim = f"221013{i:04d}"

    try:
        user = User.objects.get(username=nim)
        user.first_name = nama_baru[i - 1]
        user.save()
    except User.DoesNotExist:
        print(f"User {nim} tidak ditemukan")

print("Nama mahasiswa berhasil diperbarui")