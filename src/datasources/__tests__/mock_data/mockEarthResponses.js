
const mockMaterialsResponse = {
  id: 445,
  description: "#1 Plastic Bags",
  material_id: 445,
  long_description:
    "Plastic bags are used to transport products or to seal foods.",
  bin_trash: false,
  bin_recycle: true,
  bin_compost: false
};

const mockMaterialsArr = [mockMaterialsResponse];

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

// const mockMaterials = [
//      {
//         id: 1,
//         description: "hlkhol",
//         material_id: 1,
//         long_description: "butter",
//         notes: "nah",
//         dropoff: true,
//         pickup: false,
//         bin_trash: true,
//         bin_recycle: true,
//         bin_compost: true,
//       },
//       {
//         id: 2,
//         description: "jgkj,hlj;",
//         material_id: 2,
//         long_description: "toast",
//         notes: "nah",
//         dropoff: false,
//         pickup: true,
//         bin_trash: false,
//         bin_recycle: false,
//         bin_compost: false,
//       }

// ]

const mockFamiliesJson = 
  {
    material_ids: 1,
    family_id: 1,
    description: "same as below",
    family_type_id: 4,
    do_not_include: true
   }

const mockFamiliesResponse = 
  {
    material_ids: 1,
    family_id: 1,
    description: "same as below",
    family_type_id: 4
   }



const mockPostalJson = {
      "province": "FL",
      "city": "Sorrento",
      "metro": null,
      "region": "Lake",
      "longitude": -81.53074833152588,
      "postal_code": "32776",
      "latitude": 28.802874840124048,
      "population": 10262
      };

const mockPostalResponse = {
  postal_code: "32776",
  latitude: 28.802874840124048,
  longitude: -81.53074833152588 
      }


const mockLocationDetailsJson = { //Using ID Q1RQNVdZWl5DUw
  "national": false,
  "updated": "2013-07-31T14:42:59",
  "postal_code": "32746",
  "location_type_id": 28,
  "municipal": false,
  "city": "Lake Mary",
  "event_only": false,
  "latitude": 28.755605822025757,
  "province": "FL",
  "fax": "",
  "description": "Firestone Complete Auto Care  ",
  "curbside": false,
  "hours": "Please visit website for store hours.",
  "phone": "(407) 333-3429",
  "address": "860 Sun Dr",
  "notes_public": "This recycling program requests you only drop-off of \"Do-It-Yourself\" allowed products during business hours and a limit max of 5 gallons.",
  "created": "2013-07-31T14:42:59",
  "url": "https://www.firestonecompleteautocare.com/",
  "country": "US",
  "region": "Seminole",
  "longitude": -81.35347518971241,
  "geocoded": false,
  "materials": [
  {
  "dropoff": true,
  "description": "Brake Fluid",
  "business": false,
  "url": "",
  "residential": true,
  "notes": "",
  "residential_method": "dropoff",
  "business_method": "none",
  "material_id": 108,
  "pickup": false,
  "pending": "F"
  },
  {
  "dropoff": true,
  "description": "Car Batteries",
  "business": false,
  "url": "",
  "residential": true,
  "notes": "This site accepts non-leaking batteries only.",
  "residential_method": "dropoff",
  "business_method": "none",
  "material_id": 4,
  "pickup": false,
  "pending": "F"
  },
  {
  "dropoff": true,
  "description": "Hydraulic Fluid",
  "business": false,
  "url": "",
  "residential": true,
  "notes": "",
  "residential_method": "dropoff",
  "business_method": "none",
  "material_id": 535,
  "pickup": false,
  "pending": "F"
  },
  {
  "dropoff": true,
  "description": "Marine Batteries",
  "business": false,
  "url": "",
  "residential": true,
  "notes": "This site accepts non-leaking batteries only.",
  "residential_method": "dropoff",
  "business_method": "none",
  "material_id": 326,
  "pickup": false,
  "pending": "F"
  },
  {
  "dropoff": true,
  "description": "Motor Oil",
  "business": false,
  "url": "",
  "residential": true,
  "notes": "",
  "residential_method": "dropoff",
  "business_method": "none",
  "material_id": 1,
  "pickup": false,
  "pending": "F"
  },
  {
  "dropoff": true,
  "description": "Power Steering Fluid",
  "business": false,
  "url": "",
  "residential": true,
  "notes": "",
  "residential_method": "dropoff",
  "business_method": "none",
  "material_id": 543,
  "pickup": false,
  "pending": "F"
  },
  {
  "dropoff": true,
  "description": "Transmission Fluid",
  "business": false,
  "url": "",
  "residential": true,
  "notes": "",
  "residential_method": "dropoff",
  "business_method": "none",
  "material_id": 107,
  "pickup": false,
  "pending": "F"
  }
  ],
  "notes": "This recycling program requests you only drop-off of \"Do-It-Yourself\" allowed products during business hours and a limit max of 5 gallons."
  }

  const mockLocationDetailsResponse = {
    "full_address": "860 Sun Dr, Lake Mary, FL 32746", 
    "national": false,
  "updated": "2013-07-31T14:42:59",
  "postal_code": "32746",
  "location_type_id": 28,
  "municipal": false,
  "city": "Lake Mary",
  "event_only": false,
  "latitude": 28.755605822025757,
  "province": "FL",
  "fax": "",
  "description": "Firestone Complete Auto Care  ",
  "curbside": false,
  "hours": "Please visit website for store hours.",
  "phone": "(407) 333-3429",
  "address": "860 Sun Dr",
  "notes_public": "This recycling program requests you only drop-off of \"Do-It-Yourself\" allowed products during business hours and a limit max of 5 gallons.",
  "created": "2013-07-31T14:42:59",
  "url": "https://www.firestonecompleteautocare.com/",
  "country": "US",
  "region": "Seminole",
  "longitude": -81.35347518971241,
  "geocoded": false,
  "materials": [
  {
  "dropoff": true,
  "description": "Brake Fluid",
  "business": false,
  "url": "",
  "residential": true,
  "notes": "",
  "residential_method": "dropoff",
  "business_method": "none",
  "material_id": 108,
  "pickup": false,
  "pending": "F"
  },
  {
  "dropoff": true,
  "description": "Car Batteries",
  "business": false,
  "url": "",
  "residential": true,
  "notes": "This site accepts non-leaking batteries only.",
  "residential_method": "dropoff",
  "business_method": "none",
  "material_id": 4,
  "pickup": false,
  "pending": "F"
  },
  {
  "dropoff": true,
  "description": "Hydraulic Fluid",
  "business": false,
  "url": "",
  "residential": true,
  "notes": "",
  "residential_method": "dropoff",
  "business_method": "none",
  "material_id": 535,
  "pickup": false,
  "pending": "F"
  },
  {
  "dropoff": true,
  "description": "Marine Batteries",
  "business": false,
  "url": "",
  "residential": true,
  "notes": "This site accepts non-leaking batteries only.",
  "residential_method": "dropoff",
  "business_method": "none",
  "material_id": 326,
  "pickup": false,
  "pending": "F"
  },
  {
  "dropoff": true,
  "description": "Motor Oil",
  "business": false,
  "url": "",
  "residential": true,
  "notes": "",
  "residential_method": "dropoff",
  "business_method": "none",
  "material_id": 1,
  "pickup": false,
  "pending": "F"
  },
  {
  "dropoff": true,
  "description": "Power Steering Fluid",
  "business": false,
  "url": "",
  "residential": true,
  "notes": "",
  "residential_method": "dropoff",
  "business_method": "none",
  "material_id": 543,
  "pickup": false,
  "pending": "F"
  },
  {
  "dropoff": true,
  "description": "Transmission Fluid",
  "business": false,
  "url": "",
  "residential": true,
  "notes": "",
  "residential_method": "dropoff",
  "business_method": "none",
  "material_id": 107,
  "pickup": false,
  "pending": "F"
  }
  ],
  "notes": "This recycling program requests you only drop-off of \"Do-It-Yourself\" allowed products during business hours and a limit max of 5 gallons."
  }

module.exports = mockData = {
    mockMaterialsResponse,
    mockFamiliesJson,
    mockPostalJson,
    mockLocationDetailsJson,
    mockMaterialsArr,
    mockBin,
    mockMaterialsJson,
    mockMaterialsResponseOriginal,
    mockFamiliesResponse,
    mockPostalResponse,
    mockLocationDetailsResponse
}