const axios = require("axios");

const API_URL = "https://yts.mx/api/v2/list_movies.json";

const getMovies = async (limit, rating) => {
    let REQUEST_URL = API_URL;

    if (limit > 0) {
        REQUEST_URL += `?limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }

    const result = await axios.get(REQUEST_URL);

    const { movies } = result.data.data;

    return movies;
};

module.exports = getMovies;
