const knex = require('knex');
const knexConfig = require('../knexfile.js');



require('dotenv').config()



module.exports = knex(knexConfig[process.env.DB_ENVIRO]);

