exports.up = function (knex) {
  return knex.schema
    .createTable("zipcodes", zipcodes => {
      zipcodes.increments();

      zipcodes.string("zipcode").notNullable();

      zipcodes.float("latitude").notNullable();

      zipcodes.float("longitude").notNullable();
    })

    .createTable("categories", categories => {
      categories.increments();

      categories
        .string("name")
        .notNullable()
        .unique();
    })

    .createTable("materials", materials => {
      materials.increments();

      materials
        .integer("material_id")
        .notNullable()
        .unique();

      materials.boolean("bin_trash").notNullable();

      materials.boolean("bin_recycle").notNullable();

      materials.boolean("bin_compost").notNullable();
    })

    .createTable("category_materials", category_materials => {
      //This is a many to many relationship, if you want materials to only be attached to 1 category then you can: 1- delete this table and add a FK category_id prop to the materials table, then edit your seed data to reflect this change. Or 2. add the unique method to the materials_id property in this table, then edit your seed file

      category_materials
        .integer("category_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("categories")
        //these should not delete or update parent
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");

      category_materials
        .integer("material_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("materials")
        //these should not delete or update parent
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })

    .createTable("descriptions", descriptions => {
      descriptions.increments();

      descriptions
        .integer("material_id")
        .notNullable()
        .unsigned()
        //This is a 1-1 relationship, so each description has only one (unique) material_id
        .unique()
        .references("id")
        .inTable("materials")
        //these should not delete or update parent
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");

      descriptions.string("long_description").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("descriptions")
    .dropTableIfExists("category_materials")
    .dropTableIfExists("materials")
    .dropTableIfExists("categories")
    .dropTableIfExists("zipcodes");
};
