const knex = require("knex");
const knexConfig = require("../knexfile.js");


const dbEnvironment = async () =>  {
    return knex(knexConfig[process.env.NODE_ENV])
}

module.exports = dbEnvironment;


