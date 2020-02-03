const knex = require("knex");
const knexConfig = require("../knexfile.js");
require("dotenv").config();
// const dbEnvironment = async () =>  {
//     return knex(knexConfig[process.env.NODE_ENV])
// }

module.exports = knex(knexConfig["development"]);


