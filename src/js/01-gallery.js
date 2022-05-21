// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemMarkup = createImgCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);

// galleryContainer.addEventListener('click', onGalleryContainerClick);

function createImgCard(img) {
  return img
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__link">
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  gallery.options.captionsData = 'alt';
  gallery.options.fadeSpeed = 250;
});
