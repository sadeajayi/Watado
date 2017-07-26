var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var config = require('../config/database');

// User Schema
var UserSchema = mongoose.Schema({
    firstName: {
        type:String
    },
    lastName: {
        type:String
    },
    email: {
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required: true
    }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    var query = {username: username}
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
   bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
         // Store hash in your password DB. 
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
   });
}