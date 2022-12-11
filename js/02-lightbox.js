import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a href="${original}" class="gallery__link">
    <img class="gallery__image" src="${preview}" alt="${description}" ></a>
    `
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

  const lightBox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
