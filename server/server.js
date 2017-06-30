const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const mongoose = require('mongoose');

const app = express();
const dist = path.join(__dirname, './dist')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + './dist')));

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017', (err) => {
  if (err) console.log('DB connection error:', err);
  else console.log('DB connection successful')
})

const User = require('./models/User');

// Passport
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy

const MongoStore = require('connect-mongo')(session);

app.use(session({
  secret: 'baked bread',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({
  
}))