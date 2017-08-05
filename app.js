var express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var cors = require('cors');
const config = require('./config/database');

//connect to MongoDB
//mongoose.connect('mongodb://localhost:27017/watado');

mongoose.connect('mongodb://heroku_362jnj2q:uiqngj64r6pjvf41vmnquo32go@ds135983.mlab.com:35983/heroku_362jnj2q', function(err) {
    if (err) {
        console.log('Not connected to the database: ' + err);
    } else {
        console.log('Successfully connected to MongoDB');
    }
});
var db = mongoose.connection;

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+ config.database);
});

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('openUri', function () {
  // we're connected!
  console.log('Database error: ');
});

var app = express();
var users = require('./routes/users');

//use sessions for tracking logins
app.use(session({
  secret: 'new login',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

var port = process.env.PORT || 3000;

// CORS Middleware
app.use(cors());

// serve static files from template
app.use(express.static(path.join(__dirname, 'views')));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// include routes

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// GET route after registering

app.get('/authenticate', function (req, res, next) {
//router.get('/map-page', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        } else {
          return res.send('<h4>Sign Up Successful!</h4> <br> <h3>Name: </h3>' + user.username + '<h3>Email: </h3>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
        }
      }
    });
});

// listen on port 3000
/*
app.listen(3000, function () {
  console.log('Watado app listening on port 3000');
});
*/
if (process.env.NODE_ENV !== 'production') {
require('dotenv').config()
}

app.listen(port, () => {
  console.log('Server started on port ' + port);
});


