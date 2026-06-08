function initQuiz(quizData, resultUrl) {

    let currentIndex = 0;
    let answers = Array(quizData.length).fill(null);
    let isDoubt = Array(quizData.length).fill(false);

    let totalTime = judulKuis === "evaluasi" ? 1800 : 1200;
    let timeLeft = totalTime;
    let timerInterval;

    const intro = document.getElementById("quizIntro");
    const quizArea = document.getElementById("quizArea");
    const startBtn = document.getElementById("startQuizBtn");
    const questionTitle = document.getElementById("questionTitle");
    const questionText = document.getElementById("questionText");
    const choicesEl = document.getElementById("choices");
    const numberNav = document.getElementById("numberNav");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const finishBtn = document.getElementById("finishBtn");
    const timerEl = document.getElementById("timer");
    const doubtCheck = document.getElementById("doubtCheck");

    const finishModal = document.getElementById("finishModal");
    const incompleteModal = document.getElementById("incompleteModal");
    const confirmFinishBtn = document.getElementById("confirmFinishBtn");

    startBtn.onclick = () => {
        intro.style.display = "none";
        quizArea.style.display = "block";
        renderNumberNav();
        loadQuestion();
        startTimer();
    };

    function startTimer() {
        updateTimer();
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimer();
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                finishQuiz();
            }
        }, 1000);
    }

    function updateTimer() {
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        timerEl.innerText =
            `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }

    function loadQuestion() {
    const q = quizData[currentIndex];

    questionTitle.innerText = `Nomor ${currentIndex + 1}`;
    questionText.innerHTML = q.question;
    if (window.MathJax) {
        MathJax.typesetPromise([questionText]);
    }
    choicesEl.innerHTML = "";

    if (q.type === "fill") {
        const inputs = document.querySelectorAll(".fillAnswer");

        // Kita pastikan tempat penyimpanan jawaban selalu ada
        if (!Array.isArray(answers[currentIndex])) {
            answers[currentIndex] = Array(q.answers.length).fill("");
        }

        // Sekarang kita loop inputnya sesuai dengan jumlah 'answers' yang ada
        inputs.forEach((input, idx) => {
            input.value = answers[currentIndex][idx] || "";
            
            input.oninput = () => {
                answers[currentIndex][idx] = input.value;
                updateNavColor();
            };
        });
    } 

    // ======================
    // PILIHAN GANDA
    // ======================
    else {

        q.options.forEach((opt, i) => {

            const label =
                document.createElement("label");

            const radio =
                document.createElement("input");

            radio.type = "radio";
            radio.name = "answer";

            radio.checked =
                answers[currentIndex] === i;

            radio.onchange = () => {

                answers[currentIndex] = i;

                updateNavColor();

            };

            label.appendChild(radio);
            const span = document.createElement("span");
            span.innerHTML = opt;
            label.appendChild(span);

            choicesEl.appendChild(label);

        });

        if (window.MathJax) {
            MathJax.typesetPromise([choicesEl]);
        }

    }

    doubtCheck.checked =
        isDoubt[currentIndex];

    updateNavColor();
    updateNavButtons();

}

console.log(
    "INPUT DITEMUKAN:",
    document.querySelectorAll(".fillAnswer").length
);

    function renderNumberNav() {

        numberNav.innerHTML = "";

        quizData.forEach((_, i) => {

            const btn = document.createElement("button");

            btn.innerText = i + 1;

            btn.onclick = () => {
                currentIndex = i;
                loadQuestion();
            };

            numberNav.appendChild(btn);

        });

    }

    function updateNavColor() {
        [...numberNav.children].forEach((btn, i) => {
            // Cek apakah sudah diisi (cek apakah ada teks yang bukan kosong)
            let isFilled = false;
            
            if (answers[i] !== null) {
                if (Array.isArray(answers[i])) {
                    // Untuk soal isian: pastikan semua input dalam array sudah diisi
                    isFilled = answers[i].every(val => val !== "" && val !== null);
                } else {
                    // Untuk pilihan ganda
                    isFilled = true; 
                }
            }

            if (i === currentIndex) {
                btn.style.background = "#949db1";
                btn.style.color = "#fff";
            } else if (isDoubt[i]) {
                btn.style.background = "#facc15"; // Kuning untuk ragu-ragu
            } else if (isFilled) {
                btn.style.background = "#1e3a8a"; // Biru hanya jika benar-benar terisi
                btn.style.color = "#fff";
            } else {
                btn.style.background = "#e5e7eb"; // Abu-abu jika masih kosong
                btn.style.color = "#000";
            }
        });
    }

    function updateNavButtons() {

        prevBtn.disabled = currentIndex === 0;

        nextBtn.disabled = currentIndex === quizData.length - 1;

    }

    prevBtn.onclick = () => {

        if (currentIndex > 0) {

            currentIndex--;

            loadQuestion();

        }

    };

    nextBtn.onclick = () => {

        if (currentIndex < quizData.length - 1) {

            currentIndex++;

            loadQuestion();

        }

    };

    doubtCheck.onchange = (e) => {

        isDoubt[currentIndex] = e.target.checked;

        updateNavColor();

    };

    finishBtn.onclick = () => {

        // cek soal belum dijawab
        const adaKosong = answers.some(a => {

            if (a === null) return true;

            if (Array.isArray(a)) {
                return a.some(v => v === "" || v === null);
            }

            return false;
        });

        if (adaKosong) {

            document.querySelector("#incompleteModal .modal-text").innerText =
                "Belum bisa submit";

            document.querySelector("#incompleteModal p").innerText =
                "Ada soal yang belum dijawab!";

            incompleteModal.style.display = "flex";

            return;
        }

        // cek masih ada yang ragu-ragu
        if (isDoubt.some(d => d)) {

            document.querySelector("#incompleteModal .modal-text").innerText =
                "Belum bisa submit";

            document.querySelector("#incompleteModal p").innerText =
                "Masih ada jawaban yang ditandai ragu-ragu!";

            incompleteModal.style.display = "flex";

            return;
        }

        finishModal.style.display = "flex";
    };

    confirmFinishBtn.onclick = () => {

        finishModal.style.display = "none";

        finishQuiz();

    };

    document.querySelectorAll(".cancelModal").forEach(btn => {

        btn.onclick = () => {

            finishModal.style.display = "none";
            incompleteModal.style.display = "none";

        };

    });

    document.querySelectorAll(".closeModal").forEach(btn => {

        btn.onclick = () => {

            finishModal.style.display = "none";
            incompleteModal.style.display = "none";

        };

    });

    function finishQuiz() {
    clearInterval(timerInterval);
    let score = 0;
    const detailSoal = [];

   quizData.forEach((q, i) => {

        let benar = false;

        if (q.type !== "fill") {

            benar = answers[i] === q.correct;

            if (benar) score++;

        } else {

            benar = true;

            q.answers.forEach((ans, idx) => {

                const user =
                    String(answers[i]?.[idx] || "")
                    .trim()
                    .toLowerCase();

                const correct =
                    ans.trim()
                    .toLowerCase();

                if (user !== correct) {
                    benar = false;
                }

            });

            if (benar) score++;
        }

        detailSoal.push({
            nomor: i + 1,
            benar: benar
        });

    });

        const nilai = Math.round((score / quizData.length) * 100);

        const waktuDipakai = totalTime - timeLeft;

        const waktuFormatted = formatTime(waktuDipakai);

        fetch(resultUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken || ""
            },
            body: JSON.stringify({
                nilai: nilai,
                waktu: waktuFormatted,
                judul: judulKuis,
                detail_soal: detailSoal
            })

        })
        .then(res => res.json())
        .then(data => {
            window.location.href = data.redirect_url;
        });

    }

    function formatTime(seconds) {

        const m = Math.floor(seconds / 60);

        const s = seconds % 60;

        return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

    }

}