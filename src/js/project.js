import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

export default function project() {
  new Swiper('.project-swiper', {
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
}
