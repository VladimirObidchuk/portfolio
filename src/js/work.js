import refs from '../service/refs';

const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function showModal() {
  refs.modalBackdrop.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  refs.emailInput.addEventListener('input', validateEmail);
  refs.comment.addEventListener('input', validateComment);
  document.addEventListener('keydown', handleEscapeKey);
  console.log('Email input event listener added');
}

function closeModal() {
  refs.modalBackdrop.classList.add('hidden');
  document.body.style.overflow = '';
  refs.emailInput.removeEventListener('input', validateEmail);
  refs.comment.removeEventListener('input', validateComment);
  document.removeEventListener('keydown', handleEscapeKey);
  console.log('Email input event listener remove');
}
function handleEscapeKey(e) {
  if (e.key === 'Escape') closeModal();
}
refs.modalCloseBtn.addEventListener('click', closeModal);
refs.modalBackdrop.addEventListener('click', e => {
  if (e.target === refs.modalBackdrop) closeModal();
});

// Функция для валидации email
function validateEmail() {
  const email = refs.emailInput.value.trim();
  const emailMessage = document.getElementById('email-message');
  emailMessage.classList.remove('success-message', 'error-message');
  refs.emailInput.classList.remove('valid-input', 'invalid-input');
  if (!emailPattern.test(email)) {
    emailMessage.textContent = 'Invalid email, try again';
    emailMessage.classList.add('error-message');
    refs.emailInput.classList.add('invalid-input');
    refs.emailInput.classList.remove('valid-input');
  } else {
    emailMessage.textContent = 'Success!';
    emailMessage.classList.add('success-message');
    refs.emailInput.classList.add('valid-input');
    refs.emailInput.classList.remove('invalid-input');
  }
}

// Функция для валидации комментария
function validateComment() {
  const comment = refs.comment.value.trim();
  const commentMessage = document.getElementById('comment-message');
  commentMessage.classList.remove('success-message', 'error-message');
  refs.comment.classList.remove('valid-input', 'invalid-input');
  if (comment === '') {
    commentMessage.textContent = 'Comment cannot be empty';
    commentMessage.classList.add('error-message');
    refs.comment.classList.add('invalid-input');
    refs.comment.classList.remove('valid-input');
  } else {
    commentMessage.textContent = 'Success!';
    commentMessage.classList.add('success-message');
    refs.comment.classList.add('valid-input');
    refs.comment.classList.remove('invalid-input');
  }
}

// Валидация в реальном времени
refs.emailInput.addEventListener('input', validateEmail);
refs.comment.addEventListener('input', validateComment);

export function getValidatedFormData() {
  const email = refs.emailInput.value.trim();
  const comment = refs.comment.value.trim();

  const emailMsg = refs.emailMsg;
  const commentMsg = refs.commentMsg;

  emailMsg.textContent = '';
  commentMsg.textContent = '';
  emailMsg.className = 'input-message';
  commentMsg.className = 'input-message';

  refs.emailInput.classList.remove('valid-input', 'invalid-input');
  refs.comment.classList.remove('valid-input', 'invalid-input');

  let hasError = false;

  if (!emailPattern.test(email)) {
    emailMsg.textContent = 'Invalid email, try again';
    emailMsg.classList.add('error-message');
    refs.emailInput.classList.add('invalid-input');
    hasError = true;
  } else {
    emailMsg.textContent = 'Success!';
    emailMsg.classList.add('success-message');
    refs.emailInput.classList.add('valid-input');
  }

  if (comment === '') {
    commentMsg.textContent = 'Comment cannot be empty';
    commentMsg.classList.add('error-message');
    refs.comment.classList.add('invalid-input');
    hasError = true;
  } else {
    commentMsg.textContent = 'Success!';
    commentMsg.classList.add('success-message');
    refs.comment.classList.add('valid-input');
  }

  if (hasError) return null;

  return { email, comment };
}
