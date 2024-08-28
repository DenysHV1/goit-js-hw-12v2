//library 1
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//library 2
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//imports from folder JS
import { search } from './js/pixabay-api';
import { renderMarkup } from './js/render-functions';

//const from HTML
const galleryListEl = document.querySelector('.gallery-list');
const formEl = document.querySelector('form');
const loaderEl = document.querySelector('.loader');
const loadMoreBtnEl = document.querySelector('.load-more-btn-js');

const buttonsListEl = document.querySelector('.buttons-list-js');

let lightbox = new SimpleLightbox('.gallery-list a', {});


let page = 1;
let foundValue = '';

let pages = 0;

let galleryListHeight = 0

//! first function
const elementForSearch = async event => {
  //todo
  try {
    //
    event.preventDefault();
    //
    foundValue = event.target.elements.choiceSearch.value
      .toLowerCase()
      .trim();
    //
    page = 1;
	galleryListEl.innerHTML = '';
	buttonsListEl.innerHTML = '';
    //
    if (!foundValue) {
      iziToast.error({ message: 'Please enter a search word.' });
      return;
    }
    //
    loaderEl.style.display = 'block';
    //
    const response = await search(foundValue, page);
    //
    if (response.data.totalHits === 0) {
		// loadMoreBtnEl.classList.add('is-hidden');
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    //
    renderMarkup(response.data.hits, galleryListEl);

	galleryListHeight = galleryListEl.getBoundingClientRect().height;
    //
	if (response.data.totalHits > 15){
		pages = Math.ceil(response.data.totalHits/15);
		generationButtons (pages)
	}
	
    lightbox.refresh();
    //
    formEl.reset();

    //todo
  } catch (err) {
    iziToast.error({
      message: err.message,
	  messageColor: '#fff',
      position: 'topRight',
      color: '#ef4040',
      maxWidth: '350px',
    });

    //todo
  } finally {
    loaderEl.style.display = 'none';
    formEl.reset();
  }

};



function generationButtons (pages){
	const arr = []
for (let i = 1; i <= pages; i+=1){
	arr.push(i)
}
const markupBtn = arr.map(num => `<button type="button" class="page-button">${num}</button>`).join('');
return buttonsListEl.insertAdjacentHTML('beforeend', markupBtn)
}

let globalLastClickColor = '#4e75ff';

const oneClickToPage = async (event) => {
	try{
		if(event.target.nodeName !== "BUTTON"){
			return;
		}
		const myClick = Number(event.target.textContent);
		
		const lastClick = event.target;
		lastClick.style.backgroundColor = globalLastClickColor;

		page = myClick;
		loaderEl.style.display = 'block';
		const response = await search(foundValue, page);
	
		galleryListEl.innerHTML = '';
		buttonsListEl.style.display = 'none'
	
		renderMarkup(response.data.hits, galleryListEl);
		lightbox.refresh();
		scrollBy(0, -(galleryListHeight))
	}catch(err){
    iziToast.error({
      message: err.message,
	  messageColor: '#fff',
      position: 'topRight',
      color: '#ef4040',
      maxWidth: '350px',
    });
	}finally{
		loaderEl.style.display = 'none';
		buttonsListEl.style.display = 'flex'
	}

}

console.log(scrollBy)






formEl.addEventListener('submit', elementForSearch);

buttonsListEl.addEventListener('click', oneClickToPage);


