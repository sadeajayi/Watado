
//Server set-up
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var cors = require('cors');
var mongoose = require('mongoose');
var mongojs = require('mongojs');
var config = require('./config/database');

//Connect to Database
var connect = mongoose.connect(config.database,{
    useMongoClient:true
});

//On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database' + config.database);
});

var app = express();


var users = require('./routes/users');
var index = require('./routes/index');

//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', users);

app.use('/', index);

//CORS Middleware
app.use(cors());

//Passport MiddleWare
//app.use(passp)

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


//Set Static Files
//app.use(express.static(__dirname + "/public")); //directs to homepage
app.use(express.static(path.join(__dirname, 'client')));


//Start server
var server = app.listen(3000, function(){
console.log("Server running on port 3000");
});


