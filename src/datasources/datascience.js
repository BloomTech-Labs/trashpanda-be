const { RESTDataSource } = require("apollo-datasource-rest");

class DatascienceAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.DataScience_URL;
  }

  clusterReducer(response) {
    return {
      message: response.message,
      cluster_name: response.cluster_name,
      cluster: response.cluster,
      materials: response.materials
    };
  }

  async getCluster(imageData) {
    const response = await this.post(`detect`, { imgb64: imageData });

    return this.clusterReducer(response);
  }
}

module.exports = DatascienceAPI;
