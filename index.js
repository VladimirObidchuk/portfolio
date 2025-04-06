import{A as d,S as a,N as p,K as f,a as w}from"./assets/vendor-DuQTDxAP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();function g(){new d(".accordion-container",{duration:400,collapse:!0,showMultiple:!1});const e=Array.from(document.querySelectorAll('[id^="ac-trigger-"]::after'));console.log(" elements",e),e.forEach(o=>{o.style,console.log(" el.style",o.style)})}new a(".swiper",{modules:[p,f],loop:!1,centeredSlides:!0,keyboard:{enabled:!0,onlyInViewport:!1},simulateTouch:!0,navigation:{nextEl:".custom-next",prevEl:".custom-prev"}});const m=w.create({baseURL:"https://portfolio-js.b.goit.study/api"});async function u(){try{return(await m.get("/reviews")).data}catch(e){throw console.error("Error:",e.status),e}}const l="/portfolio/assets/icon-DHirWNk5.svg",c=document.querySelector(".review-container"),v=()=>{c.insertAdjacentHTML("beforeend",'<p class="not-found-alert"> No information found</p>')},h=e=>{const s=`<div class="swiper mySwiper">
      <ul class="swiper-wrapper">${e.map(n=>`<li class="swiper-slide">
          <img class="review-img" src="${n.avatar_url}" alt="">
          <h4 class="review-author">${n.author}</h4>
          <p class="review-text">${n.review}</p>
        </li>`).join("")}</ul>
    <div class="buttons-div">
      <button class="swiper-button-prev">
        <svg class="review-icon">
        <use href="${l}#icon-arrow-narrow-left"></use>
      </svg>
    </button>
      <button class="swiper-button-next">
        <svg class="review-icon">
        <use href="${l}#icon-arrow-narrow-right"></use>
      </svg>
    </button>
    </div>`;c.insertAdjacentHTML("beforeend",s),new a(".mySwiper",{spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1440:{slidesPerView:4},768:{slidesPerView:2},0:{slidesPerView:1}}})};u().then(e=>{h(e),console.log(e)}).catch(e=>{v();const o=function(){const s=c.getBoundingClientRect();s.top>=0&&s.top<=window.innerHeight&&(console.log("Error:",e.message),window.removeEventListener("scroll",o))};window.addEventListener("scroll",o)});u().then(e=>{console.log(e)}).catch(e=>console.error);g();
//# sourceMappingURL=index.js.map
