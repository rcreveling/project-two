const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load Client model
const db = require('../models');

module.exports = function(passport) {
    passport.use(
      new LocalStrategy({ usernameField: 'phone' }, (phone, password, done) => {
        // Match user
        db.Client.findOne({
            where : { phone: phone }
        }).then(user => {
            if (!user) {
                // That phone number is not registered  <<<<< WHAT TO DO
                return done(null, false, { message: 'That phone is not registered' });
            }
    
            // Match password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    console.log("authenicated");
                    return done(null, user);
                } else {
                    // password is incorrect <<<<< WHAT TO DO
                    return done(null, false);
                };
            });
        });
      })
    );
  
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
  
    passport.deserializeUser( function(id, done) {
        db.Client.findByPk(id).then(function(client) {
            done(null, client);
        });
    });
  };