const knex = require("knex");
const knexConfig = require("../knexfile.js");
// require("dotenv").config();
// const dbEnvironment = async () =>  {
//     return knex(knexConfig[process.env.NODE_ENV])
// }

const config = process && process.env && process.env.DB_ENV || "development";
// console.log("process.env.NODE_ENV", process.env.NODE_ENV)

module.exports = knex(knexConfig[config]);


