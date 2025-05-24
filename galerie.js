
const galleryImages = Array.from(document.querySelectorAll('.artwork img'));
let currentIndex = 0;

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage(index);
  });
});

function showImage(index) {
  const img = galleryImages[index];
  document.getElementById('lightboxImage').src = img.src;

  // Bildtitel aus dem nächsten Element mit der Klasse "info"
  const caption = img.closest('.artwork').querySelector('.info')?.textContent || '';
  document.getElementById('lightboxCaption').textContent = caption;

  document.getElementById('lightboxOverlay').style.display = 'flex';
}


  function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = galleryImages.length - 1;
    if (currentIndex >= galleryImages.length) currentIndex = 0;
    showImage(currentIndex);
  }

  document.getElementById('lightboxOverlay').addEventListener('click', function(e) {
    if (e.target.id === 'lightboxOverlay') {
      document.getElementById('lightboxOverlay').style.display = 'none';
    }
  });

