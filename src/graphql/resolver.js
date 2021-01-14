const getMovies = require("../db/db");
const getMovie = require("../db/db");

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies.getMovies(limit, rating),
        movie: (_, { id }) => getMovie.getMovie(id),
    },
};

module.exports = resolvers;
