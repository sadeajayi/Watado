var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');

var User = require('../models/user');
//Register route
router.post('/register', (req, res, next) => {
    //Create newuser object
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success:false, msg: 'Failed to register user'});
        } else {
            res.json({success:false, msg: 'User registered'});
        }
    });

});

// Authenticate
router.post('/authenticate', function(req, res, next) {
    res.send('AUTHENTICATE');
});

//Profile
router.get('/profile', function(req, res, next) {
    res.send('PROFILE');
});


module.exports = router;

