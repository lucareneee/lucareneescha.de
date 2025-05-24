document.addEventListener('DOMContentLoaded', () => {
    // ⭐ Sterne erzeugen
    function generateStars(layerId, count) {
      const container = document.getElementById(layerId);
      for (let i = 0; i < count; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        s.style.top = Math.random() * 100 + '%';
        s.style.left = Math.random() * 100 + '%';
        s.style.width = s.style.height = (1 + Math.random() * 2) + 'px';
        s.style.animationDelay = Math.random() * 4 + 's';
        container.appendChild(s);
      }
    }
  
    generateStars('stars1', 100); // Vordergrund
    generateStars('stars2', 75);  // Mitte
    generateStars('stars3', 50);  // Hintergrund
  
    // 📬 Kontakt-Popup
    window.toggleContact = function () {
      document.getElementById('contactPopup').classList.toggle('active');
    };
  
    // 🌌 Szenenwechsel
    window.enterOrbit = function () {
      document.getElementById('layer-outer').classList.replace('visible', 'hidden');
      document.getElementById('layer-inner').classList.replace('hidden', 'visible');
    };
  
    window.resetScene = function () {
      document.getElementById('layer-inner').classList.replace('visible', 'hidden');
      document.getElementById('layer-outer').classList.replace('hidden', 'visible');
    };
  
    // ✍️ Gedichte
    window.addPoem = function () {
      const text = document.getElementById('poemInput').value.trim();
      if (!text) return;
      const div = document.createElement('div');
      div.className = 'orbit-poem';
      div.textContent = '„' + text + '“';
      div.style.top = Math.random() * 80 + '%';
      div.style.left = Math.random() * 80 + '%';
      const duration = 40 + Math.random() * 40;
      const path = Math.ceil(Math.random() * 4); // 1–4
      div.style.animation = `orbitFloat${path} ${duration}s linear infinite`;
      document.getElementById('poemOrbitContainer').appendChild(div);
      document.getElementById('poemInput').value = '';
    };
  
    // 💡 Lightbox
    let galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));
    let currentIndex = 0;
  
    galleryImages.forEach((img, index) => {
      img.addEventListener('click', () => {
        currentIndex = index;
        showImage(index);
      });
    });
  
    function showImage(index) {
      document.getElementById('lightboxImage').src = galleryImages[index].src;
      document.getElementById('lightboxOverlay').style.display = 'flex';
    }
  
    window.changeImage = function (direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = galleryImages.length - 1;
      if (currentIndex >= galleryImages.length) currentIndex = 0;
      showImage(currentIndex);
    };
  
    document.getElementById('lightboxOverlay').addEventListener('click', function (e) {
      if (e.target.id === 'lightboxOverlay') {
        closeLightbox();
      }
    });
  
    function closeLightbox() {
      document.getElementById('lightboxOverlay').style.display = 'none';
    }
  
    // 🌠 Popup
    window.showPopup = function (type) {
      const popup = document.getElementById('popup');
      const title = document.getElementById('popup-title');
      const text = document.getElementById('popup-text');
      if (type === 'poem') {
        title.textContent = 'Gedichtfragment';
        text.textContent = 'Ich schreibe mit Licht auf dein Innenohr, damit du tanzt.';
      }
      popup.classList.add('active');
      setTimeout(() => popup.classList.remove('active'), 5000);
    };
  });
  
