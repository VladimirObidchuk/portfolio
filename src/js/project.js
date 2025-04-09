import Swiper from 'swiper';

import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

const projSwiper = new Swiper('.project-swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  loop: false,

  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  autoHeight: true,

  mousewheel: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  simulateTouch: true,
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
});
