const { RESTDataSource } = require("apollo-datasource-rest");

class EarthAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.earth911.com`;
    this.apiKey = `?api_key=${process.env.earth911_secret}`;
  }
  materialReducer(material) {
    return {
      id: material.material_id,
      description: material.description,
      material_id: material.material_id,
      long_description: material.long_description
    };
  }
  familyReducer(family) {
    return {
      material_ids: family.material_ids,
      family_id: family.family_id,
      description: family.description,
      family_type_id: family.family_type_id
    };
  }
  async getAllMaterials() {
    const response = await this.get(`earth911.getMaterials${this.apiKey}`);
    const result = JSON.parse(response).result;
    return Array.isArray(result)
      ? result.map(material => this.materialReducer(material))
      : [];
  }
  async getAllFamilies() {
    const response = await this.get(
      `earth911.getFamilies${this.apiKey}&family_type_id=1`
    );
    const result = JSON.parse(response).result;
    return Array.isArray(result)
      ? result.map(family => this.familyReducer(family))
      : [];
  }
  async getMaterial({ material_id }) {
    const response = await this.get(`earth911.getMaterials${this.apiKey}`, {
      material_id
    });
    const material = JSON.parse(response).result;
    return this.materialReducer(material[material_id]);
  }
}

module.exports = EarthAPI;
