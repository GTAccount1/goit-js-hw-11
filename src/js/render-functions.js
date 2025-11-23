import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox('.js-gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
   });

export function createGallery(value) {
      const markup = value.map((v) => 
        `<li class="js-item-gallery">
    <a class="js-image-area" href="${v.largeImageURL}">
    <img class="js-image" src="${v.webformatURL}" alt="${v.tags}" loading="lazy" />
    </a>
    <ul class="js-descr">
    <li class="js-likes">
    <h2>Likes</h2>
    <p>${v.likes}</p>
    </li>
    <li class="js-views">
    <h2>Views</h2>
    <p>${v.views}</p>
    </li>
    <li class="js-comments">
    <h2>Comments</h2>
    <p>${v.comments}</p>
    </li>
    <li class="js-downloads">
    <h2>Downloads</h2>
    <p>${v.downloads}</p>
    </li>
    </ul>
    </li>`).join('');
     const gallery = document.querySelector('.js-gallery');
     gallery.innerHTML = markup;
     lightbox.refresh();
    return;
}

export function clearGallery() {
    const gallery = document.querySelector('.js-gallery');
    gallery.innerHTML = "";
};

export function showLoader() { 
    const loader = document.querySelector('.loader');
    loader.classList.remove('hidden');
};

export function hideLoader() {
const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
};

