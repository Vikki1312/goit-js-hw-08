// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const markup = createImgCards(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', markup);

galleryEl.style.listStyle = 'none';

function createImgCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join('');
}
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
