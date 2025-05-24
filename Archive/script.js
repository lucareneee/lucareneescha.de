const tierchen = document.getElementById('pixeltierchen');  // Nutze die ID, nicht die Klasse

function laufAnimation() {
  const laufrichtung = Math.random() > 0.5 ? 'rechts' : 'links';
  const screenWidth = window.innerWidth;
  const tierchenWidth = tierchen.offsetWidth;
  const start = laufrichtung === 'rechts' ? -tierchenWidth : screenWidth + tierchenWidth;
  const end = laufrichtung === 'rechts' ? screenWidth + tierchenWidth : -tierchenWidth;

  // Position setzen ohne Animation für fließenden Übergang
  tierchen.style.transition = 'none';
  tierchen.style.left = start + 'px';
  tierchen.style.transform = laufrichtung === 'rechts' ? 'scaleX(1)' : 'scaleX(-1)';
  
  // Start der Animation nach kurzer Verzögerung
  setTimeout(() => {
    tierchen.style.transition = 'left 10s linear';
    tierchen.style.left = end + 'px';
  }, 100);

  // Wiederholung der Animation nach einer zufälligen Pause
  const delay = Math.random() * 20000 + 10000;
  setTimeout(laufAnimation, delay);
}

// Animation startet mit einer kurzen Verzögerung nach dem Laden der Seite
window.addEventListener('load', () => {
  setTimeout(laufAnimation, 3000);
});

// Popup anzeigen und verstecken
function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}
