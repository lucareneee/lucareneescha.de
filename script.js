const tierchen = document.querySelector('.pixeltierchen');

function laufAnimation() {
  const laufrichtung = Math.random() > 0.5 ? 'rechts' : 'links';
  const screenWidth = window.innerWidth;
  const start = laufrichtung === 'rechts' ? -100 : screenWidth + 100;
  const end = laufrichtung === 'rechts' ? screenWidth + 100 : -100;
  tierchen.style.left = start + 'px';
  tierchen.style.transform = laufrichtung === 'rechts' ? 'scaleX(1)' : 'scaleX(-1)';

  // Setze Position ohne Animation
  tierchen.style.transition = 'none';
  tierchen.style.left = start + 'px';

  setTimeout(() => {
    tierchen.style.transition = 'left 10s linear';
    tierchen.style.left = end + 'px';
  }, 100);

  // Nächster Lauf nach 10–30 Sekunden
  const delay = Math.random() * 20000 + 10000;
  setTimeout(laufAnimation, delay);
}

window.addEventListener('load', () => {
  setTimeout(laufAnimation, 3000);
});

function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}
