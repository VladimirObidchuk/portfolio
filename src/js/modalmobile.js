const refs = {
  menuBtn: document.querySelector('.js-menu'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  choiceSectionMenu: document.querySelectorAll('.burger-nav-link'),
  orderBtnLink: document.querySelector('.burger-btn-link'),
  modal: document.querySelector('[data-modal]'),
};

refs.choiceSectionMenu.forEach(link => {
  link.addEventListener('click', toggleModal);
});

refs.orderBtnLink.addEventListener('click', toggleModal);
refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-open');

  if (refs.modal.classList.contains('is-open')) {
    document.addEventListener('keydown', handleEscPress);
  } else {
    document.removeEventListener('keydown', handleEscPress);
  }
}

function handleEscPress(event) {
  if (event.key === 'Escape') {
    refs.modal.classList.remove('is-open');
    document.removeEventListener('keydown', handleEscPress);
  }
}
