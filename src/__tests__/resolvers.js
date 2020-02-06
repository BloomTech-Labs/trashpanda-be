const resolvers = require("../resolvers");
const resolverData = require("./mock_data/mockResolverData");

describe("[Query] in resolvers file", () => {
  const mockContext = {
    dataSources: {
      earthAPI: {
        getAllMaterials: jest.fn(),
        getAllFamilies: jest.fn(),
        getPostalData: jest.fn(),
        getMaterialsByFamilyId: jest.fn()
      }
    }
  };

  const {
    getAllMaterials,
    getAllFamilies,
    getPostalData,
    getMaterialsByFamilyId
  } = mockContext.dataSources.earthAPI;

  it("calls earth.js to get all materials", async () => {
    getAllMaterials.mockReturnValueOnce(resolverData.allMaterials);

    const res = await resolvers.Query.materials(null, {}, mockContext);

    expect(res).toEqual(resolverData.allMaterials);
  });

  it("calls earth.js to get all families", async () => {
    getAllFamilies.mockReturnValueOnce(resolverData.allFamilies);

    const res = await resolvers.Query.families(null, {}, mockContext);

    expect(res).toEqual(resolverData.allFamilies);
  });

  it("calls earth.js to get postal_code information", async () => {
    getPostalData.mockReturnValueOnce(resolverData.postalData);

    const res = resolvers.Query.postal_code(
      null,
      { postal_code: "00000", country: "US" },
      mockContext
    );

    expect(res).toEqual(resolverData.postalData);
  });

  it("calls earth.js to get materials by family_id", async () => {
    getMaterialsByFamilyId.mockReturnValueOnce(resolverData.allMaterials);

    const res = resolvers.Query.materialsByFamily(null, { id: 1 }, mockContext);

    expect(res).toEqual(resolverData.allMaterials);
  });
});
