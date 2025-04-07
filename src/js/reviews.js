import sprite from '../img/icon.svg';



export const emptyRender = () => {

  return `<p class="not-found-alert"> No information found</p>`

};

export const reviewsRender=(data)=>{

  const cardsMarkup=data.map(review=>{
    return `<li class="swiper-slide swiper-slide-review">
          <img class="review-img" src="${review.avatar_url}" alt="">
          <h4 class="review-author">${review.author}</h4>
          <p class="review-text">${review.review}</p>
        </li>`
  }).join('');


  const fullMarkup=`<div class="swiper swiper-review">
      <ul class="swiper-wrapper swiper-wrapper-review">${cardsMarkup}</ul>
    <div class="buttons-div">
      <button class="swiper-button-prev swiper-button-prev-review">
        <svg class="review-icon">
        <use href="${sprite}#icon-arrow-narrow-left"></use>
      </svg>
    </button>
      <button class="swiper-button-next swiper-button-next-review">
        <svg class="review-icon">
        <use href="${sprite}#icon-arrow-narrow-right"></use>
      </svg>
    </button>
    </div>`

    
  return fullMarkup;

}

