// ================= SEMUA DATA SOAL =================

window.quizData = {

pendahuluan: [

{
question: "Citra digital adalah gambar yang direpresentasikan dalam bentuk data numerik sehingga dapat…",
options: [
"Ditampilkan oleh kamera analog",
"Diproses oleh komputer",
"Disimpan sebagai nilai kontinu",
"Ditampilkan tanpa piksel",
"Ditangkap oleh mata manusia"
],
correct: 1
},

{
question: "Elemen terkecil penyusun sebuah citra digital yang memiliki koordinat dan nilai intensitas disebut…",
options: [
"Kanal",
"Bit",
"Piksel",
"Matriks",
"Histogram"
],
correct: 2
},

{
question: `Perhatikan representasi matriks citra digital berikut:
$$f(x,y)= \\begin{bmatrix}
f(0,0) & f(0,1) & \\cdots & f(0,M-1) \\\\
f(1,0) & f(1,1) & \\cdots & f(1,M-1) \\\\
\\vdots & \\vdots & \\ddots & \\vdots \\\\
f(N-1,0) & f(N-1,1) & \\cdots & f(N-1,M-1)
\\end{bmatrix}$$
Berdasarkan matriks tersebut, nilai $N$ dan $M$ masing-masing menyatakan …`,
options: [
"Nilai intensitas minimum dan maksimum",
"Kedalaman bit dan tingkat keabuan",
"Resolusi dan kontras citra",
"Koordinat piksel pusat citra",
"Jumlah baris dan jumlah kolom citra"
],
correct: 4
},

{
question: "Dalam citra digital grayscale, perbedaan antara daerah terang dan gelap pada citra disebabkan oleh perbedaan …",
options: [
"Ukuran piksel",
"Posisi koordinat piksel",
"Resolusi dan kontras citra",
"Jumlah baris dan kolom citra",
"Nilai intensitas piksel"
],
correct: 4
},

{
question: "Pada citra grayscale dengan kedalaman 8 bit, nilai intensitas piksel berada pada rentang …",
options: [
"0 sampai 255",
"1 sampai 256",
"0 sampai 127",
"1 sampai 128",
"0 sampai 1023"
],
correct: 0
},

{
question: "Jika citra grayscale akan diubah menjadi citra biner, maka proses yang diperlukan adalah …",
options: [
"Histogram equalization",
"Filtering",
"Edge detection",
"Thresholding",
"Image detection"
],
correct: 3
},

{
question: `Perhatikan matriks piksel grayscale berikut:
$$\\begin{bmatrix}
20 & 25 & 30 & 28 \\\\
22 & 24 & 28 & 26 \\\\
18 & 20 & 26 & 24 \\\\
20 & 22 & 24 & 26
\\end{bmatrix}$$
Citra tersebut cenderung terlihat …`,
options: [
"Sangat terang",
"Terlalu gelap",
"Terang",
"Gelap",
"Berwarna"
],
correct: 1
},

{
question: "Citra biner merupakan citra yang hanya menggunakan dua kemungkinan nilai piksel. Kedua nilai tersebut adalah …",
options: [
"0 dan 1",
"0 dan 255",
"1 dan 2",
"50 dan 100",
"128 dan 255"
],
correct: 0
},

{
question: "Dalam representasi citra digital sebagai matriks, perubahan posisi piksel dari $f(2,3)$ ke $f(2,4)$ menunjukkan perpindahan …",
options: [
"Dua kolom ke kanan",
"Dua baris ke bawah",
"Satu baris ke bawah",
"Satu kolom ke kanan",
"Satu baris ke atas"
],
correct: 3
},

{
question: `Perhatikan matriks piksel berikut:
$$\\begin{bmatrix}
1 & 0 & 1 & 0 \\\\
0 & 0 & 1 & 1 \\\\
1 & 1 & 0 & 0 \\\\
0 & 1 & 0 & 1
\\end{bmatrix}$$
Berdasarkan nilai piksel yang dimiliki, matriks tersebut menunjukkan jenis citra …`,
options: [
"Citra dengan tiga kanal warna",
"Citra keabuan",
"Citra dua tingkat intensitas",
"Citra berwarna penuh",
"Citra kontinu"
],
correct: 2
}

],



pkc: [

{
question: "Tujuan utama dari image enhancement dalam pengolahan citra digital adalah …",
options: [
"Mengurangi ukuran file citra",
"Membuat citra terlihat lebih indah",
"Mengubah format penyimpanan citra",
"Menghitung jumlah piksel citra",
"Menghasilkan citra yang lebih sesuai untuk analisis atau aplikasi tertentu"
],
correct: 4
},

{
question: "Image enhancement dikategorikan sebagai tahap image pre-processing karena …",
options: [
"Selalu meningkatkan resolusi citra",
"Digunakan setelah segmentasi citra",
"Berperan menyiapkan citra sebelum proses analisis lanjutan",
"Hanya digunakan untuk kepentingan visual",
"Menghasilkan citra akhir sistem"
],
correct: 2
},

{
question: "Citra dengan kontras rendah dapat berdampak pada proses lanjutan karena …",
options: [
"Mempercepat komputasi",
"Mengurangi kebutuhan memori",
"Menyebabkan deteksi tepi atau objek menjadi tidak akurat",
"Menghilangkan noise secara alami",
"Meningkatkan ketajaman citra"
],
correct: 2
},

{
question: "Pendekatan perbaikan citra yang memanfaatkan model degradasi yang diketahui disebut …",
options: [
"Image enhancement",
"Image restoration",
"Image segmentation",
"Image acquisition",
"Image compression"
],
correct: 1
},

{
question: "Perbedaan utama antara image enhancement dan image restoration terletak pada …",
options: [
"Ada atau tidaknya model degradasi dalam proses perbaikan",
"Jenis citra yang diproses",
"Resolusi dan ukuran citra",
"Jumlah kanal warna citra",
"Format file citra"
],
correct: 0
},

{
question: "Citra yang tampak kabur akibat pergerakan kamera saat pengambilan gambar merupakan contoh degradasi berupa …",
options: [
"Noise",
"Motion blur",
"Distorsi warna",
"Kuantisasi",
"Aliasing"
],
correct: 1
},

{
question: "Jika image enhancement dilakukan untuk menonjolkan detail tertentu sesuai kebutuhan pengguna, maka enhancement tersebut bersifat …",
options: [
"Tetap",
"Objektif",
"Absolut",
"Subjektif",
"Universal"
],
correct: 3
},

{
question: "Histogram equalization tidak selalu cocok digunakan karena …",
options: [
"Dapat memperkuat noise atau detail yang tidak diinginkan",
"Mengurangi resolusi citra",
"Mengubah format file",
"Menghilangkan tepi citra",
"Tidak memengaruhi distribusi intensitas"
],
correct: 0
},

{
question: "Kegagalan sistem pengenalan objek sering terjadi jika citra masukan berkualitas buruk karena …",
options: [
"Algoritma terlalu sederhana",
"Ukuran citra terlalu kecil",
"Citra tidak berwarna",
"Format citra tidak sesuai",
"Informasi visual yang diperlukan tidak cukup jelas"
],
correct: 4
},

{
question: "Pernyataan yang paling tepat mengenai tujuan image enhancement adalah …",
options: [
"Selalu memperbaiki citra secara objektif",
"Hanya digunakan pada citra yang rusak",
"Menghilangkan semua degradasi citra",
"Mendukung proses analisis atau aplikasi tertentu",
"Tidak memengaruhi interpretasi citra"
],
correct: 3
}

],


intensitas: [

{
question: "Sebuah citra grayscale tampak terlalu terang setelah transformasi brightness diterapkan. Kondisi tersebut paling mungkin terjadi karena …",
options: [
"Nilai brightness terlalu kecil",
"Tidak dilakukan normalisasi intensitas",
"Terjadi clipping pada nilai intensitas tinggi",
"Transformasi brightness bersifat nonlinier",
"Brightness mengubah struktur spasial citra"
],
correct: 2
},

{
question: `Diberikan citra grayscale 8-bit berukuran 4×4 berikut:<br>
$$f=\\begin{bmatrix}
30 & 40 & 50 & 60 \\\\
70 & 80 & 90 & 100 \\\\
110 & 120 & 130 & 140 \\\\
150 & 160 & 170 & 180
\\end{bmatrix}$$
Jika diterapkan transformasi brightness dengan nilai b=+80, maka kesimpulan mengenai citra hasilnya adalah …`,
options: [
"Seluruh piksel mengalami peningkatan nilai yang sama tanpa efek samping",
"Sebagian piksel mengalami clipping pada nilai maksimum",
"Histogram citra menjadi seragam",
"Kontras citra menurun secara signifikan",
"Citra berubah menjadi citra biner"
],
correct: 1
},

{
question: "Jika suatu citra memiliki nilai intensitas minimum 90 dan maksimum 110, lalu diterapkan contrast stretching ke rentang 0–255, maka dampak utama yang diharapkan adalah …",
options: [
"Penambahan informasi baru pada citra",
"Peningkatan perbedaan visual antara area gelap dan terang",
"Pengurangan noise secara signifikan",
"Pengubahan citra grayscale menjadi citra biner",
"Perubahan struktur spasial objek"
],
correct: 1
},

{
question: "Perbedaan paling mendasar antara contrast stretching dan thresholding ditinjau dari hasil citranya adalah …",
options: [
"Contrast stretching menghasilkan citra berwarna",
"Thresholding tidak memerlukan fungsi transformasi",
"Thresholding memperluas rentang intensitas",
"Keduanya menghasilkan citra dengan histogram seragam",
"Contrast stretching mempertahankan tingkat keabuan"
],
correct: 4
},

{
question: "Penerapan contrast stretching pada citra berkontras rendah bertujuan untuk …",
options: [
"Memperjelas perbedaan area gelap dan terang",
"Menambahkan informasi baru pada citra",
"Menggeser seluruh nilai intensitas",
"Mengubah citra menjadi biner",
"Menghilangkan noise citra"
],
correct: 0
},

{
question: `Diberikan citra 4×4 berikut:<br>
$$f=\\begin{bmatrix}
10 & 15 & 20 & 25 \\\\
30 & 35 & 40 & 45 \\\\
50 & 55 & 60 & 65 \\\\
70 & 75 & 80 & 85
\\end{bmatrix}$$
Jika tujuan pengolahan adalah menonjolkan objek terang pada latar belakang gelap, maka penerapan operasi negasi pada citra tersebut akan …`,
options: [
"Mengurangi rentang intensitas",
"Menghilangkan detail citra",
"Membalik distribusi intensitas citra",
"Memperbesar noise citra",
"Mengubah citra menjadi biner"
],
correct: 2
},

{
question: `Diberikan matriks citra 4×4 berikut:<br>
$$f=\\begin{bmatrix}
45 & 60 & 75 & 90 \\\\
105 & 120 & 135 & 150 \\\\
165 & 180 & 195 & 210 \\\\
225 & 240 & 250 & 255
\\end{bmatrix}$$
Jika digunakan thresholding dengan nilai ambang T=120, maka karakteristik citra hasil adalah …`,
options: [
"Mayoritas piksel bernilai putih",
"Mayoritas piksel bernilai hitam",
"Seluruh piksel bernilai putih",
"Jumlah piksel putih lebih banyak daripada hitam",
"Tidak terjadi perubahan citra"
],
correct: 3
},

{
question: "Jika nilai ambang pada thresholding diperbesar, maka jumlah piksel putih pada citra hasil akan …",
options: [
"Menjadi acak",
"Menjadi seimbang",
"Tidak berubah",
"Berkurang",
"Bertambah"
],
correct: 3
},

{
question: "Pada transformasi power-law, pemilihan parameter γ < 1 menyebabkan …",
options: [
"Detail area gelap lebih ditonjolkan",
"Citra menjadi lebih gelap",
"Detail area terang ditekan",
"Transformasi bersifat linier",
"Histogram tidak berubah"
],
correct: 0
},

{
question: `Diberikan matriks citra 4×4 berikut:<br>
$$f=\\begin{bmatrix}
12 & 15 & 18 & 20 \\\\
22 & 25 & 28 & 30 \\\\
32 & 35 & 38 & 40 \\\\
42 & 45 & 48 & 50
\\end{bmatrix}$$
Citra tampak gelap dan detail pada intensitas rendah sulit diamati. Transformasi intensitas yang digunakan untuk menonjolkan detail tersebut adalah …`,
options: [
"Brightness",
"Contrast stretching",
"Operasi negasi",
"Thresholding",
"Transformasi logaritmik"
],
correct: 4
}

],


histogram: [

{
question: "Tujuan utama dari histogram equalization dalam peningkatan kualitas citra adalah …",
options: [
"Meratakan distribusi intensitas agar kontras meningkat",
"Menyamakan histogram dua citra berbeda",
"Mengubah citra grayscale menjadi citra biner",
"Menghilangkan noise pada citra",
"Mengubah ukuran citra"
],
correct: 0
},

{
question: "Sebuah citra grayscale memiliki histogram yang sebagian besar nilainya terkonsentrasi pada intensitas rendah. Interpretasi yang paling tepat terhadap kondisi citra tersebut adalah …",
options: [
"Citra terlalu terang",
"Citra terlalu gelap",
"Citra memiliki kontras tinggi",
"Citra memiliki distribusi intensitas merata",
"Citra tidak dapat ditingkatkan kualitasnya"
],
correct: 1
},

{
question: "Histogram suatu citra menunjukkan distribusi nilai keabuan yang sempit pada rentang tertentu. Kondisi ini menunjukkan bahwa citra tersebut …",
options: [
"Mengandung noise tinggi",
"Sudah mengalami histogram equalization",
"Memiliki resolusi rendah",
"Memiliki kontras rendah",
"Berada dalam skala biner"
],
correct: 3
},

{
question: "Histogram kumulatif digunakan dalam histogram equalization karena …",
options: [
"Menyederhanakan perhitungan intensitas piksel",
"Menunjukkan frekuensi absolut tiap tingkat keabuan",
"Menghilangkan kebutuhan normalisasi histogram",
"Digunakan sebagai fungsi pemetaan nilai intensitas baru",
"Mengurangi jumlah tingkat keabuan citra"
],
correct: 3
},

{
question: `Diberikan matriks citra 4×4 berikut dengan tingkat keabuan 0–7:<br>
$$f=\\begin{bmatrix}
1 & 2 & 2 & 3 \\\\
1 & 3 & 4 & 4 \\\\
2 & 5 & 5 & 6 \\\\
6 & 7 & 7 & 7
\\end{bmatrix}$$
Berdasarkan matriks tersebut, kesimpulan yang paling tepat mengenai histogram citra adalah …`,
options: [
"Histogram terkonsentrasi pada intensitas tinggi",
"Histogram terkonsentrasi pada intensitas rendah",
"Histogram tersebar merata",
"Histogram bimodal",
"Histogram seragam sempurna"
],
correct: 0
},

{
question: "Sebuah citra 4×4 memiliki histogram yang terkonsentrasi pada nilai menengah dan diperlukan citra dengan karakteristik visual tertentu agar seragam dengan citra lain. Teknik berbasis histogram yang digunakan adalah …",
options: [
"Histogram equalization",
"Histogram specification",
"Histogram kumulatif",
"Thresholding",
"Transformasi logaritmik"
],
correct: 1
},

{
question: "Pada histogram specification, pemetaan nilai keabuan dilakukan dengan cara …",
options: [
"Mengurangi histogram sumber dengan histogram target",
"Mencocokkan histogram awal dengan histogram target",
"Mengalikan histogram sumber dan target",
"Menormalisasi ulang histogram target",
"Mencocokkan histogram kumulatif sumber dengan kumulatif target terdekat"
],
correct: 4
},

{
question: "Histogram equalization tidak selalu menghasilkan citra yang lebih baik secara visual karena …",
options: [
"Selalu menurunkan kontras citra",
"Mengubah struktur spasial citra",
"Bersifat global dan mengabaikan konteks lokal citra",
"Tidak dapat diterapkan pada citra grayscale",
"Mengurangi jumlah tingkat keabuan"
],
correct: 2
},

{
question: "Perbedaan utama antara histogram equalization dan histogram specification terletak pada …",
options: [
"Jumlah piksel yang diproses",
"Penggunaan histogram kumulatif",
"Skala intensitas citra",
"Jumlah tingkat keabuan citra",
"Bentuk histogram hasil yang dihasilkan"
],
correct: 4
},

{
question: "Histogram specification lebih sesuai digunakan dibandingkan histogram equalization ketika …",
options: [
"Citra memiliki kontras sangat tinggi",
"Citra mengandung banyak noise",
"Diperlukan histogram hasil dengan bentuk tertentu",
"Citra berukuran sangat kecil",
"Citra hanya memiliki dua tingkat keabuan"
],
correct: 2
}

],


praktik: [

{
    type: "fill",
    answers: ["convert"],

    question: `
    <p>Lengkapi kode berikut untuk mengubah citra berwarna menjadi grayscale menggunakan Pillow.</p>

    <div class="code-fill-box">
<pre>
img = Image.open("gambar.jpg")

gray = img. <input type="text" class="fillAnswer code-blank"> ("L")
</pre>
    </div>
    `
},

{
    type: "fill",
    answers: ["point"],

    question: `
    <p>Lengkapi kode berikut untuk mengubah citra grayscale menjadi citra biner menggunakan Pillow.</p>

    <div class="code-fill-box">
<pre>
threshold = 128

binary = gray. <input type="text" class="fillAnswer code-blank"> (lambda p: 255 if p > threshold else 0)
</pre>
    </div>
    `
},

{
    type: "fill",
    answers: ["ImageEnhance.Brightness"],

    question: `
    <p>Lengkapi kode berikut untuk meningkatkan kecerahan (brightness) citra menggunakan Pillow.</p>

    <div class="code-fill-box">
<pre>
img = Image.open("gambar.jpg")

brightness = <input type="text" class="fillAnswer code-blank"> (img).enhance(1.5)
</pre>
    </div>
    `
},

{
    type: "fill",
    answers: ["ImageEnhance.Contrast"],

    question: `
    <p>Lengkapi kode berikut untuk meningkatkan kontras gambar menggunakan Pillow.</p>

    <div class="code-fill-box">
<pre>
img = Image.open("gambar.jpg")

contrast = <input type="text" class="fillAnswer code-blank"> (img).enhance(1.5)
</pre>
    </div>
    `
},

{
    type: "fill",
    answers: ["ImageOps.invert","convert"],

    question: `
    <p>Lengkapi kode berikut untuk melakukan operasi negasi (invert) pada citra menggunakan Pillow.</p>

    <div class="code-fill-box">
<pre>
img = Image.open("gambar.jpg")

negasi = <input type="text" class="fillAnswer code-blank" data-index="0"> (img.<input type="text" class="fillAnswer code-blank" data-index="1"> ("L"))
</pre>
    </div>
    `
},

{
    type: "fill",
    answers: ["convert", "img.point"],

    question: `
    <p>Lengkapi kode berikut untuk melakukan thresholding pada citra menggunakan Pillow.</p>

    <div class="code-fill-box">
<pre>
img = Image.open("gambar.jpg"). <input type="text" class="fillAnswer code-blank" data-index="0"> ("L")

threshold = <input type="text" class="fillAnswer code-blank" data-index="1"> (lambda p: 255 if p > 128 else 0)
</pre>
    </div>
    `
},

{
    type: "fill",
    answers: ["int(255*math.log(1+p)/math.log(256))"],

    question: `
    <p>Lengkapi kode berikut untuk transformasi logaritmik pada citra menggunakan Pillow.</p>

    <div class="code-fill-box">
<pre>
img = Image.open("gambar.jpg").convert("L")

log = img.point(lambda p: <input type="text" class="fillAnswer code-blank">)
</pre>
    </div>
    `
},

{
    type: "fill",
    answers: ["int(255*(p/255)**gamma)"],

    question: `
    <p>Lengkapi kode berikut untuk transformasi power law pada citra menggunakan Pillow.</p>

    <div class="code-fill-box">
<pre>
img = Image.open("gambar.jpg").convert("L")

gamma = 2.0

power_law = img.point(lambda p: <input type="text" class="fillAnswer code-blank">)
</pre>
    </div>
    `
},

{
    type: "fill",
    answers: ["ImageOps.equalize"],

    question: `
    <p>Lengkapi kode berikut untuk meningkatkan kontras citra dengan histogram equalization.</p>

    <div class="code-fill-box">
<pre>
img = Image.open("gambar.jpg").convert("L")

equali = <input type="text" class="fillAnswer code-blank"> (img)
</pre>
    </div>
    `
},

{
    type: "fill",
    answers: ["convert", "histogram_specification(img, referensi)"],

    question: `
    <p>Lengkapi kode berikut untuk melakukan histogram specification.</p>

    <div class="code-fill-box">
<pre>
img = Image.open("gambar.jpg").convert("L")

ref = Image.open("referensi.jpg"). <input type="text" class="fillAnswer code-blank" data-index="0"> ("L")
hasil = <input type="text" class="fillAnswer code-blank" data-index="1">
</pre>
    </div>
    `
}
],




evaluasi: [

{
question: "Tujuan utama dari <em>image enhancement</em> dalam pengolahan citra digital adalah …",
options: [
"Mengurangi ukuran file citra",
"Membuat citra terlihat lebih indah",
"Mengubah format penyimpanan citra",
"Menghasilkan citra yang lebih sesuai untuk analisis atau aplikasi tertentu",
"Menghitung jumlah piksel citra"
],
correct: 3
},

{
question: `
Perhatikan matriks berikut.

$$
\\begin{bmatrix}
0 & 255 \\\\
255 & 0
\\end{bmatrix}
$$

Matriks tersebut paling tepat merepresentasikan jenis citra …
`,
options: [
"Grayscale 16-bit",
"CMYK",
"HSV",
"RGB",
"Biner"
],
correct: 4
},

{
question: "Sebuah citra RGB memiliki satu piksel dengan nilai (255,0,0). Warna piksel tersebut adalah …",
options: [
"Hitam",
"Hijau",
"Biru",
"Merah",
"Putih"
],
correct: 3
},

{
question: "Perbedaan utama antara <em>image enhancement</em> dan <em>image restoration</em> terletak pada …",
options: [
"Ada atau tidaknya model degradasi citra",
"Ukuran citra yang diproses",
"Jumlah piksel citra",
"Format file citra",
"Jenis kamera yang digunakan"
],
correct: 0
},

{
question: "Transformasi <em>brightness</em> dilakukan dengan cara menambahkan atau mengurangi nilai intensitas piksel sehingga citra dapat terlihat lebih …",
options: [
"Tajam atau kabur",
"Besar atau kecil",
"Terang atau gelap",
"Halus atau kasar",
"Padat atau renggang"
],
correct: 2
},

{
question: `
Perhatikan matriks citra <em>grayscale</em> berikut.

$$
\\begin{bmatrix}
220 & 230 & 240 \\\\
245 & 250 & 255 \\\\
100 & 110 & 120
\\end{bmatrix}
$$

Jika dilakukan transformasi <em>brightness</em> dengan nilai $b=+20$, maka jumlah piksel yang mengalami <em>clipping</em> adalah …
`,
options: [
"3",
"4",
"6",
"5",
"7"
],
correct: 3
},

{
question: "Suatu citra memiliki histogram yang hanya tersebar pada rentang intensitas sempit sehingga objek tampak kurang jelas. Kondisi tersebut menunjukkan bahwa citra memiliki …",
options: [
"Histogram seragam",
"Distribusi merata",
"Kontras tinggi",
"Kontras rendah",
"Noise impulsive"
],
correct: 3
},

{
question: `
Diketahui sebuah citra memiliki intensitas minimum 50 dan maksimum 150. Jika dilakukan <em>contrast stretching</em> pada citra 8-bit, maka nilai hasil untuk piksel dengan intensitas 100 adalah …
`,
options: [
"115",
"127",
"150",
"170",
"178"
],
correct: 1
},

{
question: `
Perhatikan matriks citra berikut.

$$
\\begin{bmatrix}
20 & 40 & 60 \\\\
80 & 100 & 120 \\\\
140 & 160 & 180
\\end{bmatrix}
$$

Jika dilakukan operasi negasi pada citra grayscale 8-bit, maka nilai piksel pada posisi (2,3) menjadi …
`,
options: [
"135",
"145",
"145",
"165",
"175"
],
correct: 0
},

{
question: `
Perhatikan matriks citra berikut.

$$
\\begin{bmatrix}
70 & 140 & 210 \\\\
90 & 160 & 250 \\\\
120 & 130 & 180
\\end{bmatrix}
$$

Jika digunakan <em>thresholding</em> dengan nilai ambang $T=150$, maka hasil matriks citra biner yang benar adalah …
`,
options: [

`
\\(
\\begin{bmatrix}
0 & 0 & 0 \\\\
0 & 255 & 255 \\\\
0 & 0 & 255
\\end{bmatrix}
\\)
`,

`
\\(
\\begin{bmatrix}
255 & 255 & 255 \\\\
0 & 255 & 255 \\\\
0 & 255 & 255
\\end{bmatrix}
\\)
`,

`
\\(
\\begin{bmatrix}
0 & 255 & 255 \\\\
0 & 255 & 0 \\\\
255 & 255 & 0
\\end{bmatrix}
\\)
`,

`
\\(
\\begin{bmatrix}
0 & 0 & 255 \\\\
255 & 255 & 255 \\\\
0 & 0 & 255
\\end{bmatrix}
\\)
`,

`
\\(
\\begin{bmatrix}
0 & 0 & 255 \\\\
0 & 255 & 255 \\\\
0 & 0 & 255
\\end{bmatrix}
\\)
`

],
correct: 4
},

{
question: `
Perhatikan matriks citra berikut.

$$
\\begin{bmatrix}
1 & 10 \\\\
50 & 100
\\end{bmatrix}
$$

Jika dilakukan transformasi logaritmik menggunakan konstanta $c=1$ dengan persamaan

$$
s=\\log(1+r)
$$

maka piksel yang mengalami peningkatan intensitas relatif paling besar adalah …
`,
options: [
"1",
"10",
"50",
"100",
"Semua sama besar"
],
correct: 0
},

{
question: `
Perhatikan matriks citra berikut.

$$
\\begin{bmatrix}
25 & 64 \\\\
144 & 225
\\end{bmatrix}
$$

Nilai piksel telah dinormalisasi ke rentang [0,1], kemudian dilakukan <em>gamma correction</em> dengan $\\gamma=0.5$. Efek yang paling mungkin terjadi pada citra hasil adalah …
`,
options: [
"Seluruh piksel menjadi putih",
"Histogram menjadi seragam",
"Area gelap menjadi lebih gelap",
"Area terang ditekan",
"Citra menjadi lebih terang"
],
correct: 4
},

{
question: `
Sebuah citra memiliki histogram yang sangat sempit di area gelap. Teknik yang paling tepat untuk memperluas distribusi intensitas tanpa menentukan histogram target tertentu adalah …
`,
options: [
"<em>Histogram specification</em>",
"<em>Thresholding</em>",
"<em>Contrast stretching</em>",
"Operasi negasi",
"Segmentasi citra"
],
correct: 2
},

{
question: `
Sebuah histogram citra menunjukkan sebagian besar distribusi intensitas berada pada rentang menengah tanpa variasi yang luas. Kondisi tersebut menunjukkan bahwa citra memiliki …
`,
options: [
"Histogram seragam",
"Kontras tinggi",
"Kontras rendah",
"<em>Noise</em> impulsive",
"Intensitas maksimum"
],
correct: 2
},

{
question: `
Dalam <em>histogram equalization</em>, fungsi <em>CDF (Cumulative Distribution Function)</em> digunakan karena fungsi tersebut mampu …
`,
options: [
"Menghapus intensitas minimum citra",
"Memetakan intensitas lama ke intensitas baru",
"Mengubah resolusi spasial citra",
"Menentukan ukuran matriks citra",
"Menghasilkan histogram biner"
],
correct: 1
},

{
question: `
Perhatikan distribusi histogram berikut.

<div style="margin:15px 0;">
<table style="border-collapse: collapse; width: 350px; background: white; ">
<tr>
    <th style="border:1px solid #ccc;padding:10px;">Intensitas</th>
    <th style="border:1px solid #ccc;padding:10px;">Persentase Piksel</th>
</tr>

<tr>
    <td style="border:1px solid #ccc;padding:10px;text-align:center;">0–50</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center;">70%</td>
</tr>

<tr>
    <td style="border:1px solid #ccc;padding:10px;text-align:center;">51–150</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center;">20%</td>
</tr>

<tr>
    <td style="border:1px solid #ccc;padding:10px;text-align:center;">151–255</td>
    <td style="border:1px solid #ccc;padding:10px;text-align:center;">10%</td>
</tr>

</table>
</div>

Berdasarkan distribusi tersebut, citra kemungkinan besar terlihat …
`,
options: [
"Sangat terang",
"Cenderung gelap",
"Memiliki kontras tinggi",
"Memiliki histogram merata",
"Berwarna biner"
],
correct: 1
},

{
question: `
Pada <em>histogram equalization</em>, jika nilai <em>CDF</em> suatu piksel adalah 0,75 dan jumlah tingkat keabuan citra adalah 256, maka nilai intensitas baru piksel tersebut mendekati …
`,
options: [
"128",
"160",
"175",
"191",
"224"
],
correct: 3
},

{
question: `
<em>Histogram specification</em> berbeda dengan <em>histogram equalization</em> karena pada <em>histogram specification</em> …
`,
options: [
"Distribusi histogram hasil dapat ditentukan sesuai target",
"Histogram hasil selalu seragam",
"Tidak menggunakan histogram kumulatif",
"Tidak memerlukan citra referensi",
"Tidak memetakan ulang intensitas citra"
],
correct: 0
},

{
question: `
Perhatikan matriks citra <em>grayscale</em> berikut.

$$
\\begin{bmatrix}
40 & 60 & 80 \\\\
100 & 120 & 140 \\\\
160 & 180 & 200
\\end{bmatrix}
$$

Jika dilakukan <em>contrast stretching</em> menggunakan persamaan

$$
s=\\frac{(r-r_{min})}{(r_{max}-r_{min})}\\times255
$$

maka hasil matriks citra yang benar adalah …
`,
options: [

`
\\(
\\begin{bmatrix}
0 & 40 & 80 \\\\
120 & 160 & 200 \\\\
220 & 240 & 255
\\end{bmatrix}
\\)
`,

`
\\(
\\begin{bmatrix}
40 & 60 & 80 \\\\
100 & 120 & 140 \\\\
160 & 180 & 200
\\end{bmatrix}
\\)
`,

`
\\(
\\begin{bmatrix}
0 & 32 & 64 \\\\
96 & 128 & 159 \\\\
191 & 223 & 255
\\end{bmatrix}
\\)
`,

`
\\(
\\begin{bmatrix}
0 & 64 & 96 \\\\
128 & 160 & 192 \\\\
224 & 240 & 255
\\end{bmatrix}
\\)
`,

`
\\(
\\begin{bmatrix}
10 & 42 & 74 \\\\
106 & 138 & 170 \\\\
202 & 234 & 255
\\end{bmatrix}
\\)
`
],
correct: 2
},

{
question: `
Perhatikan matriks hasil normalisasi berikut.

$$
\\begin{bmatrix}
0.04 & 0.16 \\\\
0.36 & 0.81
\\end{bmatrix}
$$

Jika diterapkan <em>gamma correction</em> dengan $\\gamma=2$, maka hasil transformasi yang benar adalah …
`,
options: [

`
\\(
\\begin{bmatrix}
0.2 & 0.4 \\\\
0.6 & 0.9
\\end{bmatrix}
\\)
`,

`
\\(
\\begin{bmatrix}
0.04 & 0.16 \\\\
0.36 & 0.81
\\end{bmatrix}
\\)
`,

`
\\(
\\begin{bmatrix}
0.16 & 0.36 \\\\
0.64 & 1.00
\\end{bmatrix}
\\)
`,

`
\\(
\\begin{bmatrix}
0.0016 & 0.0256 \\\\
0.1296 & 0.6561
\\end{bmatrix}
\\)
`,

`
\\(
\\begin{bmatrix}
0.02 & 0.08 \\\\
0.18 & 0.40
\\end{bmatrix}
\\)
`
],
correct: 3
},

]

};
