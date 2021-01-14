const db = require("../db/db");

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => db.getMovies(limit, rating),
        movie: (_, { id }) => db.getMovie(id),
    },
};

module.exports = resolvers;
