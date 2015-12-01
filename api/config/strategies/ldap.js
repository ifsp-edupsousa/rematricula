var LdapStrategy = require('passport-ldapauth').Strategy;

module.exports = function(serverConfig) {
	return new LdapStrategy(
		{
			usernameField: 'usuario',
			passwordField: 'senha',
			server: serverConfig
		}
	);
};