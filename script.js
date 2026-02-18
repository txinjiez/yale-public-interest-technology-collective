// Generate animated rays in the hero section
document.addEventListener('DOMContentLoaded', function() {
  const raysContainer = document.querySelector('.rays');
  
  if (raysContainer) {
    for (let i = 0; i < 12; i++) {
      const ray = document.createElement('div');
      ray.className = 'ray';
      
      const angle = (i / 12) * 360;
      const height = 200 + Math.random() * 150;
      
      ray.style.height = height + 'px';
      ray.style.transform = `rotate(${angle}deg) translateY(-${height / 2}px)`;
      ray.style.animationDelay = `${i * 0.1}s`;
      
      raysContainer.appendChild(ray);
    }
  }
});

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll event to update nav appearance
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(255,255,255,0.97)';
    nav.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
  } else {
    nav.style.background = 'rgba(255,255,255,0.92)';
    nav.style.boxShadow = 'none';
  }
});
