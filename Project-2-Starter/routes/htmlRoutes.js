var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Activity.findAll({}).then(function(dbActivities) {
      res.render("index", {
        msg: "Welcome!",
        activities: dbActivities
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/activity/:id", function(req, res) {
    db.Activity.findOne({ where: { id: req.params.id } }).then(function(
      dbActivity
    ) {
      res.render("activity", {
        activities: dbActivity
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};