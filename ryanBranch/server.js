require("dotenv").config();

const express = require('express')
const app = express()
const path = require('path');
const db = require("./models")
var PORT = process.env.PORT || 3000;
app.use(express.static("public"))
const routes = require('./routes/htmlRoutes')
require("./routes/apiRoutes")


routes(app, path);

app.listen(3000);