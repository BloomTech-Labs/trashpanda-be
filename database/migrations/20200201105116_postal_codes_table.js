
exports.up = function(knex) {
  return knex.schema.renameTable('zipcodes', 'postal_codes')
};

exports.down = function(knex) {
    return knex.schema.renameTable('postal_codes', 'zipcodes')
};
