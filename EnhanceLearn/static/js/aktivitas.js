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
    questionEl.innerHTML = q.question;

    if (window.MathJax) {
        MathJax.typesetPromise([questionEl]);
    }
    if (counterEl) {
        counterEl.innerHTML = `<strong>Pertanyaan ${index + 1} / ${dataAktivitas.length}</strong>`;
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
            btn.innerHTML  = opt;

            btn.onclick = () => checkAnswer(i, btn);

            choicesEl.appendChild(btn);

        });

        if (window.MathJax) {
            MathJax.typesetPromise([choicesEl]);
        }

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

        feedbackEl.innerHTML = `
            <div class="feedback-success">
                <div class="feedback-title">
                    BENAR
                </div>
                <div class="feedback-text">
                    ${q.explanation}
                </div>
            </div>
        `;

        answeredCorrectly = true;
        nextBtn.classList.remove("disabled");

    } else {

        feedbackEl.innerHTML = `
            <div class="feedback-error">
                <div class="feedback-title-error">
                    SALAH
                </div>
                <div class="feedback-text-error">
                    Jawaban masih kurang tepat. Silakan coba lagi.
                </div>
            </div>
        `;

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

        feedbackEl.innerHTML = `
            <div class="feedback-success">
                <div class="feedback-title">
                    BENAR
                </div>
                <div class="feedback-text">
                    ${dataAktivitas[index].explanation}
                </div>
            </div>
        `;

        answeredCorrectly = true;
        nextBtn.classList.remove("disabled");
    } 
    
    else {

        btn.classList.add("wrong");

        feedbackEl.innerHTML = `
            <div class="feedback-error">
                <div class="feedback-title-error">
                    SALAH
                </div>
                <div class="feedback-text-error">
                    Jawaban belum tepat. Silakan coba lagi.
                </div>
            </div>
        `;
    }
}

function closeModal() {
    if (modal) modal.style.display = "none";
}