// Michael Kaush — small bits of interactivity. The site works without this file too.
(function () {
  document.documentElement.classList.add('js');

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header border once you scroll
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  }
  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Fade sections in as they scroll into view
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = (el.classList.contains('piece') || el.classList.contains('step')) ? (i % 4) * 70 + 'ms' : '';
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // ---------- Lightbox ----------
  var pieces = Array.prototype.slice.call(document.querySelectorAll('.piece-btn'));
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lb-img');
  var lbTitle = document.getElementById('lb-title');
  var lbType = document.getElementById('lb-type');
  var lbAsk = document.getElementById('lb-ask');
  var current = 0;
  var lastFocus = null;

  function show(i) {
    current = (i + pieces.length) % pieces.length;
    var btn = pieces[current];
    lbImg.src = btn.dataset.src;
    lbImg.alt = btn.querySelector('img').alt;
    lbTitle.textContent = btn.dataset.title;
    lbType.textContent = btn.dataset.type;
    history.replaceState(null, '', '#' + btn.closest('.piece').id);
  }
  function open(i) {
    lastFocus = document.activeElement;
    show(i);
    if (typeof lb.showModal === 'function') lb.showModal(); else lb.setAttribute('open', '');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    if (lb.open && typeof lb.close === 'function') lb.close(); else lb.removeAttribute('open');
  }
  lb.addEventListener('close', function () {
    document.body.style.overflow = '';
    history.replaceState(null, '', location.pathname + location.search + '#work');
    if (lastFocus) lastFocus.focus();
  });

  pieces.forEach(function (btn, i) {
    btn.addEventListener('click', function () { open(i); });
  });
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', function () { show(current - 1); });
  lb.querySelector('.lb-next').addEventListener('click', function () { show(current + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  lb.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  // Swipe left/right on phones
  var touchX = null;
  lb.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  // "Ask about this piece" fills in the booking form
  var ideaField = document.getElementById('f-idea');
  lbAsk.addEventListener('click', function () {
    var title = pieces[current].dataset.title;
    close();
    if (!ideaField.value.trim()) ideaField.value = 'I’m interested in "' + title + '". ';
    setTimeout(function () { ideaField.focus(); }, 400);
  });

  // Open a piece directly from a link like michaelkaush.com/#work-cowgirl
  if (location.hash.indexOf('#work-') === 0) {
    var target = document.querySelector(location.hash + ' .piece-btn');
    if (target) open(pieces.indexOf(target));
  }

  // ---------- Booking form → Instagram DM ----------
  var form = document.getElementById('booking-form');
  var status = document.getElementById('form-status');
  var IG_DM = 'https://ig.me/m/mktattooer';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var required = form.querySelectorAll('[required]');
    var ok = true;
    required.forEach(function (el) {
      var bad = !el.value.trim();
      el.classList.toggle('invalid', bad);
      if (bad && ok) { el.focus(); ok = false; }
    });
    if (!ok) { status.textContent = 'Please add your name and idea.'; return; }

    var d = new FormData(form);
    var lines = ['Hi Michael! Booking request from the website:', ''];
    lines.push('Name: ' + d.get('name'));
    lines.push('Idea: ' + d.get('idea'));
    if (d.get('placement')) lines.push('Placement: ' + d.get('placement'));
    if (d.get('size')) lines.push('Size: ' + d.get('size'));
    if (d.get('dates')) lines.push('Dates: ' + d.get('dates'));
    var message = lines.join('\n');

    function go(copied) {
      status.textContent = copied
        ? 'Copied! Instagram is opening — paste the message into the DM.'
        : 'Instagram is opening — tell me about your idea in the DM.';
      window.open(IG_DM, '_blank', 'noopener');
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(message).then(function () { go(true); }, function () { go(false); });
    } else {
      go(false);
    }
  });
  form.addEventListener('input', function (e) { e.target.classList.remove('invalid'); });
})();
