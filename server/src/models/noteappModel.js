const sequelize = require('../config/dbConfig')
const { DataTypes } = require('sequelize')


const Note = sequelize.define('Note', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    note: {
        type: DataTypes.STRING,
        allowNull: false,
        uinique: true
    }
})
module.exports = Note