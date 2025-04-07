import refs from '../service/refs';

refs.orderBtnLink.addEventListener('click', toggleModal);
refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.choiceSectionMenu.forEach(link => {
  link.addEventListener('click', toggleModal);
});
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
