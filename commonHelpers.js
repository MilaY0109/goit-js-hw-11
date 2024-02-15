import{i as d,S as m}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c={key:"42386647-98f841b623ea7dc572c802671",image_type:"photo",orientation:"horizontal",safesearch:!0};async function u(i){c.q=i;const o=new URLSearchParams(c),s=await fetch(`https://pixabay.com/api/?${o}`);if(!s.ok)throw new Error("Failed to fetch images");return s.json()}const f=document.querySelector(".gallery");function h(i){if(i.hits.length===0)d.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});else{const o=i.hits.map(r=>`<li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}" >
            <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" width="360" />
          </a>
          <div class="img-text">
            <div class="img-info">
              <h3>Likes</h3>
              <p>${r.likes}</p>
            </div>
            <div class="img-info">
              <h3>Views</h3>
              <p>${r.views}</p>
            </div>
            <div class="img-info">
              <h3>Comments</h3>
              <p>${r.comments}</p>
            </div>
            <div class="img-info">
              <h3>Downloads</h3>
              <p>${r.downloads}</p>
            </div>
          </div>
        </li>`).join("");f.innerHTML=o,new m(".gallery-link").refresh()}}const a=document.querySelector(".form"),p=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";a.addEventListener("submit",y);function y(i){i.preventDefault(),n.style.display="inline-block",p.innerHTML="";const o=a.elements.search.value.trim();u(o).then(s=>{h(s),n.style.display="none"}).catch(s=>{iziToast.error({message:s.message}),n.style.display="none"}),a.reset()}
//# sourceMappingURL=commonHelpers.js.map
