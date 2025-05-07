let audioContext;
let recordedBuffer = null;

const recordBtn = document.getElementById("record-btn");
const resetBtn = document.getElementById("reset-btn");
const keys = document.querySelectorAll(".key");

recordBtn.addEventListener("click", async () => {
  recordBtn.disabled = true;
  recordBtn.textContent = "🎙️ Aufnahme läuft...";

  audioContext = new (window.AudioContext || window.webkitAudioContext)();
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
  }, 3000); // 3 Sekunden Aufnahme
});

resetBtn.addEventListener("click", () => {
  recordedBuffer = null;
  alert("Aufnahme gelöscht!");
});

keys.forEach(key => {
  key.addEventListener("click", () => {
    if (!recordedBuffer || !audioContext) return;

    const semitone = parseInt(key.dataset.semitone);
    const rate = Math.pow(2, semitone / 12);

    const source = audioContext.createBufferSource();
    source.buffer = recordedBuffer;
    source.playbackRate.value = rate;

    // Optional: Hier können Verzerrungseffekte eingebaut werden (z. B. Bitcrusher)

    source.connect(audioContext.destination);
    source.start();
  });
});
