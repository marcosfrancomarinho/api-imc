const express = require("express")
const fs = require("fs")
const path = require("path")
const routers = express.Router()

routers.get("/", (req, res) => {
    const { indices } = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json"), "utf8"))
    res.status(200).type("json").send(indices)
})

routers.post("/", (req, res) => {
    const { indices } = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json"), "utf8"))
    indices.push(req.body)
    fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify({ indices: indices }))
    res.status(200).type("json").send({
        data: req.body,
        add: true
    })
})
module.exports = routers