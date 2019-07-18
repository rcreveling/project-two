const express = require('express')

function htmlRouting(app, path) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/welcome.html'))
    })
    app.get('/addevent', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/addevent.html'))
    })
    app.get("/login", function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/login.html'))
    })
    app.get("/topics", function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/topics.html'))
    })
    app.get("/signup", function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/signup.html'))
    })
    app.get("/welcome", function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/welcome.html'))
    })
    app.get("/admin", function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/admin.html'))
    })
}

module.exports = htmlRouting