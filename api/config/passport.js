module.exports = function(envConfig) {
	var passport = require('passport');
	var ldapStrategy = require('./strategies/ldap')(envConfig.ldapAuthServer);
	
	passport.use('ldap-login', ldapStrategy);
	
	passport.serializeUser(function(user, done) {
		done(null, user.uid);
	});
	
	passport.deserializeUser(function(id, done) {
		done(null, {id: id});
	});
	
	return passport;
};