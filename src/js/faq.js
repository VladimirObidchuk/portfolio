import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function faq() {
  new Accordion('.accordion-container', {
    duration: 400,
    collapse: true,
    showMultiple: false,
  });
  const elements = Array.from(
    document.querySelectorAll('[id^="ac-trigger-"]::after')
  );
  console.log(' elements', elements);
  elements.forEach(el => {
    el.style;
    console.log(' el.style', el.style);
  });
}
export default faq;
