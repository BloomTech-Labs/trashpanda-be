const { RESTDataSource } = require("apollo-datasource-rest");
const Materials = require("../../database/models/materials-model");

class EarthAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.earth911.com`;
    this.apiKey = `?api_key=${process.env.earth911_secret}`;
  }

  materialReducer(binInfo, material) {
    return {
      id: material.material_id,
      description: material.description,
      material_id: material.material_id,
      long_description: material.long_description,
      // "!!+" converts 0/1 into boolean
      bin_trash: binInfo && !!+binInfo.bin_trash,
      bin_recycle: binInfo && !!+binInfo.bin_recycle,
      bin_compost: binInfo && !!+binInfo.bin_compost
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
    const dbMaterials = await Materials.find();
    const response = await this.get(`earth911.getMaterials${this.apiKey}`);
    const result = JSON.parse(response).result;
    if (Array.isArray(result)) {
      return result.map(material => {
        const dbMaterial = dbMaterials.filter(
          dbMat => dbMat.material_id === material.material_id
        )[0];
        return this.materialReducer(dbMaterial, material);
      });
    } else {
      return [];
    }
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
