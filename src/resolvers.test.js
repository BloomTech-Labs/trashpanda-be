const resolvers = require('./resolvers');

describe('[Query.materials]', () => {
  const mockContext = {
    dataSources: {
      earthAPI: { 
        getAllMaterials: jest.fn(),
        getAllFamilies: jest.fn() 
       }
 
    }
  }

  const { getAllMaterials, getAllFamilies } = mockContext.dataSources.earthAPI;

  it('calls earth.js to get all materials', async () => {
    getAllMaterials.mockReturnValueOnce(
      [ 
        { 
        description: "Crayons",
        material_id: "0",
        long_description: "Can be donated or used as fire starters, OR MELTED INTO NEW CRAYONS. Why are you trying to throw away crayons, you dolt."
      },
      {
        description: "T.P.",
        material_id: "007",
        long_description: "They have a grave misunderstanding, the T actually stands for \"Tuxedo\""
      }
    
     ]);

     const res = await resolvers.Query.materials(null, {}, mockContext);

     expect(res).toEqual(
         [{ 
          description: "Crayon",
          material_id: "0",
          long_description: "Can be donated or used as fire starters, OR MELTED INTO NEW CRAYONS. Why are you trying to throw away crayons, you dolt."
        },
        {
          description: "T.P.",
          material_id: "007",
          long_description: "They have a grave misunderstanding, the T actually stands for \"Tuxedo\""
        }]
     )

  });

  it('calls earth.js to get all families', async () => {
    getAllFamilies.mockReturnValueOnce(
      [ 
        { 
          material_ids: 1,
          family_id: 1,
          description: "We only come out at night, and we are many...",
          family_type_id: "Bear"
      }
    
     ]);

     const res = await resolvers.Query.families(null, {}, mockContext);

     expect(res).toEqual(
         [{ 
          material_ids: 2,
          family_id: 1,
          description: "We only come out at night, and we are many...",
          family_type_id: "Bear"
      }]
     )

  });

})