let audioContext;
let recordedBuffer = null;

const recordBtn = document.getElementById("record-btn");
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
  };

  mediaRecorder.start();

  setTimeout(() => {
    mediaRecorder.stop();
    stream.getTracks().forEach(track => track.stop());
  }, 3000); // 3 Sekunden aufnehmen
});

keys.forEach(key => {
  key.addEventListener("click", () => {
    if (!recordedBuffer || !audioContext) return;

    const semitone = parseInt(key.dataset.semitone);
    const rate = Math.pow(2, semitone / 12);

    const source = audioContext.createBufferSource();
    source.buffer = recordedBuffer;
    source.playbackRate.value = rate;

    // Y2K Verzerrung kommt später hier rein!

    source.connect(audioContext.destination);
    source.start();
  });
});
