const gql = require("graphql-tag");

const mockClient = {
  materials: gql`
    query {
      materials {
        material_id
        description
        material_id
        long_description
        notes
        dropoff
        pickup
        bin_trash
        bin_recycle
        bin_compost
      }
    }
  `,
  material: gql`
    query {
      material {
        material_id
        description
        material_id
        long_description
        notes
        dropoff
        pickup
        bin_trash
        bin_recycle
        bin_compost
      }
    }
  `,
  families: gql`
    query {
      families {
        material_ids
        family_id
        description
        family_type_id
      }
    }
  `,
  family: gql`
    query {
      family {
        material_ids
        family_id
        description
        family_type_id
      }
    }
  `,
  postal_code: gql`
    query {
      postal_code(postal_code: "can be any string", country: "US") {
        postal_code
        longitude
        latitude
      }
    }
  `,
  locations: gql`
    query {
      locations(latitude: 26.8888, longitude: 23.777) {
        curbside
        municipal
        description
        longitude
        latitude
        address
        city
        province
        country
        postal_code
        region
        full_address
        national
        location_type_id
        event_only
        fax
        hours
        phone
        notes_public
        url
      }
    }
  `
};

module.exports = mockClient;
