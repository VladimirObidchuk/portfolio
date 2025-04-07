import{A as d,S as a,N as u,K as m,a as p}from"./assets/vendor-CJCjINDu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const n={menuBtn:document.querySelector(".js-menu"),listLink:document.querySelector(".nav-list"),menuBtn:document.querySelector(".js-menu"),openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),choiceSectionMenu:document.querySelectorAll(".burger-nav-link"),orderBtnLink:document.querySelector(".burger-btn-link"),modal:document.querySelector("[data-modal]"),reviewContainer:document.querySelector(".review-wrapper"),form:document.getElementById("work-contactform"),emailInput:document.getElementById("email"),modalBackdrop:document.getElementById("modalBackdrop"),modalCloseBtn:document.getElementById("modalCloseBtn"),comment:document.getElementById("comment")};function w(){new d(".faq-accordion",{duration:400,collapse:!0,showMultiple:!1})}function f(){new d(".js-accordion",{duration:300,showMultiple:!1,onOpen:t=>{const r=t.querySelector(".ac-trigger");r&&r.classList.add("rotate-180")},onClose:t=>{const r=t.querySelector(".ac-trigger");r&&r.classList.remove("rotate-180")}});const e=new a(".swiper",{direction:"horizontal",loop:!0,spaceBetween:0,navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,a11y:{enabled:!0},breakpoints:{0:{slidesPerView:1},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});document.querySelector(".swiper-button-next").addEventListener("click",function(){e.slideNext()})}n.menuBtn.addEventListener("click",y);n.listLink.addEventListener("click",g);function y(){n.listLink.classList.toggle("hidden")}function g(){n.listLink.classList.add("hidden")}new a(".project-swiper",{modules:[u,m],loop:!0,centeredSlides:!0,slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0,onlyInViewport:!1},simulateTouch:!0,navigation:{nextEl:".custom-next",prevEl:".custom-prev"}});const v=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;function h(){n.modalBackdrop.classList.remove("hidden"),document.body.style.overflow="hidden"}function c(){n.modalBackdrop.classList.add("hidden"),document.body.style.overflow=""}n.modalCloseBtn.addEventListener("click",c);n.modalBackdrop.addEventListener("click",e=>{e.target===n.modalBackdrop&&c()});document.addEventListener("keydown",e=>{e.key==="Escape"&&c()});n.form.addEventListener("submit",async e=>{e.preventDefault();const t=n.emailInput.value.trim();console.log(" email",t);const r=n.comment.value.trim();if(console.log(" comment",r),!v.test(t)){alert("Invalid email, try again");return}try{if(!(await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,comment:r})})).ok)throw new Error("Failed request");h(),n.form.reset()}catch{alert("Something went wrong. Please check your info and try again.")}});const L=p.create({baseURL:"https://portfolio-js.b.goit.study/api"});async function b(){try{return(await L.get("/reviews")).data}catch(e){throw console.error("Error:",e.status),e}}const k=()=>{reviewContainer.insertAdjacentHTML("beforeend",'<p class="not-found-alert"> No information found</p>')},B=e=>e.map(t=>`<li class="swiper-slide swiper-slide-review">
          <img class="review-img" src="${t.avatar_url}" alt="">
          <h4 class="review-author">${t.author}</h4>
          <p class="review-text">${t.review}</p>
        </li>`).join("");b().then(e=>{n.reviewContainer.insertAdjacentHTML("beforeend",B(e)),console.log(e),new a(".review-swiper",{spaceBetween:16,autoHeight:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1440:{slidesPerView:4},768:{slidesPerView:2},0:{slidesPerView:1}}})}).catch(e=>{k();const t=function(){const r=reviewContainer.getBoundingClientRect();r.top>=0&&r.top<=window.innerHeight&&(console.log("Error:",e.message),window.removeEventListener("scroll",t))};window.addEventListener("scroll",t)});f();w();
//# sourceMappingURL=index.js.map
