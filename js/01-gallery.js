import { galleryItems } from "./gallery-items.js";
// Change code below this line

const getGalleryItem = (galleryItems) => `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItems.original}">
    <img
      class="gallery__image"
      src="${galleryItems.preview}"
      data-source="${galleryItems.original}"
      alt="${galleryItems.description}"
    />
  </a>
</div>`;

const getListGallery = galleryItems.map((item) => getGalleryItem(item));

console.log(getListGallery);

const refs = {
  list: document.querySelector(`.gallery`),
};

console.log(refs.list);

refs.list.insertAdjacentHTML(`beforeend`, getListGallery.join(``));

console.log(galleryItems);

// _____Шаблон елемента галереї

{
  /* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>; */
}
