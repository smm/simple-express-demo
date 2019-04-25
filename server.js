const express = require("express")
const app = express()

app.get("/", function(req, res) {
    res.send("You are awesome!")
})

app.listen(3000)
