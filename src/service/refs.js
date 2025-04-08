// Це збірка всіх контейнерів які взаємодіють з js.
//  Як потрбно додавати: це через ID productList: document.getElementById('allProducts'),
//  Це через class productList: document.querySelector('.allProducts'),
const refs = {
  body: document.body,
  //------------------header------------//
  listLink: document.querySelector('.nav-list'),
  menuBtn: document.querySelector('.js-menu'),
  //------------modal mobile-------------------//
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  choiceSectionMenu: document.querySelectorAll('.burger-nav-link'),
  orderBtnLink: document.querySelector('.burger-btn-link'),
  modal: document.querySelector('[data-modal]'),

  //----------------about--------------------//
  firstAccItem: document.getElementById('ac-0'),
  //-----------reviews------------//
  reviewContainer: document.querySelector('.review-container'),
  //------------work----------------------//
  form: document.getElementById('work-contactform'),
  emailInput: document.getElementById('email'),
  modalBackdrop: document.getElementById('modalBackdrop'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  comment: document.getElementById('comment'),
};
export default refs;
