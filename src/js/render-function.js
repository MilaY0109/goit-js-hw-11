const gallery = document.querySelector('.gallery');

export function renderGallery(images) {
  const item = images.hits
    .map(
      image => `<li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}" >
            <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" width="360" />
          </a>
          <div class="img-text">
            <div class="img-info">
              <h3>Likes</h3>
              <p>${image.likes}</p>
            </div>
            <div class="img-info">
              <h3>Views</h3>
              <p>${image.views}</p>
            </div>
            <div class="img-info">
              <h3>Comments</h3>
              <p>${image.comments}</p>
            </div>
            <div class="img-info">
              <h3>Downloads</h3>
              <p>${image.downloads}</p>
            </div>
          </div>
        </li>`
    )
    .join('');

  gallery.innerHTML = item;
}
