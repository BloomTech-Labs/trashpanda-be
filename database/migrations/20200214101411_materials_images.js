
exports.up = function (knex) {
    return knex.schema.table("materials", table => {
        table.string("image_url");
    })
};

exports.down = function (knex) {
    return knex.schema.table("materials", table => {
        table.dropColumn("image_url");
    })
};
