const { createTestClient } = require('apollo-server-testing');

// const { query } = createTestClient(server);

// query({
//   query: materials,
//   variables: { material_id: 1, description: "yatayata", long_description: "yatayata2" }
// });

const { ApolloServer } = require("apollo-server");

const EarthAPI = require("./datasources/earth");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

it('fetches materials', async () => {
  const earthAPI = new EarthAPI();

  // create a test server to test against, using our production typeDefs,
  // resolvers, and dataSources.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({ earthAPI }),
    context: () => ({ material: { material_id: 1, description: "yatayata", long_description: "yatayata2"} }),
  });

  // mock the dataSource's underlying fetch methods
  earthAPI.get = jest.fn(() => [mockGetAllMaterials]);


  // use the test server to create a query function
  const { query } = createTestClient(server);

  // run query against the server and snapshot the output
  const res = await query({ query: materials, material: { material_id: 1, description: "yatayata", long_description: "yatayata2" } });
  expect(res).toMatchSnapshot();
});