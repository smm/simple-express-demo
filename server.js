const express = require("express")
const app = express()

app.get("/", function(req, res) {
    res.send("You are so fucking awesome!" + "\n")
})

app.listen(3000)
