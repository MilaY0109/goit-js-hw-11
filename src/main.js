import { fetchImage } from './js/pixabay-api.js';
import { renderGallery } from './js/render-function.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
loader.style.display = 'none';

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  loader.style.display = 'inline-block';
  gallery.innerHTML = '';
  const inputText = form.elements.search.value.trim();
  fetchImage(inputText)
    .then(images => {
      renderGallery(images);
      loader.style.display = 'none';
    })
    .catch(error => {
      iziToast.error({ message: error.message });
      loader.style.display = 'none';
    });
  form.reset();
}
