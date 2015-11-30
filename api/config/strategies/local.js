var LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy(
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
);