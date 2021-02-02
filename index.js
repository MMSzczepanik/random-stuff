const { ApolloServer, gql } = require('apollo-server')

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

server.listen({port: 4000}).then(res => res.url)