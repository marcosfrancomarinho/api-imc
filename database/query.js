const { sequelize, DataTypes } = require("./connection")
const model = sequelize.define("indice", {
    name: {
        type: DataTypes.STRING
    },
    imc: {
        type: DataTypes.DOUBLE,
    },
    type: {
        type: DataTypes.STRING
    }
})
const selectDB = async () => {
    return await model.findAll({
        attributes: ["name", "imc", "type"]
    })
}
const insertDB = async function () {
    await model.create({
        name: this.name,
        imc: this.imc,
        type: this.type
    })
}
module.exports = { selectDB, insertDB }
