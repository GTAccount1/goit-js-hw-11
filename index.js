import{a as d,S as m,i as u}from"./assets/vendor-MgecxatS.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(s){return d.create({baseURL:"https://pixabay.com/api/",params:{key:"34647227-856c4916cf69f9df89be744ef",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).get().then(r=>r.data.hits).catch(r=>{throw console.log("API error",r),r})}let p=new m(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function h(s){const a=s.map(o=>`<li class="js-item-gallery">
    <a class="js-image-area" href="${o.largeImageURL}">
    <img class="js-image" src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
    </a>
    <ul class="js-descr">
    <li class="js-likes">
    <h2>Likes</h2>
    <p>${o.likes}</p>
    </li>
    <li class="js-views">
    <h2>Views</h2>
    <p>${o.views}</p>
    </li>
    <li class="js-comments">
    <h2>Comments</h2>
    <p>${o.comments}</p>
    </li>
    <li class="js-downloads">
    <h2>Downloads</h2>
    <p>${o.downloads}</p>
    </li>
    </ul>
    </li>`).join(""),r=document.querySelector(".js-gallery");r.innerHTML=a,p.refresh()}function n(){const s=document.querySelector(".js-gallery");s.innerHTML=""}function y(){document.querySelector(".loader").classList.remove("hidden")}function i(){document.querySelector(".loader").classList.add("hidden")}const l={searchForm:document.querySelector(".form"),searchInput:document.querySelector(".form input")};l.searchForm.addEventListener("submit",s=>{s.preventDefault();const a=l.searchInput.value;if(a.trim()===""){u.error({title:"Error",message:"Input field cann't be empty!"}),l.searchInput.value="",i(),n();return}y(),n(),f(a).then(r=>{if(r.length===0){u.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}),l.searchInput.value="",i(),n();return}h(r),l.searchInput.value="",i()}).catch(r=>{u.error({title:"Error",message:`API error: ${r}`}),n(),l.searchInput.value="",i()})});
//# sourceMappingURL=index.js.map
