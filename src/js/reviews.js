import sprite from '../img/icon.svg';

export const emptyRender = () => {
  return `<p class="not-found-alert"> No information found</p>`;
};

export const reviewsRender = data => {
  const cardsMarkup = data
    .map(review => {
      return `<li class="swiper-slide swiper-slide-review" role="listitem" aria-label=${review.author}">
          <img class="review-img" src="${review.avatar_url}" alt="${review.author}"  width="48" height="48">
          <h4 class="review-author">${review.author}</h4>
          <p class="review-text">${review.review}</p>
        </li>`;
    })
    .join('');

  const fullMarkup = `<div class="swiper swiper-review">
      <ul class="swiper-wrapper swiper-wrapper-review" aria-live="polite" aria-atomic="true">${cardsMarkup}</ul>
    <ul class="buttons-div" role="region" aria-labelledby="reviews-controls-button">
      <li class="swiper-button-prev swiper-button-prev-review" aria-label=" Go to the previous review">
        <svg class="review-icon">
        <use href="${sprite}#icon-arrow-narrow-left"></use>
      </svg>
    </li>
      <li class="swiper-button-next swiper-button-next-review" aria-label=" Go to next review">
        <svg class="review-icon">
        <use href="${sprite}#icon-arrow-narrow-right"></use>
      </svg>
    </li>
    </ul><style>
#review .swiper-button-prev:after, .swiper-button-next:after {
  content: none;
}
</style>`;

  return fullMarkup;
};
