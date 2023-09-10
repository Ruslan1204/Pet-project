(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobile = document.querySelector('[data-mobile]');
  const backdrop = document.querySelector('.js-backdrop__mobile');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    mobile.classList.toggle('is-hidden');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  function closeMenu(evt) {
    if (evt.target === evt.currentTarget) {
      mobile.classList.toggle('is-hidden');
      backdrop.style.display = 'none';
    }
    if (backdrop.style.display === 'none') {
      backdrop.style.display = '';
      mobileMenu.classList.remove('is-open');
    }
  }

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  backdrop.addEventListener('click', closeMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    mobile.classList.remove('is-hidden');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
