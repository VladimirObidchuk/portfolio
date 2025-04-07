export const emptyRender = () => {
  reviewContainer.insertAdjacentHTML(
    'beforeend',
    '<p class="not-found-alert"> No information found</p>'
  );
};

export const reviewsRender = data => {
  return data
    .map(review => {
      return `<li class="swiper-slide swiper-slide-review">
          <img class="review-img" src="${review.avatar_url}" alt="">
          <h4 class="review-author">${review.author}</h4>
          <p class="review-text">${review.review}</p>
        </li>`;
    })
    .join('');
};
