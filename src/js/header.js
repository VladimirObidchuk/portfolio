import refs from '../service/refs';

refs.menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  refs.listLink.classList.toggle('hidden');

  if (!refs.listLink.classList.contains('hidden')) {
    refs.body.addEventListener('click', closeMenuHandler);
  } else {
    refs.body.removeEventListener('click', closeMenuHandler);
  }
}

function closeMenuHandler(event) {
  if (
    !refs.listLink.contains(event.target) &&
    !refs.menuBtn.contains(event.target)
  ) {
    refs.listLink.classList.add('hidden');
    refs.body.removeEventListener('click', closeMenuHandler);
  } else if (event.target.tagName === 'A') {
    refs.listLink.classList.add('hidden');
    refs.body.removeEventListener('click', closeMenuHandler);
  }
}
