// import Swiper from 'swiper';
// import 'swiper/css';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// // import styles bundle
// import 'swiper/css/bundle';
// import 'swiper/css/keyboard';

// init Swiper:
const swiper = new Swiper();



export function review(params) {}
export default review;

document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        slidesPerView: 4, // Показывать 1 карточку за раз
        spaceBetween: 16, // Отступ между карточками
        loop: true, // Бесконечная прокрутка
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

  
  
console.log("privet");
