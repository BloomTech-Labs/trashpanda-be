module.exports = {
  Query: {
    materials: (_, __, { dataSources }) =>
      dataSources.earthAPI.getAllMaterials(),
    families: (_, __, { dataSources }) => dataSources.earthAPI.getAllFamilies()
  }
};
