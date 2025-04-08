import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

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

  const swiper = new Swiper('.about-swiper', {
    loop: true,
    spaceBetween: 1,
    navigation: {
      nextEl: '.about-swiper-btn',
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
      1440: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 1,
      },
      375: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
    },
  });
}
