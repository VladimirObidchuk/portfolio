export function review(params) {}
export default review;



// import Swiper from 'swiper';
// import 'swiper/css';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// // import styles bundle
// import 'swiper/css/bundle';
// import 'swiper/css/keyboard';

// init Swiper:

// import 'swiper/css';
// import 'swiper/css/navigation';
// const swiper = new Swiper();


// document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        // slidesPerView: "auto",
        slidesPerView: 4,
         // Показывать 1 карточку за раз
        spaceBetween: 16,
        // centeredSlides: false,
        
        // Отступ между карточками
        // loop: true, 
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },


        breakpoints: {
                  // Когда ширина экрана >= 1024px
                  1440: {
                    slidesPerView: 4, // показывать 3 слайда
                  },
                  // Когда ширина экрана >= 768px
                  768: {
                    slidesPerView: 2, // показывать 2 слайда
                  },
                  // Когда ширина экрана < 768px
                  0: {
                    slidesPerView: 1, // показывать 1 слайд
                  },
                }
        // breakpoints: {

        //     320: {
        //         slidesPerView: 1,
        //       },
        //     768: {
        //         slidesPerView: 2, // На планшетах 2 картки
        //     },
            
        //     1440: {
        //         slidesPerView: 4, // На десктопі теж 3 картки
        //     }
        // }
    });
// });

  
