document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('image-popup');
  const popupImage = popup.querySelector('img');
  const closeButton = popup.querySelector('.close-btn');

  document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const image = e.target.closest('figure').querySelector('.card-image');
      if (image) {
        popupImage.src = image.src;
        popup.classList.add('show');
        popup.setAttribute('aria-hidden', 'false');
      }
    });
  });

  const closePopup = () => {
    popup.classList.remove('show');
    popup.setAttribute('aria-hidden', 'true');
    popupImage.src = '';
  };

  closeButton.addEventListener('click', closePopup);

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      closePopup();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('show')) {
      closePopup();
    }
  });
});