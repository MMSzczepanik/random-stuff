const { ApolloServer, gql } = require("apollo-server");
const PORT = process.env.PORT || 4000;

const typeDefs = gql`
  type Query {
    greeting: String
    interestingUrls: [String]
    randomDiceThrow: Int
    pi: Float
    isTodayFriday: Boolean
    randomCoinTossesUntilTrue: [Boolean]
    e: Float
  }
`;

const rootValue = () => {
  const today = new Date();
  const getRandomDiceThrow = (sides = 6) => Math.ceil(Math.random() * sides);
  const randomCoinToss = () => Math.random() >= 0.5;
  const getRandomCoinTossesUntilTrue = () => {
    const result = [];
    do {
      result.push(randomCoinToss());
    } while (!result[result.length - 1]);
    return result;
  };
  return {
    greeting: "Hello world!",
    interestingUrls: ["https://kursreacta.pl", "https://64bites.com"],
    randomDiceThrow: getRandomDiceThrow(),
    pi: Math.PI,
    isTodayFriday: today.getDay() === 5,
    randomCoinTossesUntilTrue: getRandomCoinTossesUntilTrue(),
    e: Math.E
  };
};

const server = new ApolloServer({
  typeDefs,
  rootValue,
  introspection: true,
  playground: true
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
