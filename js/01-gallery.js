import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

console.log(galleryList);

/* Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. */
const arrImages = galleryItems.map((item) => {
  return `<li class="gallery__item"> <a class="gallery__link" href="${item.original}"><img src = ${item.preview} alt=${item.description} data-source="${item.original}" data-lightbox="image" class="gallery__image"></a></li>`;
});

galleryList.insertAdjacentHTML("beforeend", `${arrImages.join("")}`);

/* Реалізація делегування на ul.gallery і отримання url великого зображення. */

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;
  if (target.classList.contains("gallery__image")) {
    target.classList.add("active");

    basicLightbox
      .create(
        `
          <img width="1400" height="900" src="${target.getAttribute(
            "data-source"
          )}">
      `
      )
      .show();
  }
});

// Додайте режим лайтбокса до всіх елементів `img`
