const mockMaterials = [
  {
    description: "jfghjk",
    material_id: 1,
    long_description: "fghjk",
    notes: "cvbnm",
    dropoff: true,
    pickup: true,
    bin_trash: true,
    bin_recycle: true,
    bin_compost: true
  },
  {
    description: "jfghehghjhjk",
    material_id: 2,
    long_description: "fghfdgdhjk",
    notes: "cvbdfghjnm",
    dropoff: false,
    pickup: false,
    bin_trash: false,
    bin_recycle: false,
    bin_compost: false
  }
];

const mockMaterialsResponse = mockMaterials;

const mockMaterial = {
  description: "jfghjk",
  material_id: 1,
  long_description: "fghjk",
  notes: "cvbnm",
  dropoff: true,
  pickup: true,
  bin_trash: true,
  bin_recycle: true,
  bin_compost: true
};

const mockMaterialResponse = mockMaterial;

const mockFamilies = [
  {
    material_ids: [5, 6, 7],
    family_id: 12,
    description: "The Varmits",
    family_type_id: 3
  },
  {
    material_ids: [5, 6, 9],
    family_id: 11,
    description: "The Swampcats",
    family_type_id: 6
  }
];

const mockFamiliesResponse = mockFamilies;

const mockFamily = {
  material_ids: [5, 6, 7],
  family_id: 12,
  description: "The Varmits",
  family_type_id: 3
};

const mockFamilyResponse = mockFamily;

const mockPostalCode = {
  postal_code: "29787",
  longitude: -45.989,
  latitude: 23.7896
};

const mockPostalCodeResponse = mockPostalCode;

const mockLocations = [
  {
    curbside: true,
    municipal: false,
    description: "first location",
    longitude: -48.9999,
    latitude: 38.9999,
    address: "12 String Ct",
    city: "Rocksville",
    province: "Providence",
    country: "America- a hemisphere",
    postal_code: "00000",
    region: "Graceland",
    full_address: "ugghhhhh",
    national: true,
    location_type_id: 14,
    event_only: true,
    fax: "outdated",
    hours: "9-10",
    phone: "555-555-5555",
    notes_public: "They look upon us with glazed over expressions",
    url: "www.woodpan.com"
  },
  {
    curbside: false,
    municipal: false,
    description: "second location",
    longitude: -38.9999,
    latitude: 48.9999,
    address: "1 Drum Circle",
    city: "Woodstock",
    province: "Outskirts",
    country: "Motherearthmaaaan",
    postal_code: "11111",
    region: "Just the 60s",
    full_address: "ugghhhhh",
    national: false,
    location_type_id: 10,
    event_only: true,
    fax: "relevant",
    hours: "always",
    phone: "+5-555-555-5555",
    notes_public: "These are some great glazed donuts, maaaaan",
    url: "none"
  }
];

const mockLocationsResponse = mockLocations;

module.exports = mockData = {
  mockMaterials,
  mockMaterialsResponse,
  mockMaterial,
  mockMaterialResponse,
  mockFamilies,
  mockFamiliesResponse,
  mockFamily,
  mockFamilyResponse,
  mockPostalCode,
  mockPostalCodeResponse,
  mockLocations,
  mockLocationsResponse
};
