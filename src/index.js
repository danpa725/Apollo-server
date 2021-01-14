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
        summary: String!
        description_full: String!
    }

    type Query {
        movies(limit: Int, rating: Float): [Movie]!
        movie(id: Int!): Movie
    }

    # movie가 작동 안함 이유를 찾아보자!
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
