require("dotenv").config();

const express = require('express')
const app = express()
const path = require('path');
const db = require("./models")

const passport = require('passport')
const session = require('express-session')


app.use(express.static("public"))
const routes = require('./routes/htmlRoutes')
require("./routes/apiRoutes")
routes(app, path)

// signup and login (logoff?) routes
require("./routes/userRoutes")(app)

// passport related
require('./config/passport')(passport)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Express session used to persist session data
app.use(
  session({
    secret: '05LyfumhQAnRyJjL',
    resave: true,
    saveUninitialized: true
  })
)

var PORT = process.env.PORT || 3000

var syncOptions = { force: false }

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
    app.listen(PORT, function () {
        console.log(
            "==> Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});

module.exports = app;

