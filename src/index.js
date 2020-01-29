const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");

const server = new ApolloServer({
  typeDefs
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
