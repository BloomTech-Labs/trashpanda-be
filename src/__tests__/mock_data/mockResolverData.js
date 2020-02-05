const allMaterials = [
  {
    description: "Crayons",
    material_id: "0",
    long_description:
      "Can be donated or used as fire starters, OR MELTED INTO NEW CRAYONS. Why are you trying to throw away crayons, you dolt.",
    bin_trash: false,
    bin_recycle: true,
    bin_compost: false
  },
  {
    description: "T.P.",
    material_id: "007",
    long_description:
      'They have a grave misunderstanding, the T actually stands for "Tuxedo"',
    bin_trash: "panda",
    bin_recycle: true,
    bin_compost: true
  }
];

const allFamilies = [
  {
    material_ids: 1,
    family_id: 1,
    description: "We only come out at night, and we are many...",
    family_type_id: "Bear"
  }
];

const postalData = {
  postal_code: "00000",
  latitude: 36.7898,
  longitude: 46.5672
};

module.exports = resolverData = {
    allMaterials,
    allFamilies,
    postalData
};
