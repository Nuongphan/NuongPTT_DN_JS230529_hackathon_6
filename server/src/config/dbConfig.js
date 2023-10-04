// ==== CONNECT EXPRESS TO MYSQL ====
// get the client
require("dotenv").config();
const mysql = require("mysql2");
// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER ||"root",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_DATABASE || "question", 
});



module.exports = connection;