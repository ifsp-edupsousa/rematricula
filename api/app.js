var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var methodOverride = require('method-override');
var LocalStrategy = require('passport-local').Strategy;

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

passport.use('local-login', new LocalStrategy(
	{
		usernameField: 'usuario',
    	passwordField: 'senha'
	},
	function(usuario, senha, done) {
		if (usuario === 'admin' && senha === '123mudar') {
			return done(null, {id: 1, usuario: 'admin'});
		}
		return done(null, false, {message: 'Usuário ou senha incorretos.'});
	}
));

passport.serializeUser(function(user, done) {
  	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  	done(null, {id: id});
});

app.get('/', function(req, res) {
	res.end('');
});

app.post('/login', passport.authenticate('local-login', {
	successRedirect: '/',
	failureRedirect: '/login'
}));

module.exports = app;