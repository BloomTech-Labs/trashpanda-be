const find = jest.fn((materialId = undefined) => {
    return [
      {
        id: 1,
        material_id: 445,
        bin_trash: 0,
        bin_recycle: 1,
        bin_compost: 0
      }
    ];
  });
  
  const add = jest.fn((material_id, bin_trash, bin_recycle, bin_compost) => {
    return [
      {
        id: 1,
        material_id: 445,
        bin_trash: 0,
        bin_recycle: 1,
        bin_compost: 0
      }
    ];
  });
  
  module.exports = Materials = {
    find,
    add
  };