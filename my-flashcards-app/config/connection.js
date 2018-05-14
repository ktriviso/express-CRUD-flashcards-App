const pg = require('pg-promise')();
const config = require('./dbConfig');
const db = pg(config);

module.exports = db;
