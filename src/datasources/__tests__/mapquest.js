const mockData = require("./mock_data/mockMapquestResponses");
const MapQuestAPI = require("../mapquest");

const mocks = {};

const datasource = new MapQuestAPI();

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
