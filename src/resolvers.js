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
    getMaterialByIDS: (_, { idList }, { dataSources }) =>
      dataSources.earthAPI.getMaterialByIDS(idList),
    postal_code: (_, { postal_code, country }, { dataSources }) =>
      dataSources.earthAPI.getPostalData({
        postal_code: postal_code,
        country: country
      }),
    materialsByFamily: (_, { id }, { dataSources }) =>
      dataSources.earthAPI.getMaterialsByFamilyId({ family_id: id }),
    getZip: (_, { latitude, longitude }, { dataSources }) =>
      dataSources.mapsAPI.getZip(latitude, longitude),
    getCluster: async (_, { imageData }, { dataSources }) => {
      const cluster = await dataSources.datascienceAPI.getCluster(imageData);
      const materials = await Promise.all(
        cluster.materials.map(id =>
          dataSources.earthAPI.getMaterial({ material_id: id })
        )
      );
      const clusterWithMaterials = { ...cluster, materials: materials };
      return clusterWithMaterials;
    }
  }
};
