/* Theme — runs before body paint to avoid flash */
(function () {
  var stored = localStorage.getItem('dcc-theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', stored || (prefersDark ? 'dark' : 'light'));
})();

document.addEventListener('DOMContentLoaded', function () {
  /* ── Theme toggle ── */
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('dcc-theme', next);
    });
  });

  /* Keep in sync with OS changes if user hasn't overridden */
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('dcc-theme')) {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });

  /* ── Mobile nav ── */
  var hamburger = document.querySelector('.hamburger');
  var mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var open = hamburger.getAttribute('aria-expanded') !== 'true';
      hamburger.setAttribute('aria-expanded', open);
      mobileNav.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (mobileNav.classList.contains('open') &&
          !hamburger.contains(e.target) &&
          !mobileNav.contains(e.target)) {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    /* Close when a link is tapped */
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Active nav link ── */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').split('/').pop();
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
    /* Keep parent "About Chihuahuas" active when on buying.html */
    if (page === 'buying.html' && href === 'about.html') {
      a.classList.add('active');
    }
  });
});
