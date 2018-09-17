require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const expressJWT = require('express-jwt');
const favicon = require('serve-favicon');
const logger = require('morgan');
const path = require('path');

// App instance
const app = express();


// Set up middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false}));

//Helper functions: this allows our server to parse incoming token from the client
//this is middleware so it has access to the incoming request
function fromRequest(req){
    if(req.body.headers.Authorization &&
      req.body.headers.Authorization.split(' ')[0] === 'Bearer'){
      return req.body.headers.Authorization.split(' ')[1];
    }
    return null;
  }

// Controllers
//all auth routes are protected exept for POST to /auth/login and POST /auth/signup
//remember to pass JWT_SECRT (it will break without it)
//Note: the unless portion is only needed if you need exceptions
app.use('/auth', expressJWT({
  secret: process.env.JWT_SECRET,
  getToken: fromRequest
}).unless({
  path: [
    { url: '/auth/login', methods: ['POST'] },
    { url: '/auth/signup', methods: ['POST'] }
  ]
}), require('./controllers/auth'));

//wildcard route
app.get('*', function(req, res, next) {
	res.send({ message: 'Unknown Route' });
});

//listen on specified port or default to 3000
app.listen(process.env.PORT || 3000);
