// Dependencies
// ===============================================
const express = require('express');
const models = require('./models');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./utils/auth');
const MongoStore = require('connect-mongo')(session);
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
require('dotenv').config();

// Express Setup
// ===============================================
const app = express();
const PORT = process.env.PORT || 3001

// Replace with your mongoLab URI
const MONGO_URI = `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}@ds161485.mlab.com:61485/rdtclone`

// Mongoose's built in promise library is deprecated, replace it with ES2015 Promise
mongoose.Promise = global.Promise;

// Connect to the mongoDB instance and log a message
// on success or failure
// mongoose.connect(MONGO_URI);
mongoose.connect('mongodb://localhost/tester');
mongoose.connection
  .once('open', () => console.log('Connected to MongoDB instance.'))
  .on('error', error => console.log('Error connecting to MongoDB:', error));

  // Configures express to use sessions.  This places an encrypted identifier
// on the users cookie.  When a user makes a request, this middleware examines
// the cookie and modifies the request object to indicate which user made the request
// The cookie itself only contains the id of a session; more data about the session
// is stored inside of MongoDB.
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'aaabbbccc',
  store: new MongoStore({
    url: MONGO_URI,
    autoReconnect: true
  })
}));

// Passport is wired into express as a middleware. When a request comes in,
// Passport will examine the request's session (as set by the above config) and
// assign the current user to the 'req.user' object.  See also servces/auth.js
app.use(passport.initialize());
app.use(passport.session());

// GraphQL Setup
// ===============================================
app.use(cors());
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  }),
);

// Server Listener
// ===============================================
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});
