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
    searchBtn: document.querySelector('.form button'),

};
hideLoader();
clearGallery();

refs.searchForm.addEventListener("submit", e => {
    e.preventDefault();
    const query = refs.searchInput.value;
    if (query.trim() === "") {
        iziToast.error({
            title: 'Error',
            message: "Input field cann't be empty!"
        });
        return;
    };
    showLoader();
    clearGallery();
    getImagesByQuery(query)
        .then(hits => {
            createGallery(hits);
            refs.searchInput.value = '';
            hideLoader();
        });
});

 

