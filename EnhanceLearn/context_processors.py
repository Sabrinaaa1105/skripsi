from .models import AktivitasSelesai, HasilKuis

def progress_sidebar(request):

    if request.user.is_authenticated:

        aktivitas = AktivitasSelesai.objects.filter(
            user=request.user
        ).values_list(
            "nama_aktivitas",
            flat=True
        )

        kuis = HasilKuis.objects.filter(
            user=request.user,
            status="lulus"
        ).values_list(
            "judul_kuis",
            flat=True
        )

        return {
            "aktivitas_selesai": list(aktivitas),
            "kuis_lulus": list(kuis),
        }

    return {
        "aktivitas_selesai": [],
        "kuis_lulus": [],
    }