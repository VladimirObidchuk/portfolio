import{A as g,S as u,a as E,i as w}from"./assets/vendor-BNe4waHj.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const e={body:document.body,listLink:document.querySelector(".nav-list"),menuBtn:document.querySelector(".js-menu"),openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),choiceSectionMenu:document.querySelectorAll(".burger-nav-link"),orderBtnLink:document.querySelector(".burger-btn-link"),modal:document.querySelector("[data-modal]"),firstAccItem:document.getElementById("ac-0"),reviewContainer:document.querySelector(".review-container"),form:document.getElementById("work-contactform"),emailInput:document.getElementById("email"),modalBackdrop:document.getElementById("modalBackdrop"),modalCloseBtn:document.getElementById("modalCloseBtn"),comment:document.getElementById("comment"),emailMsg:document.getElementById("email-message"),commentMsg:document.getElementById("comment-message")};function h(){new g(".faq-accordion",{duration:400,collapse:!0,showMultiple:!1})}function b(){new g(".js-accordion",{duration:300,showMultiple:!1,onOpen:n=>{const i=n.querySelector(".ac-trigger");i&&i.classList.add("rotate-180")},onClose:n=>{const i=n.querySelector(".ac-trigger");i&&i.classList.remove("rotate-180")}}).open(0),new u(".about-swiper",{loop:!0,spaceBetween:0,centeredSlides:!1,navigation:{nextEl:".about-swiper-btn"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3,spaceBetween:1},375:{slidesPerView:2},0:{slidesPerView:1,spaceBetween:1}}})}e.orderBtnLink.addEventListener("click",c);e.openModalBtn.addEventListener("click",c);e.closeModalBtn.addEventListener("click",c);e.choiceSectionMenu.forEach(t=>{t.addEventListener("click",c)});function c(){e.modal.classList.toggle("is-open"),e.body.classList.toggle("no-scroll"),e.modal.classList.contains("is-open")?document.addEventListener("keydown",m):document.removeEventListener("keydown",m)}function m(t){t.key==="Escape"&&(e.modal.classList.remove("is-open"),document.removeEventListener("keydown",m))}e.menuBtn.addEventListener("click",k);function k(){e.listLink.classList.toggle("hidden"),e.listLink.classList.contains("hidden")?e.body.removeEventListener("click",a):e.body.addEventListener("click",a)}function a(t){(!e.listLink.contains(t.target)&&!e.menuBtn.contains(t.target)||t.target.tagName==="A")&&(e.listLink.classList.add("hidden"),e.body.removeEventListener("click",a))}function B(){new u(".project-swiper",{loop:!1,centeredSlides:!0,slidesPerView:1,slidesPerGroup:1,autoHeight:!0,mousewheel:!0,keyboard:{enabled:!0,onlyInViewport:!0},simulateTouch:!0,navigation:{nextEl:".custom-next",prevEl:".custom-prev"}})}const f=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;function M(){e.modalBackdrop.classList.remove("hidden"),document.body.style.overflow="hidden",l(),document.addEventListener("keydown",L),console.log("Email input event listener added")}function p(){e.modalBackdrop.classList.add("hidden"),document.body.style.overflow="",l(),document.removeEventListener("keydown",L),console.log("Email input event listener remove")}function L(t){t.key==="Escape"&&p()}e.modalCloseBtn.addEventListener("click",p);e.modalBackdrop.addEventListener("click",t=>{t.target===e.modalBackdrop&&p()});function I(){const t=e.emailInput.value.trim(),n=document.getElementById("email-message");n.classList.remove("success-message","error-message"),e.emailInput.classList.remove("valid-input","invalid-input"),f.test(t)?(n.textContent="Success!",n.classList.add("success-message"),e.emailInput.classList.add("valid-input"),e.emailInput.classList.remove("invalid-input")):(n.textContent="Invalid email, try again",n.classList.add("error-message"),e.emailInput.classList.add("invalid-input"),e.emailInput.classList.remove("valid-input"))}function C(){const t=e.comment.value.trim(),n=document.getElementById("comment-message");n.classList.remove("success-message","error-message"),e.comment.classList.remove("valid-input","invalid-input"),t===""?(n.textContent="Comment cannot be empty",n.classList.add("error-message"),e.comment.classList.add("invalid-input"),e.comment.classList.remove("valid-input")):(n.textContent="Success!",n.classList.add("success-message"),e.comment.classList.add("valid-input"),e.comment.classList.remove("invalid-input"))}function l(){e.emailInput.addEventListener("input",I),e.comment.addEventListener("input",C)}l();function x(){const t=e.emailInput.value.trim(),n=e.comment.value.trim(),i=e.emailMsg,o=e.commentMsg;i.textContent="",o.textContent="",i.className="input-message",o.className="input-message",e.emailInput.classList.remove("valid-input","invalid-input"),e.comment.classList.remove("valid-input","invalid-input");let s=!1;return f.test(t)?(i.textContent="Success!",i.classList.add("success-message"),e.emailInput.classList.add("valid-input")):(i.textContent="Invalid email, try again",i.classList.add("error-message"),e.emailInput.classList.add("invalid-input"),s=!0),n===""?(o.textContent="Comment cannot be empty",o.classList.add("error-message"),e.comment.classList.add("invalid-input"),s=!0):(o.textContent="Success!",o.classList.add("success-message"),e.comment.classList.add("valid-input")),s?null:(M(),{email:t,comment:n})}const y=E.create({baseURL:"https://portfolio-js.b.goit.study/api"});async function S(){try{return(await y.get("/reviews")).data}catch(t){throw console.error("Error:",t.status),t}}async function P(t){try{return(await y.post("/requests",{email:t.email,comment:t.comment})).data}catch(n){throw new Error(n)}}const v="/portfolio/assets/icon-B3VCufUv.svg",q=()=>'<p class="not-found-alert"> No information found</p>',V=t=>`<div class="swiper swiper-review">
      <ul class="swiper-wrapper swiper-wrapper-review">${t.map(o=>`<li class="swiper-slide swiper-slide-review">
          <img class="review-img" src="${o.avatar_url}" alt="${o.author}"  width="48" height="48">
          <h4 class="review-author">${o.author}</h4>
          <p class="review-text">${o.review}</p>
        </li>`).join("")}</ul>
    <ul class="buttons-div">
      <li class="swiper-button-prev swiper-button-prev-review">
        <svg class="review-icon">
        <use href="${v}#icon-arrow-narrow-left"></use>
      </svg>
    </li>
      <li class="swiper-button-next swiper-button-next-review">
        <svg class="review-icon">
        <use href="${v}#icon-arrow-narrow-right"></use>
      </svg>
    </li>
    </ul><style>
#review .swiper-button-prev:after, .swiper-button-next:after {
  content: none;
}
</style>`;S().then(t=>{e.reviewContainer.insertAdjacentHTML("beforeend",V(t)),new u(".swiper-review",{spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:!0,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{1440:{slidesPerView:4},768:{slidesPerView:2},0:{slidesPerView:1}}})}).catch(t=>{e.reviewContainer.insertAdjacentHTML("beforeend",q());const n=function(){const i=e.reviewContainer.getBoundingClientRect();if(!e.reviewContainer){console.error("reviewContainer не знайдено");return}i.top>=0&&i.top<=window.innerHeight&&(console.log("Error:",t.message),w.error({position:"bottomRight",timeout:4e3,title:"Error",message:`${t.message}`}),window.removeEventListener("scroll",n))};window.addEventListener("scroll",n)});async function A(t){t.preventDefault();const n=x();if(!n)return;const{email:i,comment:o}=n;try{const r=await P({email:i,comment:o});e.form.reset(),e.emailMsg.textContent="",e.commentMsg.textContent="",e.emailMsg.className="input-message",e.commentMsg.className="input-message",e.emailInput.classList.remove("valid-input","invalid-input"),e.comment.classList.remove("valid-input","invalid-input"),l()}catch(s){w.error({position:"bottomRight",timeout:4e3,title:"Error",message:`${s.message}`})}}e.form.addEventListener("submit",A);b();B();h();
//# sourceMappingURL=index.js.map
