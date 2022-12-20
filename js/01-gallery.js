import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery')
gallery.addEventListener('click', onclick)

const markup = galleryItems.map(({preview, original, description }) =>
`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join("")

gallery.innerHTML = markup

function onclick(evt) {
    evt.preventDefault()
    // console.dir(evt.target)

    if(evt.target.className === "gallery" ){
    return
    }

    const instance = basicLightbox.create(`
      <img
      src="${evt.target.dataset.source}"
     >
    `)
    if (!instance.show()) {
       return
    }

    document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
        instance.close();
  }
})

}

// console.log(basicLightbox)

// const instance = basicLightbox.create(`<div class="gallery__item">
// //   <a class="gallery__link" href="${original}">
// //     <img
// //       class="gallery__image"
// //       src="${preview}"
// //       data-source="${original}"
// //       alt="${description}"
// //     />
// //   </a>
// // </div>`).join("")

// instance.show()

