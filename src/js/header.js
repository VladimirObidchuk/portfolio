import refs from '../service/refs';

refs.menuBtn.addEventListener('click', handleOnClick);
refs.listLink.addEventListener('click', handleRemoveClick);

function handleOnClick() {
  refs.listLink.classList.toggle('hidden');
}

function handleRemoveClick() {
  refs.listLink.classList.add('hidden');
}
