let audioContext = new (window.AudioContext || window.webkitAudioContext)(); // direkt initialisieren
let recordedBuffer = null;

const recordBtn = document.getElementById("record-btn");
const resetBtn = document.getElementById("reset-btn");
const keys = document.querySelectorAll(".key");

recordBtn.addEventListener("click", async () => {
  recordBtn.disabled = true;
  recordBtn.textContent = "🎙️ Aufnahme läuft...";

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const mediaRecorder = new MediaRecorder(stream);
  const chunks = [];

  mediaRecorder.ondataavailable = e => chunks.push(e.data);
  mediaRecorder.onstop = async () => {
    const blob = new Blob(chunks, { type: "audio/webm" });
    const arrayBuffer = await blob.arrayBuffer();
    recordedBuffer = await audioContext.decodeAudioData(arrayBuffer);
    recordBtn.textContent = "✅ Aufnahme gespeichert!";
    recordBtn.disabled = false;
  };

  mediaRecorder.start();

  setTimeout(() => {
    mediaRecorder.stop();
    stream.getTracks().forEach(track => track.stop());
  }, 3000);
});

resetBtn.addEventListener("click", () => {
  recordedBuffer = null;
  const popup = document.getElementById("popup");
  popup.textContent = "Aufnahme gelöscht!";
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
});

keys.forEach(key => {
  key.addEventListener("click", () => {
    const semitone = parseInt(key.dataset.semitone);
    const note = key.dataset.note;

    if (recordedBuffer) {
      const source = audioContext.createBufferSource();
      source.buffer = recordedBuffer;
      source.playbackRate.value = Math.pow(2, semitone / 12);
      source.connect(audioContext.destination);
      source.start();
    } else {
      const fallback = new Audio(`sounds/${note}.wav`);
      fallback.play();
    }
  });
});
