const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    material: Material
  }

  type Material {
    id: Int!
  }
`;

module.exports = typeDefs;
