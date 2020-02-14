jest.mock("../../../database/models/materials-model"); //commenting out this line, the tests will hit the database and fail
jest.mock("../../../database/models/postal_codes-model"); //commenting out this line, the tests will hit the database and fail

const mockData = require("./mock_data/mockEarthResponses");

const EarthAPI = require("../earth");

const mocks = {
  get: jest.fn(),
  getAllFamilies: jest.fn(),
  getMaterial: jest.fn()
};

const datasource = new EarthAPI();
datasource.get = mocks.get;

describe("[EarthAPI Reducers]", () => {
  describe("materialReducer", () => {
    it("properly transforms materials", () => {
      expect(
        datasource.materialReducer(mockData.mockBin, mockData.mockMaterialsJson)
      ).toEqual(mockData.mockMaterialsReduced);
    });
  });
  describe("familyReducer", () => {
    it("properly transforms families", async () => {
      expect(await datasource.familyReducer(mockData.mockFamiliesJson)).toEqual(
        mockData.mockFamiliesReduced
      );
    });
  });
  describe("locationReducer", () => {
    it("properly transforms locations", () => {
      expect(
        datasource.locationReducer(mockData.mockLocationDetailsJson)
      ).toEqual(mockData.mockLocationDetailsReduced);
    });
  });
  describe("postalDataReducer", () => {
    it("properly transforms postal data", () => {
      expect(datasource.postalDataReducer(mockData.mockPostalJson)).toEqual(
        mockData.mockPostalReduced
      );
    });
  });
});
describe("[EarthAPI Queries]", () => {
  describe("getAllMaterials", () => {
    it("gets the full list of materials", async () => {
      mocks.get.mockReturnValueOnce(mockData.mockMaterialsResponseOriginal);

      const res = await datasource.getAllMaterials();
      expect(res).toEqual([mockData.mockMaterialsReduced]);
    });
  });

  describe("getAllFamilies", () => {
    it("gets the full list of families", async () => {
      mocks.get.mockReturnValueOnce(mockData.mockFamiliesResponseOriginal);

      const res = await datasource.getAllFamilies();
      const actualResult = await Promise.all(res);
      expect(actualResult).toEqual(mockData.mockFamiliesArray);
    });
  });

  describe("getAllLocations", () => {
    it("gets the full list of locations", async () => {
      mocks.get
        .mockReturnValueOnce(mockData.mockLocationIdOriginal)
        .mockReturnValueOnce(mockData.mockLocationDetailsOriginal);

      const res = await datasource.getAllLocations({
        latitude: 33.67,
        longitude: -112.04,
        material_id: 445
      });
      expect(res).toEqual([mockData.mockLocationDetailsReduced]);
    });
  });

  describe("getPostalData from db", () => {
    it("gets the postal code information from the db", async () => {
      mocks.get.mockReturnValueOnce(mockData.mockPostalOriginal);

      const res = await datasource.getPostalData({
        postal_code: "85012",
        country: "US"
      });
      expect(res).toMatchObject(mockData.mockPostalReduced);
    });
  });

  describe("getPostalData from earth911", () => {
    it("gets the postal code information from the api", async () => {
      mocks.get.mockReturnValueOnce(mockData.mockPostalOriginal);

      const res = await datasource.getPostalData({
        country: "US"
      });
      expect(res).toMatchObject(mockData.mockPostalReduced);
    });
  });

  describe("getMaterialsByFamilyId from earth911", () => {
    it("gets the list on materials, with the passed in family_id, from the api", async () => {
      datasource.getAllFamilies = mocks.getAllFamilies;
      datasource.getMaterial = mocks.getMaterial;

      mocks.getAllFamilies.mockReturnValueOnce(mockData.mockFamiliesArray);
      mocks.getMaterial.mockReturnValueOnce(mockData.mockMaterialsReduced);
      mocks.getMaterial.mockReturnValueOnce(mockData.mockMaterialsReduced);
      mocks.getMaterial.mockReturnValueOnce(mockData.mockMaterialsReduced);

      const res = await datasource.getMaterialsByFamilyId({
        family_id: 1
      });
      expect(res).toMatchObject([
        mockData.mockMaterialsReduced,
        mockData.mockMaterialsReduced,
        mockData.mockMaterialsReduced
      ]);
    });
  });
});
