import refs from '../service/refs';

refs.menuBtn.addEventListener('click', handleOnClick);
refs.listLink.addEventListener('click', handleRemoveClick);

function handleOnClick() {
  refs.listLink.classList.toggle('hidden');
}

function handleRemoveClick() {
  refs.listLink.classList.add('hidden');
}
refs.body.addEventListener('click', event => {
  if (
    !refs.listLink.contains(event.target) &&
    !refs.menuBtn.contains(event.target)
  ) {
    refs.listLink.classList.add('hidden');
  }
});
