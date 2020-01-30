module.exports = {
  Query: {
    materials: (_, __, { dataSources }) =>
      dataSources.earthAPI.getAllMaterials()
  }
};
