document.querySelectorAll('.gallery img').forEach(image => {
  image.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');
    lightboxImg.src = image.src;
    lightbox.style.display = 'flex';
  });
});

document.querySelector('.lightbox-close').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});

document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.style.display = 'none';
  }
});
