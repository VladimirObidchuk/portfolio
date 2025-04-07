import { faq } from './js/faq.js';
// import './js/modalmobile.js';
import './js/header.js';
import { getAllReviews, setReview } from './js/reviewe-api.js';

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
