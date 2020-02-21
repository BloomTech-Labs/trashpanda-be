const { RESTDataSource } = require("apollo-datasource-rest");

class DatascienceAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://gentle-mesa-73091.herokuapp.com/detect`;
  }

  clusterReducer(response) {
    return {
      message: response.message,
      cluster_name: response.cluster_name,
      cluster: response.cluster,
      materials: response.materials
    };
  }

  getCluster(imageData) {
    // sample response data until DS gets the API up
    const sampleResponse = {
      status: "success",
      cluster_name: "Plastic Sample",
      cluster: "plastic_containers",
      materials: [593, 466, 621, 471, 236, 677]
    };

    //TODO DS api query goes here
    const response = this.post(``, { imgb64: imageData });

    return this.clusterReducer(response);
  }
}

module.exports = DatascienceAPI;
