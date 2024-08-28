import{a as C,S,i as c}from"./assets/vendor-DOgVoBmD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const x="https://pixabay.com/api/",k="21553593-5dff095819739d8fe44d39f5a";function y(r,e){const a=`${x}?key=${k}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${e}`;return C.get(a)}function g(r,e){const a=r.map(({webformatURL:i,largeImageURL:t,tags:s,likes:o,views:L,comments:_,downloads:$})=>`
            <li class="gallery-list-item">
                <a class="gallery_link" href="${t}">
                    <img class="gallery_img" src="${i}"
                        alt="${s}" 
                        title="${s}" />
                    <ul class="statistics-list">
                        <li class="statistics-item">
                            <p class="statistics-item_name">Likes</p>
                            <p class="statistics_result">${o}</p>
                        </li>
                        <li class="statistics-item">
                            <p class="statistics-item_name">Views</p>
                            <p class="statistics_result">${L}</p>
                        </li>
                        <li class="statistics-item">
                            <p class="statistics-item_name">Comments</p>
                            <p class="statistics_result">${_}</p>
                        </li>
                        <li class="statistics-item">
                            <p class="statistics-item_name">Downloads</p>
                            <p class="statistics_result">${$}</p>
                        </li>
                    </ul>
                </a>
            </li>`).join("");e.insertAdjacentHTML("beforeend",a)}const l=document.querySelector(".gallery-list"),f=document.querySelector("form"),p=document.querySelector(".loader");document.querySelector(".load-more-btn-js");const n=document.querySelector(".buttons-list-js");let h=new S(".gallery-list a",{}),m=1,u="",d=0,b=0;//! first function
const E=async r=>{try{if(r.preventDefault(),u=r.target.elements.choiceSearch.value.toLowerCase().trim(),m=1,l.innerHTML="",n.innerHTML="",!u){c.error({message:"Please enter a search word."});return}p.style.display="block";const e=await y(u,m);if(e.data.totalHits===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(e.data.hits,l),b=l.getBoundingClientRect().height,e.data.totalHits>15&&(d=Math.ceil(e.data.totalHits/15),H(d)),h.refresh(),f.reset()}catch(e){c.error({message:e.message,messageColor:"#fff",position:"topRight",color:"#ef4040",maxWidth:"350px"})}finally{p.style.display="none",f.reset()}};function H(r){const e=[];for(let i=1;i<=r;i+=1)e.push(i);const a=e.map(i=>`<button type="button" class="page-button">${i}</button>`).join("");return n.insertAdjacentHTML("beforeend",a)}let T="#4e75ff";const q=async r=>{try{if(r.target.nodeName!=="BUTTON")return;const e=Number(r.target.textContent),a=r.target;a.style.backgroundColor=T,m=e,p.style.display="block";const i=await y(u,m);l.innerHTML="",n.style.display="none",g(i.data.hits,l),h.refresh(),scrollBy(0,-b)}catch(e){c.error({message:e.message,messageColor:"#fff",position:"topRight",color:"#ef4040",maxWidth:"350px"})}finally{p.style.display="none",n.style.display="flex"}};console.log(scrollBy);f.addEventListener("submit",E);n.addEventListener("click",q);
//# sourceMappingURL=index.js.map
