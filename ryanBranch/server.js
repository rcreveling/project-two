require("dotenv").config();

const express = require('express')
const app = express()
const path = require('path');
const db = require("./models")
var PORT = process.env.PORT || 3000;

require("./routes/apiRoutes")
require("./routes/htmlRoutes")
app.use(express.static("public"))


app.listen(3000);