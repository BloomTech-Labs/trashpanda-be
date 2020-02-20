const mockData = require("./mock_data/mockDataScienceResponses");

const DataScienceAPI = require("../datascience");

const mocks = {
  get: jest.fn()
};

const datasource = new DataScienceAPI();
datasource.get = mocks.get;

describe("[DataScienceAPI Reducers]", () => {
  describe("clusterReducer", () => {
    it("properly transforms the cluster", () => {
      expect(datasource.clusterReducer(mockData.mockCluster)).toEqual(
        mockData.mockCluster
      );
    });
  });
});
