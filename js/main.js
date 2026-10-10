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

  // Keep the footer year current
  document.getElementById('year').textContent = new Date().getFullYear();
})();
