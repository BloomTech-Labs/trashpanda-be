const mockMaterialsReduced = {
  id: 445,
  description: "#1 Plastic Bags",
  material_id: 445,
  long_description:
    "Plastic bags are used to transport products or to seal foods.",
  bin_trash: false,
  bin_recycle: true,
  bin_compost: false
};

const mockBin = {
  id: 1,
  bin_trash: 0,
  bin_recycle: 1,
  bin_compost: 0
};

const mockMaterialsJson = {
  description: "#1 Plastic Bags",
  url: "",
  description_legacy: "",
  material_id: 445,
  long_description:
    "Plastic bags are used to transport products or to seal foods.",
  family_ids: [9, 106, 108],
  image: "materials/1-plastic-bags.jpg"
};

const mockMaterialsResponseOriginal = `{"search_time": "00.087330", "num_results": 1, "result": [{"description": "#1 Plastic Bags", "url": "", "description_legacy": "", "material_id": 445, "long_description": "Plastic bags are used to transport products or to seal foods.", "family_ids": [9, 106, 108], "image": "materials/1-plastic-bags.jpg"}]}`;

const mockFamiliesReduced = {
  material_ids: [1, 2, 3],
  family_id: 1,
  description: "Automotive",
  family_type_id: 1,
  image_url: "https://i.imgur.com/Zeb0clO.png"
};

const mockFamiliesArray = [
  {
    material_ids: [1, 2, 3],
    family_id: 1,
    description: "Automotive",
    family_type_id: 1,
    image_url: "https://i.imgur.com/Zeb0clO.png"
  },
  {
    material_ids: [1, 2, 3],
    family_id: 2,
    description: "Second",
    family_type_id: 2,
    image_url: "https://i.imgur.com/B7itNtW.png"
  }
];

const mockFamiliesJson = {
  material_ids: [1, 2, 3],
  family_id: 1,
  description_legacy: "Automobile",
  description: "Automotive",
  family_type_id: 1
};

const mockFamiliesResponseOriginal = `{"search_time": "00.025142", "num_results": 13, "result": [{"material_ids": [1, 2, 3], "family_id": 1, "description_legacy": "Automobile", "description": "Automotive", "family_type_id": 1}, {"material_ids": [1, 2, 3], "family_id": 2, "description_legacy": "Second", "description": "Second", "family_type_id": 2}]}`;

const mockPostalJson = {
  province: "AZ",
  city: "Phoenix",
  metro: null,
  region: "Maricopa",
  longitude: -112.07111768538415,
  postal_code: "85012",
  latitude: 33.49929529525238,
  population: 6390
};

const mockPostalReduced = {
  postal_code: "85012",
  latitude: 33.49929529525238,
  longitude: -112.07111768538415
};

const mockPostalOriginal = `{
  "search_time": "00.001300",
  "num_results": 8,
  "result": {
    "province": "AZ",
    "city": "Phoenix",
    "metro": null,
    "region": "Maricopa",
    "longitude": -112.07111768538415,
    "postal_code": "85012",
    "latitude": 33.49929529525238,
    "population": 6390
  }
}`;

const mockLocationDetailsJson = {
  // Q1RTNVBdXFdD
  national: false,
  updated: "2014-04-24T10:24:26",
  postal_code: "85007",
  location_type_id: 0,
  municipal: false,
  city: "Phoenix",
  event_only: false,
  latitude: 33.44314543132956,
  province: "AZ",
  fax: "",
  description: "Bio PAPPEL International",
  curbside: false,
  hours: "Monday to Friday 7:30am to 3:30pm",
  phone: "(602) 252-7484",
  address: "425 South 15th Avenue",
  notes_public:
    "This site is located on 15th Avenue and Jefferson. It also offers secure document destruction and is NAID Certified.",
  created: "2005-06-15T11:51:00",
  url: "https://www.biopappel.com/en/business-groups/",
  country: "US",
  region: "Maricopa",
  longitude: -112.09071284197763,
  geocoded: false,
  materials: [
    {
      dropoff: true,
      description: "Window Envelopes",
      business: true,
      url: "",
      residential: true,
      notes: "",
      residential_method: "dropoff",
      business_method: "both",
      material_id: 559,
      pickup: true,
      pending: "F"
    }
  ],
  notes:
    "This site is located on 15th Avenue and Jefferson. It also offers secure document destruction and is NAID Certified."
};

const mockLocationDetailsReduced = {
  // Q1RTNVBdXFdD
  full_address: "425 South 15th Avenue, Phoenix, AZ 85007",
  ...mockLocationDetailsJson
};

const mockLocationDetailsOriginal = `{
  "search_time": "00.018375",
  "num_results": 1,
  "result": {
    "Q1RTNVBdXFdD": {
      "national": false,
      "updated": "2014-04-24T10:24:26",
      "postal_code": "85007",
      "location_type_id": 0,
      "municipal": false,
      "city": "Phoenix",
      "event_only": false,
      "latitude": 33.44314543132956,
      "province": "AZ",
      "fax": "",
      "description": "Bio PAPPEL International",
      "curbside": false,
      "hours": "Monday to Friday 7:30am to 3:30pm",
      "phone": "(602) 252-7484",
      "address": "425 South 15th Avenue",
      "notes_public": "This site is located on 15th Avenue and Jefferson. It also offers secure document destruction and is NAID Certified.",
      "created": "2005-06-15T11:51:00",
      "url": "https://www.biopappel.com/en/business-groups/",
      "country": "US",
      "region": "Maricopa",
      "longitude": -112.09071284197763,
      "geocoded": false,
      "materials": [
        {
          "dropoff": true,
          "description": "Window Envelopes",
          "business": true,
          "url": "",
          "residential": true,
          "notes": "",
          "residential_method": "dropoff",
          "business_method": "both",
          "material_id": 559,
          "pickup": true,
          "pending": "F"
        }
      ],
      "notes": "This site is located on 15th Avenue and Jefferson. It also offers secure document destruction and is NAID Certified."
    }
  }
}`;

const locationIdJson = {
  curbside: false,
  description: "Bio PAPPEL International",
  distance: 15.9,
  longitude: -112.09071284197763,
  latitude: 33.44314543132956,
  location_type_id: 0,
  location_id: "Q1RTNVBdXFdD",
  municipal: false
};

const mockLocationIdOriginal = `{
  "search_time": "00.364877",
  "num_results": 1,
  "result": [
    {
      "curbside": false,
      "description": "Bio PAPPEL International",
      "distance": 15.9,
      "longitude": -112.09071284197763,
      "latitude": 33.44314543132956,
      "location_type_id": 0,
      "location_id": "Q1RTNVBdXFdD",
      "municipal": false
    }
  ]
}
`;

module.exports = mockData = {
  mockMaterialsJson,
  mockMaterialsReduced,
  mockMaterialsResponseOriginal,
  mockFamiliesJson,
  mockFamiliesReduced,
  mockFamiliesResponseOriginal,
  mockFamiliesArray,
  mockPostalJson,
  mockPostalReduced,
  mockPostalOriginal,
  locationIdJson,
  mockLocationIdOriginal,
  mockLocationDetailsJson,
  mockLocationDetailsReduced,
  mockLocationDetailsOriginal,
  mockBin
};
