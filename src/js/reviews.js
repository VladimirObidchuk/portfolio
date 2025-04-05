export function review(params) {}
export default review;

import {getAllReviews} from "./reviewe-api.js"

import sprite from '../img/icon.svg';

// import Swiper from 'swiper';
// import 'swiper/css';
// import Swiper bundle with all modules installed

import Swiper from 'swiper/bundle';


const reviewContainer = document.querySelector('.review-container');

const emptyRender=()=>{
  reviewContainer.insertAdjacentHTML('beforeend', '<p class="not-found-alert"> No information found</p>');
}

const reviewsRender=(data)=>{

  const cardsMarkup=data.map(review=>{
    return `<li class="swiper-slide">
          <img class="review-img" src="${review.avatar_url}" alt="">
          <h4 class="review-author">${review.author}</h4>
          <p class="review-text">${review.review}</p>
        </li>`
  }).join('');


  const fullMarkup=`<div class="swiper mySwiper">
      <ul class="swiper-wrapper">${cardsMarkup}</ul>
    <div class="buttons-div">
      <button class="swiper-button-prev">
        <svg class="review-icon">
        <use href="${sprite}#icon-arrow-narrow-left"></use>
      </svg>
    </button>
      <button class="swiper-button-next">
        <svg class="review-icon">
        <use href="${sprite}#icon-arrow-narrow-right"></use>
      </svg>
    </button>
    </div>`

    reviewContainer.insertAdjacentHTML('beforeend', fullMarkup);

    new Swiper(".mySwiper", {
      
      // slidesPerView: 4,
       
      spaceBetween: 16,
      
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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
              }
  });

}


getAllReviews()
  .then(data => {
    reviewsRender(data);
    //добавляйте функціонал для рендеренгу
    console.log(data);
  })
  .catch((error) => {
    emptyRender();

    const scrollHandler = function() {
      const rect = reviewContainer.getBoundingClientRect();
    
      // Если верхняя часть секции видна на экране (появляется в области видимости)
      if (rect.top >= 0 && rect.top <= window.innerHeight) {

        // здесь должно быть что-то типа Toaster
        console.log("Error:", error.message);
    
        // Снимаем слушатель после того, как он сработал
        window.removeEventListener('scroll', scrollHandler);
      }
    };

    window.addEventListener('scroll', scrollHandler);
  });