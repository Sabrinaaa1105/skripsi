// ================== AKTIVITAS 1 ==================
const dataAktivitas1 = [
    {
        question: "Dalam pemrosesan citra digital, istilah piksel merujuk pada…",
        options: [
            "Sekumpulan nilai intensitas yang membentuk sebuah citra",
            "Elemen terkecil dari citra digital yang memiliki koordinat dan nilai intensitas",
            "Baris dan kolom dalam matriks citra digital",
            "Nilai maksimum dan minimum intensitas citra",
            "Representasi visual dari citra analog"
        ],
        correct: 1
    },
    {
        question: "Sebuah citra digital direpresentasikan sebagai fungsi dua dimensi f(x,y). Pernyataan yang paling tepat mengenai fungsi tersebut adalah…",
        options: [
            "f(x,y) menyatakan jumlah baris dan kolom citra",
            "f(x,y) menyatakan warna RGB pada setiap piksel",
            "x dan y menyatakan ukuran citra dalam piksel",
            "x dan y menyatakan posisi piksel, sedangkan f(x,y) menyatakan nilai intensitas",
            "x dan y menyatakan nilai intensitas, sedangkan f(x,y) menyatakan koordinat"
        ],
        correct: 3
    },
    {
        question: "Dalam citra digital grayscale, perbedaan antara daerah terang dan gelap pada citra disebabkan oleh perbedaan…",
        options: [
            "Ukuran piksel",
            "Posisi koordinat piksel",
            "Nilai intensitas piksel",
            "Jumlah baris dan kolom citra",
            "Resolusi spasial citra"
        ],
        correct: 2
    },
    {
        question: "Citra digital dapat diproses oleh komputer karena citra tersebut direpresentasikan dalam bentuk…",
        options: [
            "Gelombang cahaya",
            "Sinyal kontinu",
            "Pola visual",
            "Data numerik",
            "Gambar dua dimensi"
        ],
        correct: 3
    },
    {
        question: "Sebuah citra digital direpresentasikan dalam bentuk matriks berukuran N × M. Jika sebuah citra memiliki ukuran 256 × 512 piksel, maka pernyataan yang paling benar adalah…",
        options: [
            "Citra memiliki 256 bit dan 512 bit kedalaman warna",
            "Citra memiliki 256 piksel dan 512 tingkat keabuan",
            "Citra memiliki 256 tingkat keabuan dan 512 piksel",
            "Citra memiliki 256 baris dan 512 kolom",
            "Citra memiliki 256 kolom dan 512 baris"
        ],
        correct: 3
    }
];

// ================== AKTIVITAS 2 ==================
const dataAktivitas2 = [
    {
        question: "Citra digital tersusun dari elemen-elemen kecil yang saling berdampingan untuk membentuk keseluruhan gambar. Elemen dasar yang dimaksud adalah…",
        options: ["piksel", "filter", "kanal", "histogram", "bit"],
        correct: 0
    },
    {
        question: "Citra grayscale hanya memiliki satu kanal yang menyimpan nilai terang–gelap, sehingga informasi yang ditampilkan berupa tingkatan…",
        options: ["warna primer", "kontras RGB", "kedalaman warna", "tekstur", "keabuan"],
        correct: 4
    },
    {
        question: "Model warna RGB membentuk citra berwarna melalui penggabungan tiga komponen dasar cahaya. Komponen tersebut terdiri dari warna…",
        options: [
            "merah, hijau, dan biru",
            "kuning, cyan, dan magenta",
            "hitam, abu, dan putih",
            "biru, ungu, dan hijau tua",
            "merah, kuning, dan hitam"
        ],
        correct: 0
    },
    {
        question: "Citra biner merupakan citra yang hanya menggunakan dua kemungkinan nilai piksel. Kedua nilai tersebut menunjukkan kondisi hitam dan putih, yaitu…",
        options: ["50 dan 100", "1 dan 2", "0 dan 1", "0 dan 255", "128 dan 255"],
        correct: 2
    },
    {
        question: "Resolusi citra menentukan seberapa detail objek dapat dilihat dalam gambar. Resolusi ditentukan oleh jumlah…",
        options: [
            "waktu pemrosesan citra",
            "warna yang digunakan",
            "format penyimpanan",
            "piksel pada lebar dan tinggi citra",
            "filter yang diterapkan"
        ],
        correct: 3
    }
];


// ================== AKTIVITAS 3 ==================
const dataAktivitas3 = [
    {
        question: "Tujuan utama dari Peningkatan Kualitas Citra (Image Enhancement) adalah untuk...",
        options: [
            "mengurangi ukuran file gambar secara signifikan",
            "membuat hasil citra lebih sesuai untuk pengamatan atau aplikasi tertentu",
            "menghasilkan gambar yang secara estetika sempurna",
            "mengubah citra berwarna menjadi citra biner",
            "menghitung total jumlah piksel dalam citra"
        ],
        correct: 1
    },
    {
        question: "Langkah Peningkatan Kualitas Citra sering dikategorikan sebagai Image Pre-processing karena...",
        options: [
            "ia merupakan langkah opsional yang hanya digunakan untuk tujuan visual",
            "ia mengubah format file menjadi JPEG atau PNG",
            "ia hanya berlaku untuk citra yang diakuisisi dari satelit",
            "ia selalu menghasilkan false positives dalam deteksi tepi",
            "ia adalah langkah awal yang krusial sebelum analisis hilir (seperti deteksi objek)"
        ],
        correct: 4
    },
    {
        question: "Citra mentah yang mengalami penurunan mutu seringkali terlalu terang atau terlalu gelap, atau tercemar oleh...",
        options: [
            "thresholding",
            "matriks grid",
            "piksel elemen",
            "derau (noise)",
            "end-in-search"
        ],
        correct: 3
    },
    {
        question: "Jika citra masukan memiliki kontras yang buruk, algoritma deteksi objek yang diterapkan selanjutnya cenderung menghasilkan...",
        options: [
            "citra biner yang sempurna",
            "keluaran yang sangat akurat",
            "komputasi yang lebih cepat",
            "keluaran yang tidak akurat, memicu deteksi tepi palsu",
            "konversi citra ke ruang warna HSV"
        ],
        correct: 3
    },
    {
        question: "Proses perbaikan kualitas yang bertujuan membuat hasil akhir lebih sesuai untuk pengamatan atau aplikasi tertentu disebut...",
        options: [
            "Image Enhancement",
            "Noise Reduction",
            "Image Segmentation",
            "Image Acquisition",
            "Edge Detection"
        ],
        correct: 0
    }
];

// ================== AKTIVITAS 4 ==================
const dataAktivitas4 = [
    {
        question: "Dalam pemrosesan citra digital, perbedaan utama antara image enhancement dan image restoration terletak pada …",
        options: [
            "Tujuan dan pendekatan perbaikan citra",
            "Jenis citra yang diproses",
            "Ukuran dan resolusi citra",
            "Format penyimpanan citra",
            "Jumlah piksel citra"
        ],
        correct: 0
    },
    {
        question: "Dalam pemrosesan citra digital, perbedaan utama antara image enhancement dan image restoration terletak pada …",
        options: [
            "Dengan atau tanpa mengubah citra",
            "Menggunakan citra grayscale atau berwarna",
            "Berdasarkan model degradasi yang diketahui atau tidak",
            "Menggunakan perangkat lunak tertentu",
            "Dengan atau tanpa mengubah nilai piksel"
        ],
        correct: 2
    },
    {
        question: "Degradasi citra dapat diartikan sebagai …",
        options: [
            "Proses peningkatan kualitas citra secara visual",
            "Proses konversi citra analog ke digital",
            "Penurunan kualitas citra sehingga tidak merepresentasikan objek aslinya dengan baik",
            "Proses penyimpanan citra dalam bentuk matriks",
            "Proses penajaman citra menggunakan filter"
        ],
        correct: 2
    },
    {
        question: "Citra yang tampak kabur akibat pergerakan kamera atau objek saat pengambilan gambar merupakan contoh degradasi berupa …",
        options: [
            "Noise",
            "Distorsi warna",
            "Penurunan resolusi",
            "Motion blur",
            "Kuantisasi citra"
        ],
        correct: 3
    },
    {
        question: "Pernyataan yang paling tepat mengenai perbedaan image enhancement dan image restoration adalah …",
        options: [
            "Image enhancement selalu menghilangkan degradasi citra",
            "Image enhancement bersifat subjektif, sedangkan image restoration bersifat objektif",
            "Image restoration hanya bertujuan memperindah tampilan citra",
            "Image restoration tidak memerlukan model degradasi",
            "Image enhancement dan image restoration selalu menghasilkan citra yang sama"
        ],
        correct: 1
    }
];


// ================== AKTIVITAS 8 ==================
const dataAktivitas8 = [
    {
        question: "Pada operasi thresholding, seorang mahasiswa menggeser nilai ambang T dari 50 menjadi 180 pada media interaktif. Hasil citra biner berubah dari hampir seluruhnya putih menjadi hampir seluruhnya hitam. Kesimpulan yang paling tepat dari peristiwa tersebut adalah …",
        options: [
            "Thresholding menghasilkan citra grayscale baru",
            "Thresholding meningkatkan kontras citra secara bertahap",
            "Thresholding sensitif terhadap pemilihan nilai ambang T",
            "Thresholding tidak dipengaruhi oleh nilai intensitas piksel",
            "Thresholding hanya bekerja pada citra berwarna"
        ],
        correct: 2
    },
    {
        question: "Jika nilai ambang T pada operasi thresholding dipilih terlalu kecil, maka hasil citra biner yang paling mungkin diperoleh adalah …",
        options: [
            "Kontras citra meningkat secara optimal",
            "Seluruh piksel menjadi putih",
            "Seluruh piksel menjadi hitam",
            "Tidak terjadi perubahan citra",
            "Histogram citra menjadi rata"
        ],
        correct: 1
    },
    {
        question: "Manakah pernyataan berikut yang paling tepat membedakan thresholding dengan contrast stretching.",
        options: [
            "Thresholding mengubah citra grayscale menjadi citra biner",
            "Thresholding memperlebar rentang intensitas citra",
            "Thresholding mempertahankan seluruh tingkat keabuan",
            "Thresholding menambah atau mengurangi kecerahan citra",
            "Thresholding tidak menggunakan nilai ambang"
        ],
        correct: 0
    },
    {
        question: "Diberikan sebuah nilai piksel 5×5 dari suatu citra. Jika digunakan operasi thresholding dengan nilai ambang T = 100 dan aturan s = 255 jika r > T, dan 0 jika r ≤ T, maka hasil citra biner yang benar adalah …",
        options: [
            "[[0,0,0,255,255],[0,0,0,255,255],[0,0,255,255,255],[0,0,255,255,255],[0,255,255,255,255]]",
            "[[0,255,255,255,255],[255,255,255,255,255],[255,255,255,255,255],[255,255,255,255,255],[255,255,255,255,255]]",
            "[[0,0,0,0,255],[0,0,0,255,255],[0,0,255,255,255],[0,0,255,255,255],[0,0,255,255,255]]",
            "[[255,255,255,255,255],[255,255,255,255,255],[255,255,255,255,255],[255,255,255,255,255],[255,255,255,255,255]]",
            "[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]"
        ],
        correct: 0
    },
    {
        question: "Jika nilai ambang T pada operasi thresholding diperbesar, maka jumlah piksel yang bernilai putih (255) pada citra hasil akan …",
        options: [
            "Tidak berubah sama sekali",
            "Menjadi acak",
            "Tetap",
            "Bertambah",
            "Berkurang"
        ],
        correct: 4
    }
];




const dataAktivitas13 = [
{
    type: "fill",
    question: "Lengkapi kode berikut untuk mengubah citra berwarna menjadi grayscale menggunakan Pillow.",
    code: `
<div class="code-question">
<pre>
img = Image.open("gambar.jpg")

gray = img.<input type="text" class="fill-input" data-index="0">("L")
</pre>
</div>
    `,
    answers: ["convert"]
},
{
    type: "fill",
    question: "Lengkapi kode berikut untuk mengubah citra grayscale menjadi biner menggunakan thresholding.",
    code: `
<div class="code-question">
<pre>
threshold = 128

binary = gray.<input type="text" class="fill-input" data-index="0"> (lambda p: 255 if > threshold else 0)
</pre>
</div>
    `,
    answers: ["point"]
}
];



const dataAktivitas14 = [
{
    type: "fill",
    question: "Lengkapi potongan kode berikut untuk meningkatkan kecerahan (brightness) gambar menggunakan library Pillow.",
    code: `
<div class="code-question">
<pre>
img = Image.open("gambar.jpg")

brightness = <input type="text" class="fill-input" data-index="0">(img).enhance(1.5))
</pre>
</div>
    `,
    answers: ["ImageEnhance.Brightness"]
},
{
    type: "fill",
    question: "Lengkapi potongan kode berikut untuk meningkatkan kontras (contrast) gambar menggunakan library Pillow.",
    code: `
<div class="code-question">
<pre>
img = Image.open("gambar.jpg")

contrast = <input type="text" class="fill-input" data-index="0">(img).enhance(1.5))
</pre>
</div>
    `,
    answers: ["ImageEnhance.Contrast"]
},
{
    type: "fill",
    question: "Lengkapi potongan kode berikut untuk melakukan operasi negasi (invert) pada gambar menggunakan library Pillow.",
    code: `
<div class="code-question">
<pre>
img = Image.open("gambar.jpg")

negasi = <input type="text" class="fill-input" data-index="0">(img.<input type="text" class="fill-input" data-index="1">("L"))
</pre>
</div>
    `,
    answers: ["ImageOps.invert", "convert"]
},
{
    type: "fill",
    question: "Lengkapi potongan kode berikut untuk melakukan proses thresholding pada gambar menggunakan library Pillow.",
    code: `
<div class="code-question">
<pre>
img = Image.open("gambar.jpg").<input type="text" class="fill-input" data-index="0">("L")

threshold = <input type="text" class="fill-input" data-index="1">(lambda p: 255 if p > 128 else 0)
</pre>
</div>
    `,
    answers: ["convert", "img.point"]
},
{
    type: "fill",
    question: "Lengkapi potongan kode berikut untuk melakukan transformasi logaritmik pada citra menggunakan library Pillow.",
    code: `
<div class="code-question">
<pre>
img = Image.open("gambar.jpg").convert("L")

log = img.point(lambda p: <input type="text" class="fill-input" data-index="0">)
</pre>
</div>
    `,
    answers: ["int(255*math.log(1 + p)/math.log(256))"]
},
{
    type: "fill",
    question: "Lengkapi potongan kode berikut untuk melakukan transformasi power law (gamma correction) pada citra menggunakan library Pillow.",
    code: `
<div class="code-question">
<pre>
img = Image.open("gambar.jpg").convert("L")
gamma = 2.0
power_law = img.point(lambda p: <input type="text" class="fill-input" data-index="0">)
</pre>
</div>
    `,
    answers: ["int(255 * (p / 255) ** gamma)"]
},

];


const dataAktivitas15 = [
{
    type: "fill",
    question: "Lengkapi kode berikut untuk meningkatkan kontras citra menggunakan metode histogram equalization.",
    code: `
<div class="code-question">
<pre>
img = Image.open("gambar.jpg").convert("L")

equali = <input type="text" class="fill-input" data-index="0">(img)
</pre>
</div>
    `,
    answers: ["ImageOps.equalize"]
},
{
    type: "fill",
    question: "Lengkapi potongan kode berikut untuk meningkatkan kontras (contrast) gambar menggunakan library Pillow.",
    code: `
<div class="code-question">
<pre>
img = Image.open("gambar.jpg").convert("L")

ref = Image.open("referensi.jpg"). <input type="text" class="fill-input" data-index="0">

hasil = <input type="text" class="fill-input" data-index="1">
</pre>
</div>
    `,
    answers: ['convert("L")', "histogram_specification(img, referensi)"]
},

];