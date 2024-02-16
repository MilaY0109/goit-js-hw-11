import { fetchImage } from './js/pixabay-api.js';
import { renderGallery } from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
loader.style.display = 'none';

new SimpleLightbox('.gallery-link');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  loader.style.display = 'inline-block';
  gallery.innerHTML = '';
  const inputText = form.elements.search.value.trim();
  fetchImage(inputText)
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#FAFAFB',
          backgroundColor: '#EF4040',
          position: 'topRight',
        });
      } else {
        renderGallery(images);
      }
      loader.style.display = 'none';
    })
    .catch(error => {
      iziToast.error({ message: error.message });
      loader.style.display = 'none';
    });
  form.reset();
}
