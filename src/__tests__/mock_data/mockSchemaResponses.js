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

const mockMaterialsResponse = [
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

module.exports = mockData = {
    mockMaterials,
    mockMaterialsResponse

}