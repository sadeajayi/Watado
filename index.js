var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var cors = require('cors');

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/watado');
var db = mongoose.connection;

var routes = require('./routes/users');
const port = process.env.PORT || 8080;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('openUri', function () {
  // we're connected!
});

//use sessions for tracking logins
app.use(session({
  secret: 'new login',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS Middleware
app.use(cors());

// serve static files from template
app.use(express.static(__dirname + '/views'));

// include routes

app.use('/', routes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


// listen on port 3000
/*app.listen(3000, function () {
  console.log('Watado app listening on port 3000');
});
*/
app.listen(port, () => {
  console.log('Server started on port '+port);
});


/*
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var cors = require('cors');
//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/watado');
var db = mongoose.connection;

var users = require('./routes/users');
//handle mongo error

db.on('error', console.error.bind(console, 'connection error:'));
db.once('openUri', function () {
  // we're connected!
});

//use sessions for tracking logins
app.use(session({
  secret: 'new login',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// CORS Middleware
app.use(cors());


// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// serve static files from template
app.use(express.static(__dirname + '/views'));

// Body Parser Middleware
app.use(bodyParser.json());

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

// listen on port 3000
app.listen(3000, function () {
  console.log('Watado app listening on port 3000');
});

*/
