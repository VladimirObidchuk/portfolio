import refs from './service/refs.js';

import about from './js/about.js';
import covers from './js/covers.js';
import faq from './js/faq.js';
import './js/modalmobile.js';
import './js/header.js';
import project from './js/project.js';
import { getAllReviews, setReview } from './js/reviewe-api.js';
import review from './js/reviews.js';
import work from './js/work.js';

//-----------------All reviews--------------------//
getAllReviews()
  .then(data => {
    //добавляйте функціонал для рендеренгу
    console.log(data);
  })
  .catch(error => console.error);
//-------------------------------------//

//-----------------Add new review--------------------//
async function addReview(e) {
  e.preventDefault();
  try {
    const newReview = [emailData, commentData]; // створюємо масив даних з input
    const addNewReview = await setReview(newReview);
  } catch (error) {}
}
//-------------------------------------//
faq();
