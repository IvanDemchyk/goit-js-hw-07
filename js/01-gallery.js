import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<div class="gallery__item">
    <a href="${original}" class="gallery__link">
    <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
    </a>
    </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", sizeChange);

function sizeChange(evt) {
  evt.preventDefault();
  const onImage = evt.target.classList.contains("gallery__image");

  if (!onImage) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="100%" heigth="100%" >`
  );
  instance.show();

  gallery.addEventListener("keydown", closeImg);

  function closeImg(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
}
