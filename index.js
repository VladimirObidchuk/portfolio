import{A as v,S as m,N as w,K as g,a as y}from"./assets/vendor-DuQTDxAP.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function h(){new v(".accordion-container",{duration:400,collapse:!0,showMultiple:!1});const e=Array.from(document.querySelectorAll('[id^="ac-trigger-"]::after'));console.log(" elements",e),e.forEach(r=>{r.style,console.log(" el.style",r.style)})}const n={menuBtn:document.querySelector(".js-menu"),openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),choiceSectionMenu:document.querySelectorAll(".burger-nav-link"),orderBtnLink:document.querySelector(".burger-btn-link"),modal:document.querySelector("[data-modal]")};n.choiceSectionMenu.forEach(e=>{e.addEventListener("click",c)});n.orderBtnLink.addEventListener("click",c);n.openModalBtn.addEventListener("click",c);n.closeModalBtn.addEventListener("click",c);function c(){n.modal.classList.toggle("is-open"),n.modal.classList.contains("is-open")?document.addEventListener("keydown",a):document.removeEventListener("keydown",a)}function a(e){e.key==="Escape"&&(n.modal.classList.remove("is-open"),document.removeEventListener("keydown",a))}const L=document.querySelector(".js-menu"),d=document.querySelector(".nav-list");L.addEventListener("click",b);d.addEventListener("click",E);function b(){d.classList.remove("hidden")}function E(){d.classList.add("hidden")}new m(".swiper",{modules:[w,g],loop:!1,centeredSlides:!0,keyboard:{enabled:!0,onlyInViewport:!1},simulateTouch:!0,navigation:{nextEl:".custom-next",prevEl:".custom-prev"}});const k=y.create({baseURL:"https://portfolio-js.b.goit.study/api"});async function f(){try{return(await k.get("/reviews")).data}catch(e){throw console.error("Error:",e.status),e}}const p="/portfolio/assets/icon-DHirWNk5.svg",u=document.querySelector(".review-container"),S=()=>{u.insertAdjacentHTML("beforeend",'<p class="not-found-alert"> No information found</p>')},M=e=>{const s=`<div class="swiper mySwiper">
      <ul class="swiper-wrapper">${e.map(i=>`<li class="swiper-slide">
          <img class="review-img" src="${i.avatar_url}" alt="">
          <h4 class="review-author">${i.author}</h4>
          <p class="review-text">${i.review}</p>
        </li>`).join("")}</ul>
    <div class="buttons-div">
      <button class="swiper-button-prev">
        <svg class="review-icon">
        <use href="${p}#icon-arrow-narrow-left"></use>
      </svg>
    </button>
      <button class="swiper-button-next">
        <svg class="review-icon">
        <use href="${p}#icon-arrow-narrow-right"></use>
      </svg>
    </button>
    </div>`;u.insertAdjacentHTML("beforeend",s),new m(".mySwiper",{spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1440:{slidesPerView:4},768:{slidesPerView:2},0:{slidesPerView:1}}})};f().then(e=>{M(e),console.log(e)}).catch(e=>{S();const r=function(){const s=u.getBoundingClientRect();s.top>=0&&s.top<=window.innerHeight&&(console.log("Error:",e.message),window.removeEventListener("scroll",r))};window.addEventListener("scroll",r)});f().then(e=>{console.log(e)}).catch(e=>console.error);h();
//# sourceMappingURL=index.js.map
