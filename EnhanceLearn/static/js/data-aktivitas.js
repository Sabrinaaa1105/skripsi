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
        correct: 1,
        explanation: "Piksel merupakan elemen terkecil penyusun citra digital. Setiap piksel memiliki posisi (koordinat) dan nilai intensitas yang merepresentasikan informasi gambar."
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
        correct: 3,
        explanation: "Pada representasi citra digital, x dan y menunjukkan posisi piksel, sedangkan f(x,y) menunjukkan nilai intensitas atau tingkat keabuan pada posisi tersebut."
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
        correct: 2,
        explanation: "Daerah terang dan gelap pada citra grayscale ditentukan oleh nilai intensitas piksel. Semakin tinggi nilai intensitas, semakin terang tampilan piksel tersebut."
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
        correct: 3,
        explanation: "Komputer mengolah citra digital sebagai data numerik yang tersusun dalam bentuk matriks sehingga dapat diproses menggunakan algoritma dan operasi matematika."
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
        correct: 3,
        explanation: "Ukuran citra 256 × 512 berarti citra tersebut tersusun dari 256 baris dan 512 kolom piksel dalam representasi matriksnya."
    }
];

// ================== AKTIVITAS 2 ==================
const dataAktivitas2 = [
    {
        question: "Citra digital tersusun dari elemen-elemen kecil yang saling berdampingan untuk membentuk keseluruhan gambar. Elemen dasar yang dimaksud adalah…",
        options: ["piksel", "filter", "kanal", "histogram", "bit"],
        correct: 0,
         explanation: "Piksel merupakan unit terkecil penyusun citra digital. Ribuan hingga jutaan piksel yang tersusun bersama akan membentuk sebuah gambar utuh."
    },
    {
        question: "Citra grayscale hanya memiliki satu kanal yang menyimpan nilai terang–gelap, sehingga informasi yang ditampilkan berupa tingkatan…",
        options: ["warna primer", "kontras RGB", "kedalaman warna", "tekstur", "keabuan"],
        correct: 4,
        explanation: "Citra grayscale hanya menyimpan informasi tingkat keabuan, mulai dari hitam, abu-abu, hingga putih tanpa informasi warna."        
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
        correct: 0,
        explanation: "RGB merupakan singkatan dari Red, Green, dan Blue. Kombinasi ketiga warna dasar cahaya ini dapat menghasilkan berbagai warna pada citra digital."
    },
    {
        question: "Citra biner merupakan citra yang hanya menggunakan dua kemungkinan nilai piksel. Kedua nilai tersebut menunjukkan kondisi hitam dan putih, yaitu…",
        options: ["50 dan 100", "1 dan 2", "0 dan 1", "0 dan 255", "128 dan 255"],
        correct: 2,
        explanation: "Pada citra biner hanya terdapat dua kemungkinan nilai piksel, yaitu 0 dan 1 yang umumnya merepresentasikan warna hitam dan putih."
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
        correct: 3,
        explanation: "Resolusi citra ditentukan oleh jumlah piksel pada lebar dan tinggi gambar. Semakin tinggi jumlah piksel, semakin detail informasi yang dapat ditampilkan."
    }
];


// ================== AKTIVITAS 3 ==================
const dataAktivitas3 = [
    {
        question: "Tujuan utama dari Peningkatan Kualitas Citra (<em>Image Enhancement</em>) adalah untuk...",
        options: [
            "mengurangi ukuran file gambar secara signifikan",
            "membuat hasil citra lebih sesuai untuk pengamatan atau aplikasi tertentu",
            "menghasilkan gambar yang secara estetika sempurna",
            "mengubah citra berwarna menjadi citra biner",
            "menghitung total jumlah piksel dalam citra"
        ],
        correct: 1,
        explanation: "<em>Image Enhancement</em> bertujuan memperbaiki kualitas citra sehingga lebih mudah diamati manusia atau lebih sesuai untuk kebutuhan analisis dan pemrosesan selanjutnya."
    },
    {
        question: "Langkah Peningkatan Kualitas Citra sering dikategorikan sebagai <em>Image Pre-processing</em> karena...",
        options: [
            "ia merupakan langkah opsional yang hanya digunakan untuk tujuan visual",
            "ia mengubah format file menjadi JPEG atau PNG",
            "ia hanya berlaku untuk citra yang diakuisisi dari satelit",
            "ia selalu menghasilkan <em>false positives</em> dalam deteksi tepi",
            "ia adalah langkah awal yang krusial sebelum analisis hilir (seperti deteksi objek)"
        ],
        correct: 4,
        explanation: "<em>Image Enhancement</em> termasuk tahap pre-processing karena dilakukan sebelum proses analisis utama untuk meningkatkan kualitas data masukan agar hasil analisis lebih akurat."
    },
    {
        question: "Citra mentah yang mengalami penurunan mutu seringkali terlalu terang atau terlalu gelap, atau tercemar oleh...",
        options: [
            "<em>thresholding</em>",
            "matriks grid",
            "piksel elemen",
            "derau (<em>noise</em>)",
            "<em>end-in-search</em>"
        ],
        correct: 3,
        explanation: "<em>Noise</em> atau derau merupakan gangguan yang muncul pada citra dan dapat menurunkan kualitas visual maupun akurasi pemrosesan citra."
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
        correct: 3,
        explanation: "Kontras yang buruk membuat objek sulit dibedakan dari latar belakang sehingga proses deteksi objek atau deteksi tepi dapat menghasilkan kesalahan."
    },
    {
        question: "Proses perbaikan kualitas yang bertujuan membuat hasil akhir lebih sesuai untuk pengamatan atau aplikasi tertentu disebut...",
        options: [
            "<em>Image Enhancement</em>",
            "<em>Noise Reduction</em>",
            "<em>Image Segmentation</em>",
            "<em>Image Acquisition</em>",
            "<em>Edge Detection</em>"
        ],
        correct: 0,
        explanation: "<em>Image Enhancement</em> adalah proses memperbaiki atau meningkatkan kualitas citra agar lebih mudah diamati atau lebih efektif digunakan dalam aplikasi tertentu."
    }
];

// ================== AKTIVITAS 4 ==================
const dataAktivitas4 = [
    {
        question: "Dalam pemrosesan citra digital, perbedaan utama antara <em>image enhancement</em> dan <em>image restoration</em> terletak pada …",
        options: [
            "Tujuan dan pendekatan perbaikan citra",
            "Jenis citra yang diproses",
            "Ukuran dan resolusi citra",
            "Format penyimpanan citra",
            "Jumlah piksel citra"
        ],
        correct: 0,
        explanation: "<em>Image Enhancement</em> berfokus pada peningkatan kualitas visual citra sesuai kebutuhan pengguna, sedangkan <em>Image Restoration</em> bertujuan mengembalikan citra sedekat mungkin dengan kondisi aslinya menggunakan pendekatan matematis."
    },
    {
        question: "<em>Image restoration</em> umumnya digunakan ketika citra mengalami gangguan yang dapat dimodelkan secara matematis. Contoh gangguan tersebut adalah …",
        options: [
            "<em>Motion blur</em> dan <em>noise</em>",
            "Ukuran file yang terlalu besar",
            "Perbedaan format gambar",
            "Jumlah piksel yang sedikit",
            "Kecerahan monitor yang rendah"
        ],
        correct: 0,
        explanation: "<em>Image Restoration</em> digunakan untuk memperbaiki citra yang mengalami degradasi seperti <em>motion blur</em> dan <em>noise</em> dengan memanfaatkan model matematis dari gangguan tersebut."
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
        correct: 2,
        explanation: "Degradasi citra adalah kondisi ketika kualitas citra menurun akibat gangguan seperti noise, blur, atau distorsi sehingga informasi visual menjadi kurang jelas."
    },
    {
        question: "Citra yang tampak kabur akibat pergerakan kamera atau objek saat pengambilan gambar merupakan contoh degradasi berupa …",
        options: [
            "<em>Noise</em>",
            "Distorsi warna",
            "Penurunan resolusi",
            "<em>Motion blur</em>",
            "Kuantisasi citra"
        ],
        correct: 3,
        explanation: "<em>Motion blur</em> terjadi karena adanya pergerakan kamera atau objek saat proses pengambilan gambar sehingga detail objek menjadi kabur."
    },
    {
        question: "Pernyataan yang paling tepat mengenai perbedaan <em>image enhancement</em> dan <em>image restoration</em> adalah …",
        options: [
            "<em>Image enhancement</em> selalu menghilangkan degradasi citra",
            "<em>Image enhancement</em> bersifat subjektif, sedangkan <em>image restoration</em> bersifat objektif",
            "<em>Image restoration</em> hanya bertujuan memperindah tampilan citra",
            "<em>Image restoration</em> tidak memerlukan model degradasi",
            "<em>Image enhancement</em> dan <em>image restoration</em> selalu menghasilkan citra yang sama"
        ],
        correct: 1,
        explanation: "<em>Image Enhancement</em> bersifat subjektif karena hasil yang baik bergantung pada kebutuhan pengguna, sedangkan <em>Image Restoration</em> bersifat lebih objektif karena berusaha memulihkan citra berdasarkan model degradasi yang diketahui."
    }
];


// ================== AKTIVITAS 8 ==================
const dataAktivitas8 = [
    {
        question: "Pada operasi <em>thresholding</em>, seorang mahasiswa menggeser nilai ambang T dari 50 menjadi 180 pada media interaktif. Hasil citra biner berubah dari hampir seluruhnya putih menjadi hampir seluruhnya hitam. Kesimpulan yang paling tepat dari peristiwa tersebut adalah …",
        options: [
            "<em>Thresholding</em> menghasilkan citra grayscale baru",
            "<em>Thresholding</em> meningkatkan kontras citra secara bertahap",
            "<em>Thresholding</em> sensitif terhadap pemilihan nilai ambang T",
            "<em>Thresholding</em> tidak dipengaruhi oleh nilai intensitas piksel",
            "<em>Thresholding</em> hanya bekerja pada citra berwarna"
        ],
        correct: 2,
        explanation: "Hasil <em>thresholding</em> sangat dipengaruhi oleh nilai ambang T. Perubahan nilai T dapat menyebabkan perubahan besar pada jumlah piksel yang diklasifikasikan sebagai hitam atau putih."
    },
    {
        question: "Jika nilai ambang T pada operasi <em>thresholding</em> dipilih terlalu kecil, maka hasil citra biner yang paling mungkin diperoleh adalah …",
        options: [
            "Kontras citra meningkat secara optimal",
            "Seluruh piksel menjadi putih",
            "Seluruh piksel menjadi hitam",
            "Tidak terjadi perubahan citra",
            "Histogram citra menjadi rata"
        ],
        correct: 1,
        explanation: "Ketika nilai ambang terlalu kecil, sebagian besar piksel memiliki nilai intensitas lebih besar dari T sehingga dikonversi menjadi putih pada citra biner."
    },
    {
        question: "Manakah pernyataan berikut yang paling tepat membedakan <em>thresholding</em> dengan <em>contrast stretching</em>.",
        options: [
            "<em>Thresholding</em> mengubah citra <em>grayscale</em> menjadi citra biner",
            "<em>Thresholding</em> memperlebar rentang intensitas citra",
            "<em>Thresholding</em> mempertahankan seluruh tingkat keabuan",
            "<em>Thresholding</em> menambah atau mengurangi kecerahan citra",
            "<em>Thresholding</em> tidak menggunakan nilai ambang"
        ],
        correct: 0,
        explanation: "<em>Thresholding</em> mengubah citra menjadi dua tingkat nilai saja (biner), sedangkan <em>contrast stretching</em> mempertahankan tingkat keabuan tetapi memperlebar rentang intensitasnya."
    },
    {
        question: String.raw`
            Diberikan sebuah nilai piksel 5×5 dari suatu citra. Jika digunakan operasi
            <em>thresholding</em> dengan nilai ambang \(T = 100\) dan aturan:

            \[
            s =
            \begin{cases}
            255, & r > T \\
            0, & r \le T
            \end{cases}
            \]

            maka hasil citra biner yang benar adalah …
            `,
        options: [
            String.raw`\[
            \begin{bmatrix}
            0 & 0 & 0 & 255 & 255 \\
            0 & 0 & 0 & 255 & 255 \\
            0 & 0 & 255 & 255 & 255 \\
            0 & 0 & 255 & 255 & 255 \\
            0 & 255 & 255 & 255 & 255
            \end{bmatrix}
            \]`,

            String.raw`\[
            \begin{bmatrix}
            0 & 255 & 255 & 255 & 255 \\
            255 & 255 & 255 & 255 & 255 \\
            255 & 255 & 255 & 255 & 255 \\
            255 & 255 & 255 & 255 & 255 \\
            255 & 255 & 255 & 255 & 255
            \end{bmatrix}
            \]`,

            String.raw`\[
            \begin{bmatrix}
            0 & 0 & 0 & 0 & 255 \\
            0 & 0 & 0 & 255 & 255 \\
            0 & 0 & 255 & 255 & 255 \\
            0 & 0 & 255 & 255 & 255 \\
            0 & 0 & 255 & 255 & 255
            \end{bmatrix}
            \]`,

            String.raw`\[
            \begin{bmatrix}
            255 & 255 & 255 & 255 & 255 \\
            255 & 255 & 255 & 255 & 255 \\
            255 & 255 & 255 & 255 & 255 \\
            255 & 255 & 255 & 255 & 255 \\
            255 & 255 & 255 & 255 & 255
            \end{bmatrix}
            \]`,

            String.raw`\[
            \begin{bmatrix}
            0 & 0 & 0 & 0 & 0 \\
            0 & 0 & 0 & 0 & 0 \\
            0 & 0 & 0 & 0 & 0 \\
            0 & 0 & 0 & 0 & 0 \\
            0 & 0 & 0 & 0 & 0
            \end{bmatrix}
            \]`
        ],
        correct: 0,
        explanation: "Pada <em>thresholding</em> dengan T = 100, setiap piksel yang memiliki nilai lebih besar dari 100 akan diubah menjadi 255 (putih), sedangkan nilai yang kurang dari atau sama dengan 100 menjadi 0 (hitam)."
    },
    {
        question: "Jika nilai ambang T pada operasi <em>thresholding</em> diperbesar, maka jumlah piksel yang bernilai putih (255) pada citra hasil akan …",
        options: [
            "Tidak berubah sama sekali",
            "Menjadi acak",
            "Tetap",
            "Bertambah",
            "Berkurang"
        ],
        correct: 4,
        explanation: "Semakin besar nilai ambang T, semakin sedikit piksel yang memiliki intensitas melebihi ambang tersebut sehingga jumlah piksel putih pada hasil biner akan berkurang."
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
    answers: ["convert"],
    explanation: "Method convert('L') digunakan untuk mengubah citra berwarna menjadi citra grayscale."
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
    answers: ["point"],
    explanation: "Method point() digunakan untuk memetakan nilai setiap piksel berdasarkan fungsi tertentu."
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
    answers: ["ImageEnhance.Brightness"],
    explanation: "ImageEnhance.Brightness digunakan untuk mengatur tingkat kecerahan citra."
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
    answers: ["ImageEnhance.Contrast"],
    explanation: "ImageEnhance.Contrast digunakan untuk mengatur kontras citra."
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
    answers: ["ImageOps.invert", "convert"],
    explanation: "ImageOps.invert digunakan untuk membalik nilai intensitas piksel pada citra."
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
    answers: ["convert", "img.point"],
    explanation: "img.point() digunakan untuk menerapkan thresholding pada setiap piksel citra."
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
    answers: ["int(255*math.log(1 + p)/math.log(256))"],
    explanation: "Rumus logaritmik digunakan untuk memperjelas area citra yang gelap."
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
    answers: ["int(255 * (p / 255) ** gamma)"],
    explanation: "Rumus power law digunakan untuk melakukan gamma correction pada citra."
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
    answers: ["ImageOps.equalize"],
    explanation: "ImageOps.equalize digunakan untuk melakukan histogram equalization."
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
    answers: ['convert("L")', "histogram_specification(img, referensi)"],
    explanation: "Histogram specification digunakan untuk menyesuaikan histogram citra dengan citra referensi."
},

];