const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const db = require('../models');
// const { forwardAuthenticated } = require('../config/auth');

module.exports = function (app) {

    router.post('/signup', function(req, res) {
        console.log("signup post req.body: " + JSON.stringify(req.body));
        // logic to gather Client data and save to db
    });
    
    router.post('/login', function(req,res) {
        console.log("signup post req.body: " + JSON.stringify(req.body));
        // call to passport for authentication
    });
};