import{a as d,S as p,i as u}from"./assets/vendor-MgecxatS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(s){return d.create({baseURL:"https://pixabay.com/api/",params:{key:"34647227-856c4916cf69f9df89be744ef",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).get().then(r=>r.data.hits).catch(r=>{throw console.log("API error",r),r})}let m=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function y(s){const o=s.map(a=>`<li class="js-gallery-item">
    <a class="js-image-link" href="${a.largeImageURL}">
    <img class="js-image" src="${a.webformatURL}" alt="${a.tags}" loading="lazy" />
    </a>
    <ul class="js-descr">
    <li class="js-info">
    <p class="js-title" >Likes</p>
    <p class="js-value" >${a.likes}</p>
    </li>
    <li class="js-info">
    <p class="js-title" >Views</p>
    <p class="js-value" >${a.views}</p>
    </li>
    <li class="js-info">
    <p class="js-title" >Comments</p>
    <p class="js-value" >${a.comments}</p>
    </li>
    <li class="js-info">
    <p class="js-title" >Downloads</p>
    <p class="js-value" >${a.downloads}</p>
    </li>
    </ul>
    </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",o),m.refresh()}function i(){const s=document.querySelector(".gallery");s.innerHTML=""}function g(){document.querySelector(".loader").classList.remove("hidden")}function n(){document.querySelector(".loader").classList.add("hidden")}const l={searchForm:document.querySelector(".form"),searchInput:document.querySelector(".form input")};l.searchForm.addEventListener("submit",s=>{s.preventDefault();const o=l.searchInput.value;if(o.trim()===""){u.error({title:"Error",message:"Input field cann't be empty!"}),l.searchInput.value="",n(),i();return}g(),i(),f(o).then(r=>{if(r.length===0){u.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}),l.searchInput.value="",n(),i();return}y(r),l.searchInput.value="",n()}).catch(r=>{u.error({title:"Error",message:`API error: ${r}`}),i(),l.searchInput.value="",n()})});
//# sourceMappingURL=index.js.map
