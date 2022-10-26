require('dotenv').config()
const { config } = require('dotenv');
const mysql = require('mysql')

const db = mysql.createConnection({
  user:"root",
  host: "localhost",
  password: process.env.PASSWORD,
  database: "employeeSystem",
});

module.exports = db;