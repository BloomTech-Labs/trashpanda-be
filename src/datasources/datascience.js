const { RESTDataSource } = require("apollo-datasource-rest");

class DatascienceAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http:tpds-api.herokuapp.com/detect/`;
  }

  clusterReducer(response) {
    return {
      status: response.status,
      cluster: response.cluster,
      materials: response.materials
    };
  }

  getCluster(base64) {
    // sample response data until DS gets the API up
    const sampleResponse = {
      status: "success",
      cluster: "plastic_containers",
      materials: [593, 466, 621, 471, 236, 677]
    };

    //TODO DS api query goes here
    
    return this.clusterReducer(sampleResponse);
  }
}

module.exports = DatascienceAPI;
