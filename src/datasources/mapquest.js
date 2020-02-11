const { RESTDataSource } = require("apollo-datasource-rest");

class MapQuestAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://www.mapquestapi.com/geocoding/v1/`;
  }

  postalDataReducer(postalData) {
    //Transform into PostalCode type
    return {
      postal_code: postalData.postalCode,
      latitude: postalData.latLng.lat,
      longitude: postalData.latLng.lng
    };
  }

  async getZip(lat, long) {
    const data = await this.get(
      `reverse/?key=${process.env.MAPQUEST_KEY}&location=${lat},${long}`
    );

    return this.postalDataReducer(data.results[0].locations[0]);
  }
}

module.exports = MapQuestAPI;
