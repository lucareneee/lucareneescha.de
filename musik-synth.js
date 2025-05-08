let audioContext;
let recordedBuffer = null;

const keys = document.querySelectorAll(".key");

// Aufnahme starten
async function startRecording() {
  const recordBtn = document.getElementById("record-btn");
  recordBtn.disabled = true;
  recordBtn.style.opacity = 0.5;
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
    recordBtn.style.opacity = 1;
  };

  mediaRecorder.start();
  setTimeout(() => {
    mediaRecorder.stop();
    stream.getTracks().forEach(track => track.stop());
  }, 3000);
}

// Einfaches Text-Popup anzeigen
function showPopup(message) {
  const popup = document.getElementById("popup");
  popup.textContent = message;
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
}

// Hilfe-SMS anzeigen
function showHelpSMS() {
  const help = document.getElementById("help-popup");
  help.style.display = "block";
  setTimeout(() => {
    help.style.display = "none";
  }, 7000);
}

// Alle Keys verarbeiten
keys.forEach(key => {
  key.addEventListener("click", async () => {
    const action = key.dataset.action;

    if (action === "record") {
      startRecording();
    } else if (action === "reset") {
      recordedBuffer = null;
      showPopup("Aufnahme gelöscht!");
    } else if (action === "help") {
      showHelpSMS();
    } else {
      // Ton abspielen
      const semitone = parseInt(key.dataset.semitone);
      if (recordedBuffer && audioContext) {
        const rate = Math.pow(2, semitone / 12);
        const source = audioContext.createBufferSource();
        source.buffer = recordedBuffer;
        source.playbackRate.value = rate;
        source.connect(audioContext.destination);
        source.start();
      }
    }
  });
});
