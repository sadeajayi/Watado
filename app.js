
//Server set-up
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var cors = require('cors');
var mongoose = require('mongoose');
var mongojs = require('mongojs');

var app = express();

/*app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + "/public"))
})
*/

//Static Files
app.use(express.static(__dirname + "/public")); //directs to homepage


var server = app.listen(3000, function(){
console.log("Server running on port 3000");
});


