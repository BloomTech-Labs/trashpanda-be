const mockData = require("./mock_data/mockMapquestResponses");
const MapQuestAPI = require("../mapquest");

const mocks = {
  get: jest.fn()
};

const datasource = new MapQuestAPI();
datasource.get = mocks.get;

//Reducers
describe("[MapQuestAPI Reducers]", () => {
  describe("postalDataReducer", () => {
    it("properly transforms postal data", () => {
      expect(datasource.postalDataReducer(mockData.mockLocation)).toEqual(
        mockData.mockPostalDataReduced
      );
    });
  });
});

//Queries
describe("[MapQuestAPI Queries]", () => {
  describe("getZip", () => {
    it("gets zip code from latitude/longitude", async () => {
      mocks.get.mockReturnValueOnce(mockData.mockResponseData);

      const res = await datasource.getZip();
      expect(res).toMatchObject(mockData.mockPostalDataReduced);
    });
  });
});
