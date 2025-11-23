import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery } from './js/render-functions.js';
import { clearGallery } from './js/render-functions.js';
import { showLoader } from './js/render-functions.js';
import { hideLoader } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    searchForm: document.querySelector('.form'),
    searchInput: document.querySelector('.form input'),
   
}

refs.searchForm.addEventListener("submit", e => {
    e.preventDefault();

    const query = refs.searchInput.value;

    if (query.trim() === "") {
        iziToast.error({
            title: 'Error',
            message: "Input field cann't be empty!"
        });
        refs.searchInput.value = '';
        hideLoader();
        clearGallery();
        return;
    };

    showLoader();
    clearGallery();

    getImagesByQuery(query)
        .then(hits => {
            if (hits.length === 0) {
            iziToast.info({
            title: 'Info',
            message: "Sorry, there are no images matching your search query. Please try again!"
            });
            refs.searchInput.value = '';
            hideLoader();
            clearGallery();
            return;
            } 
            createGallery(hits);
            refs.searchInput.value = '';
            hideLoader();
        })
        .catch(error => {
            iziToast.error({
            title: 'Error',
            message: `API error: ${error}`
            });
            clearGallery();
            refs.searchInput.value = '';
            hideLoader();
        });
});

 

