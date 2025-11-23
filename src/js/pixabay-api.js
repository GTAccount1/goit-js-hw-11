import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


export function getImagesByQuery(query) {
    const server = axios.create({
        baseURL: 'https://pixabay.com/api/',
        params: {
            key: '34647227-856c4916cf69f9df89be744ef',
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
        },
       });
    return server.get().then(response => {
        if (response.data.hits.length === 0) {
            iziToast.info({
            title: 'Info',
            message: "Sorry, there are no images matching your search query. Please try again!"
            });
            return; 
        } 
        return response.data.hits;
}).catch(error => {
    console.log("error", error);
    throw error; 
    });



};