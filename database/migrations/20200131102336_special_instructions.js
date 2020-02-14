exports.up = function (knex) {
  return knex.schema.table("materials", table => {
    table.boolean("bin_special");
  });
};

exports.down = function (knex) {
  return knex.schema.table("materials", table => {
    table.dropColumn("bin_special");
  });
};
