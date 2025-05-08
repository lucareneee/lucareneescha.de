let audioContext;
let recordedBuffer = null;

const recordBtn = document.getElementById("record-btn");
const resetBtn = document.getElementById("reset-btn");
const keys = document.querySelectorAll(".key");

recordBtn.addEventListener("click", async () => {
  recordBtn.style.opacity = 0.5;

  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const mediaRecorder = new MediaRecorder(stream);
  const chunks = [];

  mediaRecorder.ondataavailable = e => chunks.push(e.data);
  mediaRecorder.onstop = async () => {
    const blob = new Blob(chunks, { type: "audio/webm" });
    const arrayBuffer = await blob.arrayBuffer();
    recordedBuffer = await audioContext.decodeAudioData(arrayBuffer);
    recordBtn.style.opacity = 1;
  };

  mediaRecorder.start();

  setTimeout(() => {
    mediaRecorder.stop();
    stream.getTracks().forEach(track => track.stop());
  }, 3000); // 3 Sekunden Aufnahme
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
  key.addEventListener("click", async () => {
    const action = key.dataset.action;

    if (action === "record") {
      // Start Aufnahme
      startRecording(); // deine Funktion
    } else if (action === "reset") {
      recordedBuffer = null;
      showPopup("Aufnahme gelöscht!");
    } else if (action === "help") {
      showHelpSMS(); // neue Funktion
    } else {
      // Ton abspielen (wie bisher)
    }
  });
});
