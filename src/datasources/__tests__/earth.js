jest.mock("../../../database/models/materials-model"); //commenting out this line, the tests will hit the database and fail 

const mockData = require("./mock_data/mockEarthResponses")


const EarthAPI = require("../earth");

const mocks = {
  get: jest.fn()
};

const datasource = new EarthAPI();
datasource.get = mocks.get;

describe("[EarthAPI Reducers]", () => {
  describe("materialReducer", () => {
    it("properly transforms materials", () => {
      expect(
        datasource.materialReducer(mockData.mockBin, mockData.mockMaterialsJson)
      ).toEqual(mockData.mockMaterialsResponse);
    });
  });
  describe("familyReducer", () => {
    it("properly transforms families", () => {
      expect(
        datasource.familyReducer(mockData.mockFamiliesJson)
      ).toEqual(mockData.mockFamiliesResponse);
    });
  })
  describe("locationReducer", () => {
    it("properly transforms locations", () => {
      expect(
        datasource.locationReducer(mockData.mockLocationDetailsJson)
      ).toEqual(mockData.mockLocationDetailsResponse);
    });
  })
  describe("locationObjReducer", () => {
    it("properly transforms postal data", () => {
      expect(
        datasource.locationObjReducer(mockData.mockPostalJson)
      ).toEqual(mockData.mockPostalResponse);
    });
  })

});

describe("[EarthAPI.getAllMaterials]", () => {
  it("get the full list of materials", async () => {
    mocks.get.mockReturnValueOnce(mockData.mockMaterialsResponseOriginal);

    const res = await datasource.getAllMaterials();
    expect(res).toEqual(mockData.mockMaterialsArr);
  });
});

