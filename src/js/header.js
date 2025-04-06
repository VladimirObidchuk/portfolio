const menuBtn = document.querySelector('.js-menu');
const listLink = document.querySelector('.nav-list');

menuBtn.addEventListener('click', handleOnClick);
listLink.addEventListener('click', handleRemoveClick);

function handleOnClick() {
  listLink.classList.remove('hidden');
}

function handleRemoveClick() {
  listLink.classList.add('hidden');
}
