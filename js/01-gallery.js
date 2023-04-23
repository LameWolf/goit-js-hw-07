import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
let instance;

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
});

gallery.insertAdjacentHTML('afterbegin', galleryMarkup.join(''));

const onImageClick = evt => {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  window.addEventListener('keydown', onCloseEscape);

  instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`);

  instance.show();

  //   console.log(evt.target);
};

const onCloseEscape = evt => {
  if (evt.code !== 'Escape') {
    return;
  }
  instance.close();
  //   console.log(evt.code);
  //   console.log(evt.key);
  window.removeEventListener('keydown', onCloseEscape);
};

gallery.addEventListener('click', onImageClick);
