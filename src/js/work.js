import refs from '../service/refs';

const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function showModal() {
  refs.modalBackdrop.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  refs.modalBackdrop.classList.add('hidden');
  document.body.style.overflow = '';
}

refs.modalCloseBtn.addEventListener('click', closeModal);
refs.modalBackdrop.addEventListener('click', e => {
  if (e.target === refs.modalBackdrop) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  const email = refs.emailInput.value.trim();
  console.log(' email', email);
  const comment = refs.comment.value.trim();
  console.log(' comment', comment);
  if (!emailPattern.test(email)) {
    alert('Invalid email, try again');
    return;
  }
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, comment }),
    });

    if (!response.ok) throw new Error('Failed request');
    showModal();
    refs.form.reset();
  } catch (error) {
    alert('Something went wrong. Please check your info and try again.');
  }
});
