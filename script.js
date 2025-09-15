const card = document.querySelector('.card');

window.addEventListener('scroll', () => {
  const cardTop = card.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (cardTop < windowHeight - 100) {
    card.classList.add('visible');
  }
});