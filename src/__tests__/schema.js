
const { ApolloServer } = require("apollo-server");
const gql = require('graphql-tag');
const typeDefs = require("../schema");
const {createTestClient} = require('apollo-server-testing');

const mockResponses = require("./mock_data/mockSchemaResponses")

const mockClient = require('./mock_data/mockClientQueries')

//the mockResolvers must match REAL queries outlined in the schema or they will not work (implied tests of Query definitions)

const mockResolvers = {
    Query:{
        materials: async () => {
            return mockResponses.mockMaterials
        },
        material: async () => {
            return mockResponses.mockMaterial
        },
        families: async () => {
            return mockResponses.mockFamilies
        },
        family: async () => {
            return mockResponses.mockFamily
        },
        postal_code: async () => {
            return mockResponses.mockPostalCode
        },
        locations: async () => {
            return mockResponses.mockLocations
        }
    }
};
const mockServer = new ApolloServer({
    typeDefs,
    resolvers: mockResolvers
});
const {query} = createTestClient(mockServer);

describe('testing typeDefs', () => {
        describe('materials query', () => {
            it('queries materials using Material type and materials query on schema', async () => {
                const res = await query({query: mockClient.materials})
                expect(res.data.materials).toEqual(mockResponses.mockMaterialsResponse);
            });

        });
 
        describe('material query', () => {
            it('queries material using Material type and material query on schema', async () => {
                const res = await query({query: mockClient.material})
                expect(res.data.material).toEqual(mockResponses.mockMaterialResponse);
            });
        });
  
        describe('families query', () => {
            it('queries families using Family type and families query on schema', async () => {
                const res = await query({query: mockClient.families})
                expect(res.data.families).toEqual(mockResponses.mockFamiliesResponse);
            });
        });


        describe('family query', () => {
            it('queries family using Family type and (the existence of) family query on schema', async () => {
                const res = await query({query: mockClient.family})
                expect(res.data.family).toEqual(mockResponses.mockFamilyResponse);
            });
        });

        describe('postal_code query', () => {
            it('queries postal_code using Postal_code type and (the existence of) postal_code query on schema', async () => {
                const res = await query({query: mockClient.postal_code})
                expect(res.data.postal_code).toEqual(mockResponses.mockPostalCodeResponse);
            });
        });

        describe('locations query', () => {
            it('queries locations using Location type and (the existence of) locations query on schema', async () => {
                const res = await query({query: mockClient.locations})
                expect(res.data.locations).toEqual(mockResponses.mockLocationsResponse);
            });
        });
});