// const neo4j = require('neo4j-driver').v1;

// let driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "testing"));

// module.exports = driver
require('dotenv').config()
let mysqldb2 = require('mysql2/promise')

const connection = mysqldb2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

module.exports = connection