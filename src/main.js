import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions";

const form = document.querySelector(".form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const searchQuery =
    event.currentTarget.elements["search-text"].value.trim();

  if (searchQuery === "") {
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchQuery)
  .then(images => {
    if (images.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
      });

      return;
    }

    createGallery(images);
  })
  .catch(error => {
    iziToast.error({
      message: "Something went wrong. Please try again!",
    });
  })
  .finally(() => {
    hideLoader();
    form.reset();
  });