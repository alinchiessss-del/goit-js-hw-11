import{a as c,S as d,i}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com/api/";const y="55935426-09f449c6311981838f06ace57";function m(s){return c.get("",{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data.hits)}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=new d(".gallery a");function g(s){const o=s.map(r=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
          </a>
          <div class="gallery-info">
            <p><b>Likes</b><br>${r.likes}</p>
            <p><b>Views</b><br>${r.views}</p>
            <p><b>Comments</b><br>${r.comments}</p>
            <p><b>Downloads</b><br>${r.downloads}</p>
          </div>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",o),p.refresh()}function h(){u.innerHTML=""}function b(){f.style.display="block"}function L(){f.style.display="none"}const l=document.querySelector(".form");l.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();o!==""&&(h(),b(),m(o).then(r=>{if(r.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(r)}).catch(r=>{i.error({message:"Something went wrong. Please try again!"})}).finally(()=>{L(),l.reset()}))});
//# sourceMappingURL=index.js.map
