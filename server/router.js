const express = require("express")
const path = require("path")
const { insertDB, selectDB } = require("../database/query")
const routers = express.Router()

routers.get("/", async (req, res) => {
    const response = await selectDB()
    res.status(200).type("json").send(response)
})
routers.post("/", async (req, res) => {
    const data = req.body
    await insertDB.bind({
        name: data.name,
        imc: parseFloat(data.imc),
        type: data.type
    })()
    res.status(201).type("json").send(data)
})
module.exports = routers