const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    material: Material
    materials: [Material]
    family: Family
  }
  type Family {
    material_ids: [Int]
    family_id: Int
    description: String
    family_type_id: Int
  }

  type Material {
    description: String
    material_id: Int!
    long_description: String
    notes: String
    dropoff: Boolean
    pickup: Boolean
  }
`;

module.exports = typeDefs;
