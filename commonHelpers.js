import{S as m,i as c}from"./assets/vendor-f3f87f24.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d={key:"42386647-98f841b623ea7dc572c802671",image_type:"photo",orientation:"horizontal",safesearch:!0};async function u(s){d.q=s;const o=new URLSearchParams(d),e=await fetch(`https://pixabay.com/api/?${o}`);if(!e.ok)throw new Error("Failed to fetch images");return e.json()}const f=document.querySelector(".gallery"),h=new m(".gallery-link");function p(s){const o=s.hits.map(e=>`<li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}" >
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" width="360" />
          </a>
          <div class="img-text">
            <div class="img-info">
              <h3>Likes</h3>
              <p>${e.likes}</p>
            </div>
            <div class="img-info">
              <h3>Views</h3>
              <p>${e.views}</p>
            </div>
            <div class="img-info">
              <h3>Comments</h3>
              <p>${e.comments}</p>
            </div>
            <div class="img-info">
              <h3>Downloads</h3>
              <p>${e.downloads}</p>
            </div>
          </div>
        </li>`).join("");f.innerHTML=o,h.refresh()}const l=document.querySelector(".form"),y=document.querySelector(".gallery"),i=document.querySelector(".loader");i.style.display="none";l.addEventListener("submit",g);function g(s){s.preventDefault(),i.style.display="inline-block",y.innerHTML="";const o=l.elements.search.value.trim();u(o).then(e=>{e.hits.length===0?c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"}):p(e),i.style.display="none"}).catch(e=>{c.error({message:e.message}),i.style.display="none"}),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
