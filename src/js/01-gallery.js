// Add imports above this line
import { galleryItems } from './gallery-items';
// Описан в документации
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

const listItem = galleryItems.map(item => {
  return `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>`;
});

galleryRef.insertAdjacentHTML('afterbegin', listItem.join(' '));

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
