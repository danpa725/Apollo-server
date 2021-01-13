const { ApolloServer, gql } = require("apollo-server");

const resolvers = require("./graphql/resolver");

const typeDefs = gql`
    type Movie {
        id: Int!
        title: String!
        rating: Float!
        summary: String!
        language: String!
        medium_cover_image: String
        description_intro: String
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
