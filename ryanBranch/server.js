require("dotenv").config();

const express = require('express')
const app = express()
const path = require('path');
const db = require("./models")
var PORT = process.env.PORT || 3000;

require("./routes/apiRoutes")
require("./routes/htmlRoutes")
app.use(express.static("public"))
app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/login.html'))
})
app.get("/topics", function (req, res) {
    res.sendfile(path.join(__dirname, 'public/topics.html'))
})
app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/signup.html'))
})
app.get("/welcome", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/welcome.html'))
})

app.listen(3000);