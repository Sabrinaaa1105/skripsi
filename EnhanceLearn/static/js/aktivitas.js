console.log("AKTIVITAS JS BERHASIL DIMUAT");

function getCookie(name) {

    let cookieValue = null;

    if (document.cookie && document.cookie !== '') {

        const cookies = document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++) {

            const cookie = cookies[i].trim();

            if (cookie.substring(0, name.length + 1) === (name + '=')) {

                cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                );

                break;
            }
        }
    }

    return cookieValue;
}

const csrftoken = getCookie('csrftoken');

let index = 0;
let answeredCorrectly = false;
let dataAktivitas = [];

// Variabel elemen dideklarasikan secara global
let questionEl, choicesEl, feedbackEl, nextBtn, counterEl, modal;


function assignElements() {

    const wrapper = document.querySelector(".aktivitas-wrapper");

    questionEl = wrapper.querySelector("#question");
    choicesEl = wrapper.querySelector("#choices");
    feedbackEl = wrapper.querySelector("#feedback");
    nextBtn = wrapper.querySelector("#nextBtn");
    counterEl = wrapper.querySelector("#counter");

    modal = document.getElementById("finishModal");
}

function initQuiz(data) {
    // 1. Pastikan elemen DOM sudah terhubung
    assignElements();
    
    // 2. Cek apakah elemen krusial ditemukan
    if (!questionEl || !nextBtn) {
        console.error("Elemen kuis tidak ditemukan di DOM. Pastikan ID sudah benar.");
        return;
    }

    // 3. Setup data
    dataAktivitas = data;
    index = 0;
    answeredCorrectly = false;

    // 4. Pasang event listener tombol Next (hanya satu kali)
    nextBtn.onclick = () => {
         console.log("TOMBOL NEXT DIKLIK");

        if (nextBtn.classList.contains("disabled")) return;

        // jika masih ada soal berikutnya
        if (index < dataAktivitas.length - 1) {

            index++;
            loadQuestion();

        } else {

            // soal terakhir selesai
            if (modal) modal.style.display = "flex";

            if (window.namaAktivitas) {
                console.log("MAU KIRIM:", window.namaAktivitas);
                console.log("SEBELUM FETCH");
                fetch("/simpan-aktivitas/", {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": csrftoken
                    },

                    body: JSON.stringify({
                        aktivitas: window.namaAktivitas
                    })

                })
                .then(res => res.json())
                .then(data => {
                    console.log("Aktivitas tersimpan");
                });
                console.log("Aktivitas disimpan:", window.namaAktivitas);

                console.log("SETELAH FETCH");
            }

        }

    };

    loadQuestion();
}

function loadQuestion() {
    // Validasi data dan elemen
    if (!dataAktivitas || !dataAktivitas.length || !questionEl) return;

    const q = dataAktivitas[index];
    answeredCorrectly = false;

    // Update tampilan
    questionEl.innerText = q.question;
    if (counterEl) {
        counterEl.innerHTML = `<strong>Pertanyaan ${index + 1} dari ${dataAktivitas.length}</strong>`;
    }
    
    choicesEl.innerHTML = "";
    feedbackEl.innerHTML = "";
    nextBtn.classList.add("disabled");

    if (q.type === "fill") {

        renderFillQuestion(q);

    } else {

        q.options.forEach((opt, i) => {

            const btn = document.createElement("button");

            btn.type = "button";
            btn.className = "choice-btn";
            btn.textContent = opt;

            btn.onclick = () => checkAnswer(i, btn);

            choicesEl.appendChild(btn);

        });

    }
}

function renderFillQuestion(q) {

    choicesEl.innerHTML = `
        ${q.code}

        <button
            id="checkFillBtn"
            type="button"
            class="btn-next">
            Periksa
        </button>
    `;

    document
        .getElementById("checkFillBtn")
        .addEventListener("click", checkFillAnswer);
}

function checkFillAnswer() {

    const q = dataAktivitas[index];

    const inputs = document.querySelectorAll(".fill-input");

    let semuaBenar = true;

    inputs.forEach((input, i) => {

        const jawabanUser =
            input.value.trim().toLowerCase();

        const jawabanBenar =
            q.answers[i].toLowerCase();

        if (jawabanUser === jawabanBenar) {

            input.style.borderColor = "#22c55e";

        } else {

            input.style.borderColor = "#ef4444";

            semuaBenar = false;
        }

    });

    if (semuaBenar) {

        feedbackEl.innerHTML =
            "✅ <span style='color:#16a34a'>Jawaban benar. Silakan lanjut.</span>";

        answeredCorrectly = true;

        nextBtn.classList.remove("disabled");

    } else {

        feedbackEl.innerHTML =
            "⚠️ <span style='color:#dc2626'>Jawaban masih kurang tepat.</span>";

    }

}

function checkAnswer(selected, btn) {
    if (answeredCorrectly) return;

    // Reset warna tombol sebelumnya
    document.querySelectorAll(".choice-btn").forEach(b => {
        b.classList.remove("wrong", "correct");
    });

    if (selected === dataAktivitas[index].correct) {
        btn.classList.add("correct");
        feedbackEl.innerHTML = "✅ <span style='color:#16a34a;'>Jawaban benar. Silakan lanjut.</span>";
        answeredCorrectly = true;
        nextBtn.classList.remove("disabled");
    } else {
        btn.classList.add("wrong");
        feedbackEl.innerHTML = "⚠️ <span style='color:#dc2626;'>Jawaban belum tepat, silakan coba lagi.</span>";
    }
}

function closeModal() {
    if (modal) modal.style.display = "none";
}