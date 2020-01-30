const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");

const server = new ApolloServer({
  typeDefs,
  //introspection flag fixes 400 response errors on heroku
  introspection: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
