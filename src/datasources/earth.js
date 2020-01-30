const { RESTDataSource } = require("apollo-datasource-rest");

class EarthAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.earth911.com`;
    this.apiKey = `?api_key=${process.env.earth911_secret}`;
  }
  async getAllMaterials() {
    const response = await this.get(`earth911.getMaterials${this.apiKey}`);
    const result = JSON.parse(response).result;
    return Array.isArray(result) ? result : [];
  }
  materialReducer(material) {
    return {
      description: material.description,
      material_id: material.material_id,
      long_description: material.long_description
    };
  }
}

module.exports = EarthAPI;
