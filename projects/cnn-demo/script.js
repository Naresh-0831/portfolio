const fileInput = document.getElementById("fileInput");
const previewImg = document.getElementById("previewImg");
const previewHint = document.getElementById("previewHint");
const predictBtn = document.getElementById("predictBtn");
const resetBtn = document.getElementById("resetBtn");
const resultBox = document.getElementById("resultBox");

let hasImage = false;

fileInput.addEventListener("change", () => {
  const file = fileInput.files && fileInput.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  previewImg.src = url;
  previewImg.style.display = "block";
  previewHint.style.display = "none";

  hasImage = true;
  predictBtn.disabled = false;
  resetBtn.disabled = false;

  resultBox.innerHTML = `
    <div class="hint">Ready to predict.</div>
    <div class="small">Click Predict to see the result.</div>
  `;
});

predictBtn.addEventListener("click", () => {
  if (!hasImage) return;

  // Demo simulation: random prediction
  const isFake = Math.random() > 0.5;
  const confidence = (80 + Math.random() * 18).toFixed(1); // 80% - 98%

  resultBox.innerHTML = `
    <div class="tag ${isFake ? "fake" : "real"}">
      ${isFake ? "FAKE" : "REAL"}
    </div>
    <div class="small">Confidence: ${confidence}%</div>
    <div class="small">Note: This is a static demo UI. Connect backend for real predictions.</div>
  `;
});

resetBtn.addEventListener("click", () => {
  fileInput.value = "";
  previewImg.src = "";
  previewImg.style.display = "none";
  previewHint.style.display = "block";

  hasImage = false;
  predictBtn.disabled = true;
  resetBtn.disabled = true;

  resultBox.innerHTML = `
    <div class="hint">No prediction yet.</div>
    <div class="small">Upload an image and click Predict.</div>
  `;
});