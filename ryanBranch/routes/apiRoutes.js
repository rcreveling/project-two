var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/activities/", function(req, res) {
    db.Activity.findAll({}).then(function(dbActivities) {
      res.json(dbActivities);
    });
  });

  // Create a new example
  app.post("/api/activities/", function(req, res) {
    db.Activity.create(req.body).then(function(dbActivity) {
      res.json(dbActivity);
    });
  });

  // Delete an example by id
  app.delete("/api/activities/:id", function(req, res) {
    db.Activity.destroy({ where: { id: req.params.id } }).then(function(dbActivity) {
      res.json(dbActivity);
    });
  });
};
