const { Sequelize, DataTypes } = require("sequelize")
const path = require("path")
require("dotenv").config({ path: path.join(__dirname, "../.env") })
const sequelize = new Sequelize({
    database: process.env.DATA_BASE,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    dialect: process.env.DIALECT
})
module.exports = { sequelize, DataTypes }
