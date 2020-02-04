const knex = require("knex");
const knexConfig = require("../knexfile.js");

const config = process && process.env && process.env.DB_ENV || "development";

module.exports = knex(knexConfig[config]);


