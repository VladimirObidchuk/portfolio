import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/about.css';

export default function about() {
  new Accordion('.js-accordion', {
    duration: 300,
    showMultiple: false,
    onOpen: item => {
      const icon = item.querySelector('.ac-trigger');
      if (icon) icon.classList.add('rotate-180');
    },
    onClose: item => {
      const icon = item.querySelector('.ac-trigger');
      if (icon) icon.classList.remove('rotate-180');
    },
  });

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: true,
    a11y: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
  });

  document
    .querySelector('.swiper-button-next')
    .addEventListener('click', function () {
      swiper.slideNext();
    });
}
