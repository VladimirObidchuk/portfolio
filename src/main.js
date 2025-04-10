// import Swiper from 'swiper';
import 'swiper/css';
import Swiper from 'swiper/bundle';
//import iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import refs from './service/refs.js';
import faq from './js/faq';
import about from './js/about.js';
import './js/modalmobile.js';
import './js/header.js';
import project from './js/project.js';
import {
  getValidatedFormData,
  initLiveValidation,
  showModal,
} from './js/work.js';
import { getAllReviews, setReview } from './js/reviewe-api.js';
import { reviewsRender, emptyRender } from './js/reviews.js';

//-----------------All reviews--------------------//
getAllReviews()
  .then(data => {
    refs.reviewContainer.insertAdjacentHTML('beforeend', reviewsRender(data));
    new Swiper('.swiper-review', {
      spaceBetween: 16,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      mousewheel: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      breakpoints: {
        1440: {
          slidesPerView: 4,
        },

        768: {
          slidesPerView: 2,
        },

        0: {
          slidesPerView: 1,
        },
      },
    });
  })

  .catch(error => {
    refs.reviewContainer.insertAdjacentHTML('beforeend', emptyRender());
    emptyRender();

    const scrollHandler = function () {
      const rect = refs.reviewContainer.getBoundingClientRect();

      if (!refs.reviewContainer) {
        console.error('reviewContainer не знайдено');
        return;
      }

      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        console.log('Error:', error.message);
        iziToast.error({
          position: 'bottomRight',
          timeout: 4000,
          title: 'Error',
          message: `${error.message}`,
        });
        window.removeEventListener('scroll', scrollHandler);
      }
    };

    window.addEventListener('scroll', scrollHandler);
  });
//-------------------------------------//

//-----------------Add new review--------------------//
async function addReview(e) {
  e.preventDefault();

  const formData = getValidatedFormData();

  if (!formData) return; // Якщо помилка — нічого не надсилаємо

  const { email, comment } = formData;

  try {
    const newReview = { email, comment };
    const response = await setReview(newReview);
    refs.form.reset();
    refs.emailMsg.textContent = '';
    refs.commentMsg.textContent = '';
    refs.emailMsg.className = 'input-message';
    refs.commentMsg.className = 'input-message';
    refs.emailInput.classList.remove('valid-input', 'invalid-input');
    refs.comment.classList.remove('valid-input', 'invalid-input');
    initLiveValidation();
    showModal();
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      timeout: 4000,
      title: 'Error',
      message: `${error.message}`,
    });
  }
}
refs.form.addEventListener('submit', addReview);
//-------------------------------------//

about();
project();

faq();
