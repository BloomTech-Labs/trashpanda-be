const { RESTDataSource } = require("apollo-datasource-rest");

class DatascienceAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http:tpds-api.herokuapp.com/detect/`;
  }

  imageDescriptionReducer(response) {
    return {
      description: response.cluster //or something, whatever they call it
    };
  }

  async getImageDescription(base64) {
    //process base64 and tack on to end of base URL?
    //not sure if DS will require a get or post
    const response = await this.post(``, { data: base64 });
    return this.imageDescriptionReducer(response);
  }
}

module.exports = DatascienceAPI;
