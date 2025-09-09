// Modular JS for June Wahu Portfolio
// Smooth scroll, filtering, and simple fade-in animations

document.addEventListener('DOMContentLoaded', function () {
  // Hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger && hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Simple fade-in on scroll
  const fadeEls = document.querySelectorAll('[data-fade]');
  const fadeIn = (el) => {
    el.style.opacity = 1;
    el.style.transform = 'translateY(0)';
  };
  const fadeOut = (el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
  };
  const onScroll = () => {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) fadeIn(el);
      else fadeOut(el);
    });
  };
  fadeEls.forEach(el => {
    el.style.transition = 'opacity 0.7s, transform 0.7s';
    fadeOut(el);
  });
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Project/blog filtering (by data-filter)
  document.querySelectorAll('[data-filter-group]').forEach(group => {
    group.addEventListener('click', function (e) {
      if (e.target.matches('[data-filter]')) {
        const filter = e.target.getAttribute('data-filter');
        const items = document.querySelectorAll('[data-filter-item]');
        items.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-filter-item') === filter) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
        group.querySelectorAll('[data-filter]').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
      }
    });
  });

  // Blog card overlay accessibility: allow keyboard focus
  const blogCards = document.querySelectorAll('.blog-card');
  blogCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('focus', function() {
      this.classList.add('focus');
    });
    card.addEventListener('blur', function() {
      this.classList.remove('focus');
    });
  });

  // Testimonial carousel logic
  const testimonials = document.querySelectorAll('.testimonial-slider .testimonial');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  let currentTestimonial = 0;

  function showTestimonial(idx) {
    testimonials.forEach((t, i) => {
      t.classList.remove('active', 'prev', 'next');
      if (i === idx) t.classList.add('active');
      else if (i === (idx + 1) % testimonials.length) t.classList.add('next');
      else if (i === (idx - 1 + testimonials.length) % testimonials.length) t.classList.add('prev');
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
  }
  if (testimonials.length && prevBtn && nextBtn && dots.length) {
    showTestimonial(currentTestimonial);
    prevBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentTestimonial);
    });
    nextBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    });
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentTestimonial = i;
        showTestimonial(currentTestimonial);
      });
    });
    // Optional: auto-advance every 7s
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 7000);
  }

  // Section highlighting for sticky nav
  const sections = document.querySelectorAll('section');
  const navLinkElements = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });
    navLinkElements.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });

  // Project card overlay accessibility: allow keyboard focus
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('focus', function() {
      this.classList.add('focus');
      const overlay = this.querySelector('.project-overlay');
      if (overlay) overlay.style.opacity = 1;
    });
    card.addEventListener('blur', function() {
      this.classList.remove('focus');
      const overlay = this.querySelector('.project-overlay');
      if (overlay) overlay.style.opacity = 0;
    });
  });
});
