exports.up = function (knex) {
  return knex.schema.createTable("category_images", table => {
    table.string("image_url");
    table.integer("category_id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("category_images");
};
