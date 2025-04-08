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
import './js/project.js';
import './js/work.js';
import { getAllReviews, setReview } from './js/reviewe-api.js';
import { reviewsRender, emptyRender } from './js/reviews.js';

//-----------------All reviews--------------------//
getAllReviews()
  .then(data => {
    refs.reviewContainer.insertAdjacentHTML('beforeend', reviewsRender(data));
    // const reviewsSwiper =
    new Swiper('.swiper-review', {
      spaceBetween: 16,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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

        // Снимаем слушатель после того, как он сработал
        window.removeEventListener('scroll', scrollHandler);
      }
    };

    window.addEventListener('scroll', scrollHandler);
  });
//-------------------------------------//

//-----------------Add new review--------------------//
async function addReview(e) {
  e.preventDefault();
  try {
    const newReview = [emailData, commentData]; // створюємо масив даних з input
    const addNewReview = await setReview(newReview);
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

about();

faq();
