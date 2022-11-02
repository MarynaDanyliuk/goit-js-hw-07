import { galleryItems } from "./gallery-items.js";
// Change code below this line

const getGalleryItem = (galleryItems) => `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>`;

const getListGalleryItems = galleryItems.map((item) => getGalleryItem(item));

console.log(getGalleryItem(getListGalleryItems));

// console.log(getGalleryItem(galleryItems));

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
