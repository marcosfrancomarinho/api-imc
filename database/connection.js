const { Sequelize, DataTypes } = require("sequelize")
const path = require("path")
const sequelize = new Sequelize({
    database: "ycaijoal",
    username: "ycaijoal",
    password: "AqY1N4jTNF3AAXUSz4a7VUA0RJi2MOAr",
    host: "isabelle.db.elephantsql.com",
    dialect: "postgres"
})
module.exports = { sequelize, DataTypes }
