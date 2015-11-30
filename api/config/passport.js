var passport = require('passport');
var localStrategy = require('./strategies/local')

passport.use('local-login', localStrategy);

passport.serializeUser(function(user, done) {
  	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  	done(null, {id: id});
});

module.exports = passport;