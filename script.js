const card = document.querySelector('.card');
let confettiTriggered = false;

window.addEventListener('scroll', () => {
  const cardTop = card.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (cardTop < windowHeight - 100 && !confettiTriggered) {
    card.classList.add('visible');
    launchConfetti();
    confettiTriggered = true;
  }
});

function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#a8182bff', '#ffd700', '#87ebcfff', '#da8defff', '#ff47b8ff'] // pink, gold, sky blue, mint, coral
  });
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});