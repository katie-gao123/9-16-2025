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

const canvas = document.getElementById('confetti-canvas');

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const memories = document.querySelectorAll('.memory');

function revealMemories() {
  memories.forEach(memory => {
    const rect = memory.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      memory.style.opacity = 1;
      memory.style.transform = 'translateY(0)';
    }
  });
}

window.onload = function() {
  const firstImage = document.querySelector('img');
  setTimeout(() => {
    firstImage.classList.add('fade-in');
  }, 2000); // 2000ms = 2 seconds delay

  // Background color change on scroll
  const memories = document.querySelectorAll('.memory');
  const body = document.body;

  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const color = entry.target.getAttribute('data-color');
        body.style.backgroundColor = color;
      }
    });
  }, {
    threshold: 0.5
  });

  memories.forEach(memory => {
    observer.observe(memory);
  });

  // Fade in .card elements when in view and launch confetti for last card
  const cards = document.querySelectorAll('.card');
  const lastCard = cards[cards.length - 1];
  let confettiLaunched = false;
  const cardObserver = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        if (entry.target === lastCard && !confettiLaunched) {
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#a8182b', '#ffd700', '#87ebcf', '#da8def', '#ff47b8']
          });
          confettiLaunched = true;
        }
      }
    });
  }, {
    threshold: 0.5
  });
  cards.forEach(card => {
    cardObserver.observe(card);
  });
};
window.addEventListener('scroll', revealMemories);
window.addEventListener('load', revealMemories);