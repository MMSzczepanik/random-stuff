const { ApolloServer, gql } = require('apollo-server')

const PORT = process.env.PORT || 4000;

const typeDefs = gql`
    type Query {
        firstName: String,
        email: String,
        pets: [String]
    }
`;

const data = {
    firstName: 'Yogi',
    email: 'yogi@ncdc.pl',
    pets: ['Dog, Cat, Bat']
}

const server = new ApolloServer({ typeDefs, rootValue: data })

server.listen({port: PORT}).then(res => res.url)