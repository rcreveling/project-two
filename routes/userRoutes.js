const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const db = require('../models');
// const { forwardAuthenticated } = require('../config/auth');

module.exports = function (app) {

    app.post('/signup', function(req, res) {
        console.log("signup post req.body: " + JSON.stringify(req.body));
        // logic to gather Client data and save to db
        const { fname, lname, phone, email, dob, address, password, password2 } = req.body;

        // ====================================================================
        // validate signup form
        // let errors = [];

        // if (!name || !email || !password || !password2) {
        //     errors.push({ msg: 'Please enter all fields' });
        // }

        // if (password != password2) {
        //     errors.push({ msg: 'Passwords do not match' });
        // }

        // if (password.length < 6) {
        //     errors.push({ msg: 'Password must be at least 6 characters' });
        // }

        // if (errors.length > 0) {
        //     res.render('register', {
        //     errors,
        //     name,
        //     email,
        //     password,
        //     password2
        //     });
        // } else {
        // end of validate signup form
        // ====================================================================

            db.Client.findOne({where : { phone: phone}}).then(user => {
            if (user) {
                // errors.push({ msg: 'Email already exists' });
                console.log( 'Email already exists' );
                // res.render('register', {
                // errors,
                // name,
                // email,
                // password,
                // password2
                // });
            } else {
                var name = fname + " " + lname
                const newClient = ({
                    name,
                    address,
                    phone,
                    dob,
                    email,
                    password
                });

                bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newClient.password, salt, (err, hash) => {
                    if (err) throw err;
                    newClient.password = hash;
                    db.Client.create( newClient )
                    .then(user => {
                        console.log("user: " + JSON.stringify(user));
                        // req.flash(
                        // 'success_msg',
                        // 'You are now registered and can log in'
                        // );
                        // res.redirect('/users/login');
                    })
                    .catch(err => console.log(err));
                });
                });
            }
            });
    });
    
    app.post('/login', function(req,res) {
        console.log("signup post req.body: " + JSON.stringify(req.body));
        // call to passport for authentication
        passport.authenticate('local', {
            successRedirect: '/index',
            failureRedirect: '/login',
            failureFlash: true
          })(req, res, next);
    });
};