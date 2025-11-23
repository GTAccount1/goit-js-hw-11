import axios from 'axios';


        
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
    return server.get()
        .then(response => response.data.hits)
        .catch(error => {
            console.log("API error", error);
            throw error;
        });
};