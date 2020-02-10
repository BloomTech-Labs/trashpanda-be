module.exports = {
  Query: {
    //Do not place curlys after arrow!
    materials: (_, __, { dataSources }) =>
      dataSources.earthAPI.getAllMaterials(),
    families: (_, __, { dataSources }) => dataSources.earthAPI.getAllFamilies(),
    locations: (_, { latitude, longitude, material_id }, { dataSources }) =>
      dataSources.earthAPI.getAllLocations({
        latitude,
        longitude,
        material_id
      }),
    material: (_, { id }, { dataSources }) =>
      dataSources.earthAPI.getMaterial({ material_id: id }),
    postal_code: (_, { postal_code, country }, { dataSources }) =>
      dataSources.earthAPI.getPostalData({
        postal_code: postal_code,
        country: country
      }),
    materialsByFamily: (_, { id }, { dataSources }) =>
      dataSources.earthAPI.getMaterialsByFamilyId({ family_id: id }),
    getZip: (_, { latitude, longitude }, { dataSources }) =>
      dataSources.mapsAPI.getZip(latitude, longitude)
  }
};
