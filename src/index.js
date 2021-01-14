const { ApolloServer, gql } = require("apollo-server");

const resolvers = require("./graphql/resolver");

const typeDefs = gql`
    type Movie {
        id: Int!
        title: String!
        rating: Float!
        runtime: Int!
        language: String!
        medium_cover_image: String
        large_cover_image: String
        background_image: String
        summary: String!
        description_full: String!
    }

    type Query {
        movies(limit: Int, rating: Float): [Movie]!
        movie(id: Int!): Movie
    }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
