module.exports = function(envConfig) {
	var express = require('express'),
		morgan = require('morgan'),
		bodyParser = require('body-parser'),
		cookieParser = require('cookie-parser'),
		session = require('express-session'),
		methodOverride = require('method-override'),
		passport = require('./passport')(envConfig),
		createRoutes = require('./routes');
	
	var app = express();

	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(session({
			secret: 'oRatoRoeuARoupaDoReiDeRoma', 
			resave: false, 
			saveUninitialized: false 
		}));
		
	app.use(passport.initialize());
	app.use(passport.session());
	
	createRoutes(app, passport);

	return app;
};