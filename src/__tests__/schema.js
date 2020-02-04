
const { ApolloServer } = require("apollo-server");
const gql = require('graphql-tag');
const typeDefs = require("../schema");
const {createTestClient} = require('apollo-server-testing');

const mockResponses = require("./mock_data/mockSchemaResponses")

const mockClient = gql`
query {
        materials{
            material_id
            description
            material_id
            long_description
            notes
            dropoff
            pickup
            bin_trash
            bin_recycle
            bin_compost
        }
  }
`

describe('testing typeDefs', () => {

  it('queries mock server using typeDefs and returns variables asked for - only material_ids', async () => {
    let mockDatasource =  mockResponses
    const mockResolvers = {
        Query:{
            materials: async () => {
                return mockDatasource.mockMaterials
            }
        }
    };
    const mockServer = new ApolloServer({
      //TESTING typedefs
        typeDefs,
        resolvers: mockResolvers
    })
    const {query} = createTestClient(mockServer)
    const res = await query({query: mockClient})
     expect(res.data.materials).toEqual(mockResponses.mockMaterialsResponse);
  });
});