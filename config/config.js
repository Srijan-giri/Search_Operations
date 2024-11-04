require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_NAME,
    password: process.env.DB_PASS,
    database: process.env.DB_DBNAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
}
