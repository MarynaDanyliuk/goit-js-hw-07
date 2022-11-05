import { galleryItems } from "./gallery-items.js";
// Change code below this line

const getGalleryItem = (
  galleryItems
) => `<a class="gallery__item" href="${galleryItems.original}">
<img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}" />
</a>`;

const getListGallery = galleryItems.map((item) => getGalleryItem(item));

console.log(getListGallery);

const refs = {
  list: document.querySelector(`.gallery`),
};

console.log(refs.list);

refs.list.insertAdjacentHTML(`beforeend`, getListGallery.join(``));

console.log(galleryItems);

refs.list.addEventListener(`click`, onGalleryClick);

let ImgActive = null;

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== `IMG`) {
    return;
  }

  const CurrentActiveImg = document.querySelector(`.img--active`);
  console.log(CurrentActiveImg);

  if (CurrentActiveImg) {
    event.target.classList.remove(`.img--active`);
  }

  const nextImgActive = event.target;
  nextImgActive.classList.add(`.img--active`);
  console.log(event.target);

  ImgActive = nextImgActive.getAttribute(`src`);
  console.log(ImgActive);

  var lightbox = new SimpleLightbox(".gallery a", {});

  //   var lightbox = $(".gallery a").simpleLightbox({});

  //   const instance = basicLightbox.create(`
  //       <img src="${ImgActive}" width="800" height="600">
  //   `);

  //   instance.show();

  //   refs.list.addEventListener(`keydown`, (event) => {
  //     if (event.code === "Escape") {
  //       instance.close();
  //     }
  //   });
}

// _______Шаблон______

// <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>;
