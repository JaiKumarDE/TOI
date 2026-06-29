const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      event.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const heroImages = document.querySelectorAll('.hero-img');
window.addEventListener('mousemove', event => {
  const x = (event.clientX / window.innerWidth - 0.5) * 18;
  const y = (event.clientY / window.innerHeight - 0.5) * 18;
  heroImages.forEach((img, index) => {
    const direction = index % 2 === 0 ? 1 : -1;
    img.style.transform = `translate(${x * direction}px, ${y * direction}px)`;
  });
});

const revealElements = document.querySelectorAll('.section, .card, .gallery-grid img, .contact-card');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
