const express = require("express")
const cors = require("cors")
const routers = require("./router")
const PORT = process.env.PORT|| 3000
const app = express()
app.use(express.json({ type: "application/json" }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(routers)
app.listen(PORT, () => {
    console.log("Server Online")
})