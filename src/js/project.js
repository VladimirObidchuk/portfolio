export function project(params) {}
export default project;

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
  loop: false,
  centeredSlides: true,

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
