export function project(params) {}
export default project;

import Swiper, { Navigation, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

const projSwiper = new Swiper('.project-swiper', {
  modules: [Navigation, Keyboard],
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
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
