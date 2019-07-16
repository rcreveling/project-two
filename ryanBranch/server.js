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
var syncOptions = { force: false };

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
    app.listen(PORT, function () {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});

module.exports = app;