var db = require("../models");

module.exports = function (app) {
    // Get all examples
    app.get("/api/activities/", function (req, res) {
        db.Activity.findAll({}).then(function (dbActivities) {
            res.json(dbActivities);
        });
    });

    // Get route for retrieving a single post
    app.get("/api/activities/:id", function (req, res) {
        db.Activity.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbActivity) {
                res.json(dbActivity);
            });
    });

    // Create a new example
    app.post("/api/activities/", function (req, res) {
        db.Activity.create(req.body).then(function (dbActivity) {
            res.json(dbActivity);
        });
    });

    // Delete an example by id
    app.delete("/api/activities/:id", function (req, res) {
        db.Activity.destroy({ where: { id: req.params.id } }).then(function (dbActivity) {
            res.json(dbActivity);
        });
    });

    // PUT route for updating posts
    app.put("/api/activities", function (req, res) {
        db.Activity.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbActivity) {
                res.json(dbActivity);
            });
    });

    app.get("/api/events/", function (req, res) {
        db.Event.findAll({}).then(function (dbEvents) {
            res.json(dbEvents)
        })
    })
};
