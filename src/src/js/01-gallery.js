import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

galleryItems.forEach((item) => {
	const navGallery = document.querySelector(".gallery");
	// console.log(navGallery);
	const createGalleryItem = document.createElement("div");
	createGalleryItem.classList.add("gallery__item");

	const createGalleryLink = document.createElement("a");
	createGalleryLink.classList.add("gallery__link");

	const createGalleryImage = document.createElement("img");
	createGalleryImage.classList.add("gallery__image");
	createGalleryImage.setAttribute("src", item.preview);
	createGalleryImage.setAttribute("data-source", item.original);
	createGalleryImage.setAttribute("alt", item.description);

	createGalleryLink.append(createGalleryImage);
	createGalleryItem.append(createGalleryLink);
	navGallery.append(createGalleryItem);
});
