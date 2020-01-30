const db = require(`../dbConfig`);

const find = (materialId = undefined) => {
  return db(`materials`).modify(qb => {
    if (materialId) {
      qb.where({ material_id: materialId });
    }
  });
};

const add = (material_id, bin_trash, bin_recycle, bin_compost) => {
  return db(`materials`)
    .insert({ material_id, bin_trash, bin_recycle, bin_compost }, "id")
    .then(([id]) =>
      db(`materials`)
        .where({ id })
        .first()
    );
};

module.exports = Materials = {
  find,
  add
};
