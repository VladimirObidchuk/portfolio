import{A as i,a as l}from"./assets/vendor-Dcjr55zY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();function a(){new i(".accordion-container",{duration:400,collapse:!0,showMultiple:!1});const t=Array.from(document.querySelectorAll('[id^="ac-trigger-"]::after'));console.log(" elements",t),t.forEach(o=>{o.style,console.log(" el.style",o.style)})}const u=l.create({baseURL:"https://portfolio-js.b.goit.study/api"});async function f(){try{return(await u.get("/reviews")).data}catch(t){return console.error("Error:",t.status),t.status}}f().then(t=>{console.log(t)}).catch(t=>console.error);a();
//# sourceMappingURL=index.js.map
