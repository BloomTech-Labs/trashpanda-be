const { RESTDataSource } = require("apollo-datasource-rest");
const Materials = require("../../database/models/materials-model");
const PostalCodes = require("../../database/models/postal_codes-model");

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

  locationObjReducer(locationObj) {
    return {
      postal_code: locationObj.postal_code,
      latitude: locationObj.latitude,
      longitude: locationObj.longitude
    };
  }

  locationReducer(location) {
    return {
      ...location,
      full_address: `${location.address}, ${location.city}, ${location.province} ${location.postal_code}`
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

  getLocationsForMaterial = material_id => {
    if (material_id) {
      return `earth911.searchLocations${this.apiKey}&material_id=${material_id}`;
    } else {
      return `earth911.searchLocations${this.apiKey}`;
    }
  };

  async getAllLocations({ latitude, longitude, material_id }) {
    //find locations near me
    const hasMaterial = this.getLocationsForMaterial(material_id);
    const locations = await this.get(
      `${hasMaterial}&latitude=${latitude}&longitude=${longitude}`
    );
    const locationsArr = JSON.parse(locations).result;

    //extract just the location_id field from the data
    const locationIds = Array.isArray(locationsArr)
      ? locationsArr.map(location => {
          return location.location_id;
        })
      : [];

    //get location details for each location_id
    return locationIds.map(async id => {
      const locationDetails = await this.get(
        `earth911.getLocationDetails${this.apiKey}&location_id=${id}`
      );
      const parsedDetails = JSON.parse(locationDetails);
      return this.locationReducer(parsedDetails.result[id]);
    });
  }

  async getMaterial({ material_id }) {
    const response = await this.getAllMaterials();
    console.log(response)
    const material = response.filter(material => material.material_id === material_id)[0];
    return material;
  }

  // POSTAL DATA AND LAT/LONG
  // Despite the documentation, this query requires the country

  async getPostalData({ postal_code, country }) {
    let locationObj = {};
    //check knexDB first (find postal_code)

      const dbPostalCodes = await PostalCodes.findByPostalCode(postal_code)
      if(dbPostalCodes){
          //return the postal_code from knexDB (if postal_code)
          return dbPostalCodes
      } else { 
          //Get the info, secondary (if no postal_code)
          const response = await this.get(`earth911.getPostalData${this.apiKey}&postal_code=${postal_code}&country=${country}`);
          locationObj = await JSON.parse(response).result;
              //add to knexDB, tertiary (if no postal_code)
              const processedPostal = this.locationObjReducer(locationObj);
              await PostalCodes.add(processedPostal)
              return processedPostal;
      }

  }
}

module.exports = EarthAPI;

