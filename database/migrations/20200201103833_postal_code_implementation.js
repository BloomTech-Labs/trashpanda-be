
exports.up = function(knex) {
  return knex.schema.table('zipcodes', table => {
      table.renameColumn('zipcode', "postal_code")
  })
};

exports.down = function(knex) {
  return knex.schema.table('zipcodes', table => {
      table.renameColumn('postal_code', 'zipcode')
  })
};
