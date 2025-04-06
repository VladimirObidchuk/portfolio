export function work(params) {}
export default work;
const form = document.getElementById('work-contactform');
const emailInput = document.getElementById('email');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalCloseBtn = document.getElementById('modalCloseBtn');

const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function showModal() {
  modalBackdrop.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBackdrop.classList.add('hidden');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', e => {
  if (e.target === modalBackdrop) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

form.addEventListener('submit', async e => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const comment = document.getElementById('comment').value.trim();
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
    form.reset();
  } catch (error) {
    alert('Something went wrong. Please check your info and try again.');
  }
});
