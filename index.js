import{a as C,S as x,i as c}from"./assets/vendor-DOgVoBmD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const k="https://pixabay.com/api/",E="21553593-5dff095819739d8fe44d39f5a";function y(s,e){const a=`${k}?key=${E}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${e}`;return C.get(a)}function h(s,e){const a=s.map(({webformatURL:i,largeImageURL:t,tags:r,likes:o,views:_,comments:$,downloads:S})=>`
            <li class="gallery-list-item">
                <a class="gallery_link" href="${t}">
                    <img class="gallery_img" src="${i}"
                        alt="${r}" 
                        title="${r}" />
                    <ul class="statistics-list">
                        <li class="statistics-item">
                            <p class="statistics-item_name">Likes</p>
                            <p class="statistics_result">${o}</p>
                        </li>
                        <li class="statistics-item">
                            <p class="statistics-item_name">Views</p>
                            <p class="statistics_result">${_}</p>
                        </li>
                        <li class="statistics-item">
                            <p class="statistics-item_name">Comments</p>
                            <p class="statistics_result">${$}</p>
                        </li>
                        <li class="statistics-item">
                            <p class="statistics-item_name">Downloads</p>
                            <p class="statistics_result">${S}</p>
                        </li>
                    </ul>
                </a>
            </li>`).join("");e.insertAdjacentHTML("beforeend",a)}const l=document.querySelector(".gallery-list"),d=document.querySelector("form"),p=document.querySelector(".loader");document.querySelector(".load-more-btn-js");const n=document.querySelector(".buttons-list-js");let b=new x(".gallery-list a",{}),m=1,u="",g=0,L=0;//! first function
const H=async s=>{try{if(s.preventDefault(),u=s.target.elements.choiceSearch.value.toLowerCase().trim(),m=1,l.innerHTML="",n.innerHTML="",!u){c.error({message:"Please enter a search word."});return}p.style.display="block";const e=await y(u,m);if(e.data.totalHits===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(e.data.hits,l),L=l.getBoundingClientRect().height,e.data.totalHits>15&&(g=Math.ceil(e.data.totalHits/15),T(g)),b.refresh(),d.reset()}catch(e){c.error({message:e.message,messageColor:"#fff",position:"topRight",color:"#ef4040",maxWidth:"350px"})}finally{p.style.display="none",d.reset()}};function T(s){const e=[];for(let i=1;i<=s;i+=1)e.push(i);const a=e.map(i=>`<button type="button" class="page-button">${i}</button>`).join("");return n.insertAdjacentHTML("beforeend",a)}let f=null;const q=async s=>{try{if(s.target.nodeName!=="BUTTON")return;const e=Number(s.target.textContent);f&&(f.style.backgroundColor=""),s.target.style.backgroundColor===""&&(s.target.style.backgroundColor="#4e75ff"),f=s.target,m=e,p.style.display="block";const a=await y(u,m);l.innerHTML="",n.style.display="none",h(a.data.hits,l),b.refresh(),scrollBy(0,-L)}catch(e){c.error({message:e.message,messageColor:"#fff",position:"topRight",color:"#ef4040",maxWidth:"350px"})}finally{p.style.display="none",n.style.display="flex"}};d.addEventListener("submit",H);n.addEventListener("click",q);
//# sourceMappingURL=index.js.map
