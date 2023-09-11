(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    window: document.addEventListener('keydown', handelKeyClose),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', closeMenu);

  function closeMenu(evt) {
    if (evt.target === evt.currentTarget) {
      refs.modal.classList.remove('is-hidden');
      refs.modal.style.display = 'none';
    }
    if (refs.modal.style.display === 'none') {
      refs.modal.classList.toggle('is-hidden');
      refs.modal.style.display = '';
    }
  }

  function handelKeyClose(evt) {
    if (evt.code === 'Escape') {
      refs.modal.style.display = 'none';
    }
    if (refs.modal.style.display === 'none') {
      refs.modal.classList.toggle('is-hidden');
      refs.modal.style.display = '';
    }
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
