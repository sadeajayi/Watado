var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
var User = require('../models/user');

//POST route for updating data
router.post('/register', function (req, res, next) {
    let newUser = new User({
      email:req.body.email,
      username:req.body.username,
      password:req.body.password,
      passwordConf:req.body.passwordConf
    });
  
    // confirm that user typed same password twice
    if (req.body.password != req.body.passwordConf) {
      var err = new Error('Passwords do not match.');
      err.status = 400;
      res.send("passwords dont match");
      return next(err);
    }
  
    User.addUser(newUser, (err, user) => {
      if(err){
        res.json({success: false, msg:'Failed to register user'});
      } else {
        res.json({success: true, msg:'User registered'});
      }
    });
  /*if (req.body.email &&
    req.body.name &&
    req.body.password &&
    req.body.passwordConf) {
  let newUser = new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    passwordConf:req.body.passwordConf,
  });
*/

  
})

router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  
  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }
    
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});


router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});
module.exports = router;

