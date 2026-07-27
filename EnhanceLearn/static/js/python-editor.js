let pyodide;
let ready = false;
let editors = {};
let cellCount = 0;

let grayAttempt = 0;
const MAX_GRAY_ATTEMPT = 3;

async function initPyodide() {
    pyodide = await loadPyodide();
    await pyodide.loadPackage(["numpy", "pillow", "matplotlib"]);

    const response =
        await fetch("/static/img/histogram/referensi.JPG");

    const buffer =
        await response.arrayBuffer();

    pyodide.FS.writeFile(
        "referensi.JPG",
        new Uint8Array(buffer)
    );
    console.log(
        pyodide.FS.readdir("/")
    );

    ready = true;
}
initPyodide();

function normalizeCode(code) {
    return code
        .replace(/#.*/g, "")      
        .replace(/\s+/g, "")      
        .trim();
}

function runPythonCode(editor, outputId, imgId, saveVar = "") {
    return async function () {
        if (!ready) {
            alert("Pyodide belum siap");
            return;
        }

        // Jawaban Kode untuk Praktik
        const answers = {
            gray: `gray = img.convert("L")`,
            binary: `binary = gray.point(lambda p: 255 if p >= threshold else 0)`,
            brightness: `brightness = ImageEnhance.Brightness(img)
        hasil = brightness.enhance(1.5)`,
            contrast: `contrast = ImageEnhance.Contrast(img)
        hasil = contrast.enhance(1.5)`,
            negasi: `invert = ImageOps.invert(img)`,
            threshold: `hasil = img.point(lambda p: 255 if p > threshold else 0)`,
            log: `log = img.point(lambda p:int(255*math.log(1+p)/math.log(256)))`,
            gamma: `power_law = img.point(lambda p: int(255 * (p / 255) ** gamma))`,
            equalization: `hasil = ImageOps.equalize(img)`
        };

        const attempts = window.attempts || (window.attempts = {});
        if (answers[saveVar]) {
            attempts[saveVar] = attempts[saveVar] || 0;

            const code = normalizeCode(editor.getValue());
            const answer = normalizeCode(answers[saveVar]);
            if (!code.includes(answer)) {
                attempts[saveVar]++;

                const sisa = 3 - attempts[saveVar];
                if (attempts[saveVar] < 3) {
                    document.getElementById(outputId).innerHTML =
                        `Kode masih salah. Sisa percobaan: <b>${sisa}</b>`;
                } else {
                    document.getElementById(outputId).innerHTML =
                        `Percobaan habis. Kode yang benar adalah: <code>${answers[saveVar]}</code>`;

                    attempts[saveVar] = 0;
                }
                return;
            }
            attempts[saveVar] = 0;
        }

        const output = document.getElementById(outputId);
        const img = document.getElementById(imgId);
        const downloadBtn = document.getElementById(imgId.replace("img", "download"));

        output.innerHTML = `
            <span style="color:#fbbf24;">⏳ Memproses...</span>`;
        img.style.display = "none";

        if(downloadBtn){
            downloadBtn.style.display = "none";
        }

        try {
            pyodide.runPython(`
import sys, io, base64, numpy as np
from PIL import Image
sys.stdout = io.StringIO()
sys.stderr = sys.stdout
            `);

            await pyodide.runPythonAsync(editor.getValue());

            const resultVars = {
                gray: "gray",
                binary: "binary",
                brightness: "hasil",
                contrast: "hasil",
                negasi: "invert",
                threshold: "hasil",
                log: "log",
                gamma: "power_law",
                equalization: "hasil",
                specification: "hasil"
            };

            const resultVar = resultVars[saveVar];

            pyodide.runPython(`
            if '${resultVar}' in globals():
                data = globals()['${resultVar}']

                if isinstance(data, np.ndarray):
                    if data.dtype == bool:
                        data = data.astype(np.uint8) * 255
                    elif data.dtype != np.uint8:
                        data = (data * 255).clip(0,255).astype(np.uint8)

                    img_out = Image.fromarray(data)

                elif isinstance(data, Image.Image):
                    img_out = data

                else:
                    raise Exception("Variabel hasil tidak valid")

                img_out.save("result.png")

                with open("result.png", "rb") as f:
                    print("IMG:" + base64.b64encode(f.read()).decode())
            `);
            const result = pyodide.runPython("sys.stdout.getvalue()");
            const lines = result.split("\n");

            output.innerHTML = "";

            let text = "";
            
            for (let line of lines) {

    if (line.startsWith("IMG:")) {

        img.src =
            "data:image/png;base64," +
            line.substring(4);
        img.style.display = "block";

        if(downloadBtn){
            downloadBtn.href = img.src;
            downloadBtn.style.display = "inline-block";
        }
    }
    else if (line.startsWith("HIST:")) {
        const histImg = document.createElement("img");

        histImg.src = "data:image/png;base64," + line.substring(5);
        histImg.className = "preview-img";
        histImg.style.display = "block";
        histImg.style.marginTop = "15px";

        output.appendChild(histImg);
    }
    else if (line.trim() !== "") {
        text += line + "\n";
    }
}
            if (text.trim() !== "") {output.textContent = text;}

        } catch (err) {
            output.textContent = err;
        }
    };
}

function createMainEditor(textareaId, runBtnId, clearBtnId, outputId, imgId, saveVar) {
    const editor = CodeMirror.fromTextArea(document.getElementById(textareaId), {
        mode: "python",
        theme: "material-darker",
        lineNumbers: true,
        indentUnit: 4,
        tabSize: 4
    });

    editors[textareaId] = editor;

    document.getElementById(runBtnId).onclick =
        runPythonCode(editor, outputId, imgId, saveVar);

    document.getElementById(clearBtnId).onclick = () => {
        editor.setValue("");
    };
}

function createDynamicCell() {
    cellCount++;

    const wrapper = document.createElement("div");
    wrapper.className = "dynamic-cell";

    wrapper.innerHTML = `
        <div class="cell-box">
            <div class="editor-wrap">
                <textarea id="cell-${cellCount}"></textarea>
            </div>

            <div class="side-tools">
                <button class="editor-icon-btn run-btn-cell">▶</button>
                <button class="editor-icon-btn trash delete-btn-cell">🗑</button>
            </div>
        </div>

        <div class="output">(Output muncul di sini)</div>
        <img class="preview-img">
    `;
    return wrapper;
}

function setupDynamicCell(wrapper) {
    const textarea = wrapper.querySelector("textarea");
    const output = wrapper.querySelector(".output");
    const img = wrapper.querySelector(".preview-img");

    const editor = CodeMirror.fromTextArea(textarea, {
        mode: "python",
        theme: "material-darker",
        lineNumbers: true,
        indentUnit: 4,
        tabSize: 4
    });

    const outId = "out-dyn-" + cellCount;
    const imgId = "img-dyn-" + cellCount;

    output.id = outId;
    img.id = imgId;

    wrapper.querySelector(".run-btn-cell").onclick =
        runPythonCode(editor, outId, imgId);

    wrapper.querySelector(".delete-btn-cell").onclick = () => {
        wrapper.remove();
    };
}

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("uploadInput").addEventListener("change", async e => {
        const file = e.target.files[0];
        if (!file) return;

        const fileName = file.name;
        const buffer = await file.arrayBuffer();

        pyodide.FS.writeFile(fileName, new Uint8Array(buffer));

        for (const editor of Object.values(editors)) {

            let code = editor.getValue();

            code = code.replace(
                /img\s*=\s*Image\.open\(".*?"\)/,
                `img = Image.open("${fileName}")`
            );

            editor.setValue(code);
        }

        document.getElementById("file-name-show").textContent = fileName;

        const preview = document.getElementById("upload-preview");
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    });


    if (document.getElementById("editor-gray")) {
    createMainEditor(
        "editor-gray",
        "run-gray",
        "clear-gray",
        "out-gray",
        "img-gray",
        "gray"
    );
    }

    if (document.getElementById("editor-bin")) {
        createMainEditor(
            "editor-bin",
            "run-bin",
            "clear-bin",
            "out-bin",
            "img-bin",
            "binary"
        );
    }

    if (document.getElementById("editor-brightness")) {
        createMainEditor(
            "editor-brightness",
            "run-brightness",
            "clear-brightness",
            "out-brightness",
            "img-brightness",
            "brightness"
        );
    }

    if (document.getElementById("editor-contrast")) {
    createMainEditor(
        "editor-contrast",
        "run-contrast",
        "clear-contrast",
        "out-contrast",
        "img-contrast",
        "contrast"
    );
    }

    if (document.getElementById("editor-negasi")) {
    createMainEditor(
        "editor-negasi",
        "run-negasi",
        "clear-negasi",
        "out-negasi",
        "img-negasi",
        "negasi"
    );
    }

    if (document.getElementById("editor-threshold")) {
    createMainEditor(
        "editor-threshold",
        "run-threshold",
        "clear-threshold",
        "out-threshold",
        "img-threshold",
        "threshold"
    );
    }


    if (document.getElementById("editor-log")) {
    createMainEditor(
        "editor-log",
        "run-log",
        "clear-log",
        "out-log",
        "img-log",
        "log"
    );
    }

    if (document.getElementById("editor-gamma")) {
    createMainEditor(
        "editor-gamma",
        "run-gamma",
        "clear-gamma",
        "out-gamma",
        "img-gamma",
        "gamma"
    );
    }

    if (document.getElementById("editor-equalization")) {
    createMainEditor(
        "editor-equalization",
        "run-equalization",
        "clear-equalization",
        "out-equalization",
        "img-equalization",
        "equalization"
    );
    }

    if (document.getElementById("editor-specification")) {
    createMainEditor(
        "editor-specification",
        "run-specification",
        "clear-specification",
        "out-specification",
        "img-specification",
        "hasil"
    );
    }

    document.querySelectorAll(".add-cell-btn").forEach(btn => {
        btn.onclick = () => {
            const cell = createDynamicCell();
            btn.parentNode.insertBefore(cell, btn.nextSibling);
            setupDynamicCell(cell);
        };
    });
});