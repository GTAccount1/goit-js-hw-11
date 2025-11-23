import{a as d,i as l,S as m}from"./assets/vendor-B3IAfeER.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(o){return d.create({baseURL:"https://pixabay.com/api/",params:{key:"34647227-856c4916cf69f9df89be744ef",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).get().then(r=>{if(r.data.hits.length===0){l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});return}return r.data.hits}).catch(r=>{throw console.log("error",r),r})}let h=new m(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function p(o){const a=o.map(s=>`<li class="js-item-gallery">
    <a class="js-image-area" href="${s.largeImageURL}">
    <img class="js-image" src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
    </a>
    <ul class="js-descr">
    <li class="js-likes">
    <h2>Likes</h2>
    <p>${s.likes}</p>
    </li>
    <li class="js-views">
    <h2>Views</h2>
    <p>${s.views}</p>
    </li>
    <li class="js-comments">
    <h2>Comments</h2>
    <p>${s.comments}</p>
    </li>
    <li class="js-downloads">
    <h2>Downloads</h2>
    <p>${s.downloads}</p>
    </li>
    </ul>
    </li>`).join(""),r=document.querySelector(".js-gallery");r.innerHTML=a,h.refresh()}function c(){const o=document.querySelector(".js-gallery");o.innerHTML=""}function y(){document.querySelector(".loader").classList.remove("hidden")}function u(){document.querySelector(".loader").classList.add("hidden")}const i={searchForm:document.querySelector(".form"),searchInput:document.querySelector(".form input"),searchBtn:document.querySelector(".form button")};u();c();i.searchForm.addEventListener("submit",o=>{o.preventDefault();const a=i.searchInput.value;if(a.trim()===""){l.error({title:"Error",message:"Input field cann't be empty!"});return}y(),c(),f(a).then(r=>{p(r),i.searchInput.value="",u()})});
//# sourceMappingURL=index.js.map
