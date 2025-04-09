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
import { getValidatedFormData } from './js/work.js';
import { getAllReviews, setReview } from './js/reviewe-api.js';
import { reviewsRender, emptyRender } from './js/reviews.js';

//-----------------All reviews--------------------//
getAllReviews()
  .then(data => {
    refs.reviewContainer.insertAdjacentHTML('beforeend', reviewsRender(data));
    new Swiper('.swiper-review', {
      loop: false,
      spaceBetween: 16,
      centeredSlides: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
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

    iziToast.success({
      position: 'bottomRight',
      timeout: 3000,
      title: 'Success',
      message: 'Review sent successfully!',
    });

    refs.form.reset();
  } catch (error) {
    iziToast.error({
      position: 'bottomRight',
      timeout: 4000,
      title: 'Error',
      message: `${error.message}`,
    });
  }
}
//-------------------------------------//
refs.form.addEventListener('submit', addReview);
about();
project();

faq();
