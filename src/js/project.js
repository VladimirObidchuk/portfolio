import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

const projSwiper = new Swiper('.project-swiper', {
  modules: [Navigation, Keyboard],
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  autoHeight: true,

  spaceBetween: 10,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  simulateTouch: true,
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
});
