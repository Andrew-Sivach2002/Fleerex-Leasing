// Fleetrex Leasing — small enhancements only. The site works without JavaScript.
(function () {
  document.documentElement.classList.remove('no-js');

  // Mobile menu toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close the menu after tapping a link or pressing Escape
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeMenu();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  // Header: add a shadow and glowing line once the page is scrolled
  var header = document.querySelector('.site-header');
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Keep the footer year current
  document.getElementById('year').textContent = new Date().getFullYear();

  // Scroll reveal: elements fade and slide in once as they enter the screen.
  // Skipped entirely for visitors who prefer reduced motion.
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  var groups = [
    document.querySelectorAll('.hero-text, .hero-media'),
    document.querySelectorAll('.steps .step'),
    document.querySelectorAll('.card-grid > *')
  ];
  // Direct children of each section's container (except the card grids, handled above)
  document.querySelectorAll('.section > .container').forEach(function (c) {
    groups.push(c.querySelectorAll(':scope > :not(.steps):not(.card-grid)'));
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  groups.forEach(function (els) {
    Array.prototype.forEach.call(els, function (el, i) {
      el.style.setProperty('--reveal-delay', Math.min(i, 4) * 90 + 'ms');
      el.classList.add('reveal');
      observer.observe(el);
    });
  });
})();
