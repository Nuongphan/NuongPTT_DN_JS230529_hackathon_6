const {Sequelize}   = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize('noteapp', 'root','1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize