import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export default function faq() {
  new Accordion('.faq-accordion', {
    duration: 400,
    collapse: true,
    showMultiple: false,
  });
}
