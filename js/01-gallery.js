import { galleryItems } from "./gallery-items.js";
// Change code below this line

const navGallery = document.querySelector(".gallery");
const itemsMarkup = createGalleryItem(galleryItems);

navGallery.insertAdjacentHTML("beforeend", itemsMarkup);

function createGalleryItem(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `
			<div class="gallery__item">
			<a class="gallery__link" href="${original}">
			<img
				class="gallery__image"
				src="${preview}"
				data-source="${original}"
				alt="${description}"
				/>
				</a>
				</div>
	`;
		})
		.join("");
}

navGallery.addEventListener("click", onImageClick);

function onImageClick(evt) {
	evt.preventDefault();
	if (evt.target.nodeName !== "IMG") {
		return;
	}
	const originalImage = evt.target.getAttribute("data-source");

	const instance = basicLightbox.create(`
    <img src="${originalImage}" width="800" height="600">
`);

	instance.show();
}
