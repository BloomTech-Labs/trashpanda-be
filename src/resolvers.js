module.exports = {
  Query: {
    //Do not place curlys after arrow!
    materials: (_, __, { dataSources }) =>
      dataSources.earthAPI.getAllMaterials(),
    material: (_, { id }, { dataSources }) =>
      dataSources.earthAPI.getMaterial({ material_id: id }),
    families: (_, __, { dataSources }) => dataSources.earthAPI.getAllFamilies(),
    zipcode: (_, { zipcode }, {dataSources}) => 
      dataSources.earthAPI.getPostalData({zipcode: zipcode})
    
  }
};
