module.exports = {
  Query: {
    //Do not place curlys after arrow!
    materials: (_, __, { dataSources }) =>
      dataSources.earthAPI.getAllMaterials(),
    families: (_, __, { dataSources }) => dataSources.earthAPI.getAllFamilies(),
    locations: (_, { latitude, longitude }, { dataSources }) =>
      dataSources.earthAPI.getAllLocations({ latitude, longitude }),
    material: (_, { id }, { dataSources }) =>
      dataSources.earthAPI.getMaterial({ material_id: id }),
    zipcode: (_, { zipcode }, {dataSources}) => 
      dataSources.earthAPI.getPostalData({zipcode: zipcode})
    
  }
};
