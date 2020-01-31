require("dotenv").config();
const { ApolloServer } = require("apollo-server");

const EarthAPI = require("./datasources/earth");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    earthAPI: new EarthAPI()
  }),
  //introspection flag fixes 400 response errors on heroku
  introspection: true,
  //to mock our typeDefs for testing
  mocks: true,
  //add console error logs
  formatError: err => {
    console.log(err.stack);
    return err;
  }

});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
