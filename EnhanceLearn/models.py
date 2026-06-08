from django.db import models
from django.contrib.auth.models import User
import uuid


class Profile(models.Model):

    ROLE_CHOICES = (
        ('mahasiswa', 'Mahasiswa'),
        ('dosen', 'Dosen'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    # tambahan untuk mahasiswa
    nim = models.CharField(max_length=20, null=True, blank=True)

    # relasi mahasiswa ke kelas
    kelas = models.ForeignKey(
        'Kelas',
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    def __str__(self):
        return self.user.username


class Kelas(models.Model):
    nama_kelas = models.CharField(max_length=100)
    token = models.CharField(
        max_length=6,
        unique=True,
        editable=False
    )

    dosen = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    dibuat_pada = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):

        if not self.token:
            self.token = uuid.uuid4().hex[:6].upper()

        super().save(*args, **kwargs)

    def __str__(self):
        return self.nama_kelas

    class Meta:
        db_table = "kelas"


class HasilKuis(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    judul_kuis = models.CharField(max_length=200)
    tanggal = models.DateField(auto_now_add=True)
    waktu_mulai = models.DateTimeField()
    waktu_selesai = models.DateTimeField()
    nilai = models.IntegerField()
    status = models.CharField(max_length=20)
    percobaan_ke = models.IntegerField()

    detail_soal = models.JSONField(
        default=list,
        blank=True
    )

    def __str__(self):
        return f"{self.user.username} - {self.judul_kuis} - Percobaan {self.percobaan_ke}"
    

class KKM(models.Model):
    nilai = models.IntegerField(default=70)

    def __str__(self):
        return f"KKM: {self.nilai}"
    

class ProgressMahasiswa(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    progress = models.IntegerField(default=0)
    aktivitas_selesai = models.IntegerField(default=0)
    kuis_selesai = models.IntegerField(default=0)
    terakhir_update = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} - {self.progress}%"

class AktivitasSelesai(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    nama_aktivitas = models.CharField(max_length=50)

    class Meta:
        unique_together = ('user', 'nama_aktivitas')