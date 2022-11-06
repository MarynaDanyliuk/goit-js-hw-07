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

let ImgActive = null;

const refs = {
  list: document.querySelector(`.gallery`),
};

console.log(refs.list);

refs.list.insertAdjacentHTML(`beforeend`, getListGallery.join(``));

console.log(galleryItems);

refs.list.addEventListener(`click`, onGalleryClick);

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

  ImgActive = nextImgActive.dataset.source;
  console.log(ImgActive);

  const SelectedImgs = new Set();
  SelectedImgs.add(ImgActive);
  console.log(SelectedImgs);

  // console.log(ImgActive.classList.contains(`img--active`));

  // ImgActive.classList.toggle(`.img--active`);

  const instance = basicLightbox.create(
    `
    <img src="${ImgActive}" width="800" height="600">
`
  );

  instance.show();

  function onEscapeClick(event) {
    if (event.code === "Escape") {
      instance.close();
    }

    refs.list.removeEventListener(`keydown`, onEscapeClick);
    console.log(`снимаю слушателя`);
  }

  refs.list.addEventListener(`keydown`, onEscapeClick);
  console.log(`ставлю слушателя`);
}

// refs.list.addEventListener(`keydown`, (event) => {
// if (event.code === "Escape") {
//   instance.close();
// }

// _______________________

// refs.list.removeEventListener(`click`, onGalleryClick);
// console.log(`снимаю слушателя`);
