const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    material(id: Int): Material
    materials: [Material]
    getMaterialByIDS(idList: [Int]): [Material]
    family: Family
    postal_code(postal_code: String!, country: String!): PostalCode
    families: [Family]
    locations(latitude: Float!, longitude: Float!, material_id: Int): [Location]
    materialsByFamily(id: Int): [Material]
    getZip(latitude: String!, longitude: String!): PostalCode
    getCluster(imageData: String!): Cluster
  }

  type Cluster {
    message: String
    cluster_name: String
    cluster: String
    materials: [Material]
  }

  type Family {
    material_ids: [Int]
    family_id: Int
    description: String
    family_type_id: Int
    image_url: String
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
    image_url: String
  }

  type Location {
    curbside: Boolean
    municipal: Boolean
    description: String
    longitude: Float
    latitude: Float
    address: String
    city: String
    province: String
    country: String
    postal_code: String
    region: String
    full_address: String
    national: Boolean
    location_type_id: Int
    event_only: Boolean
    fax: String
    hours: String
    phone: String
    notes_public: String
    url: String
  }

  type PostalCode {
    postal_code: String!
    longitude: Float!
    latitude: Float!
  }
`;

module.exports = typeDefs;
