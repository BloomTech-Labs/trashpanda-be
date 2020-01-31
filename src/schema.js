const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    material: Material
    materials: [Material]
    family: Family
    families: [Family]
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
    bin_trash: Boolean
    bin_recycle: Boolean 
    bin_compost: Boolean

  }
`;

module.exports = typeDefs;
