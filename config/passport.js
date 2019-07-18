const LocalStrategy = require('passport-local').Strategy;
// const User = require("../models");
const bcrypt = require('bcryptjs');

// Load Client model
const db = require('../models');

module.exports = function(passport) {
    passport.use(
      new LocalStrategy({ usernameField: 'phone' }, (phone, password, done) => {
        // Match user
        db.User.findOne({
            where : { phone: phone }
        }).then(user => {
            if (!user) {
                // That phone number is not registered
                return done(null, false);
            }
    
            // Match password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    // password is incorrect
                    return done(null, false);
                };
            });
        });
      })
    );
  
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
  
    passport.deserializeUser(function(id, done) {
        db.User.findByPk(id, function(client) {
            done(null, client);
        });
    });
  };