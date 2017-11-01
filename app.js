var express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var cors = require('cors');
var flash = require('express-flash');
var async = require('async');
var crypto = require('crypto');
const config = require('./config/database');

// using SendGrid's v3 Node.js Library
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

//Handle errors on mongo 
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

/**
 * Create HTTP Server
 */
//var server = http.createServer(app);
var server = require('http').Server(app);

// Socket.io for real time communication
var io = require('socket.io').listen(server);

var port = process.env.PORT || 3000;


// CORS Middleware
app.use(cors());

// serve static files from template
app.use(express.static(path.join(__dirname, 'views')));

// Test Users Dropping Pins
io.on('connection', (socket )=>{
    console.log('new connection made');
    //var markers = localStorage.getItem('markers');
    //markers += socket;
    socket.on('add-marker', (data) => {
    // console.log(data.msg);
    //localStorage.setItem('markers', markers);
    io.emit('marker-added', data);
  });
});

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// include api routes
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
          return res.send('<h4>Sign Up Successful!</h4> <br> + <h3>Email: </h3>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
        }
      }
    });
});

//Forgot Password Implementation Not Working
/*
app.get('/forgot', function(req, res, next) {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
      console.log(user);
    if (!user) {
      req.flash('error', 'Password reset token is invalid or has expired.');
      return res.redirect('/forgot');
    }
    res.render('reset', {
     User: req.user
    });
  });
});


app.post('/forgot', function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(req, res, next) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          req.flash('error', 'No account with that email address exists.');
          return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport('SMTP', {
        service: 'GMail',
        auth: {
          user: 'watadoapp',
          pass: 'W3rdfutur'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'passwordreset@demo.com',
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});
*/

server.listen(port, () => {
  console.log('Server started on port ' + port);
});


