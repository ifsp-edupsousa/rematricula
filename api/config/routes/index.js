module.exports = function(app, passport) {
	app.get('/', function(req, res) {
		res.end('');
	});
	
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/login'
	}));
};