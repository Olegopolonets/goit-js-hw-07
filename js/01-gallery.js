import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

console.log(galleryList);

/* Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. */
const arrImages = galleryItems.map((item) => {
  return `<li class="gallery__item"> <a class="gallery__link" href="${item.original}"><img src = "${item.preview}" alt="${item.description}" data-source="${item.original}" data-lightbox="image" class="gallery__image"></a></li>`;
});

galleryList.insertAdjacentHTML("beforeend", `${arrImages.join("")}`);

/* Реалізація делегування на ul.gallery і отримання url великого зображення. */

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;
  let baseLBox = null;
  if (target.classList.contains("gallery__image")) {
    basicLightbox
      .create(
        `
          <img class='img-generate-big' width="1400" height="900" src="${target.getAttribute(
            "data-source"
          )}">
      `
      )
      .show();
    baseLBox = document.querySelector(".basicLightbox");
    console.log(baseLBox);
  }
  document.addEventListener("keydown", (event) => {
    console.log(baseLBox);
    if (event.key === "Escape") {
      baseLBox.classList.remove("basicLightbox");
    }
  });
});

/* 
import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);
container.insertAdjacentHTML('beforeend', markup);
container.addEventListener('click', onImgClick);

// rendered items
function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

const instance = basicLightbox.create(
    `<img width="1280" height="auto" src="">`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );
  
  function onImgClick(e) {
    e.preventDefault();
    const datasetSource = e.target.dataset.source;
    if (!datasetSource) return;
    instance.element().querySelector('img').src = datasetSource;
    instance.show();
  }
  
  function onEscKeyPress(e) {
    if (e.code !== 'Escape') return;
    instance.close();
  }
*/
