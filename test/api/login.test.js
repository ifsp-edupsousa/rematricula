var request = require('supertest'),
	app = require('../../api/app.js'),
	expect = require('chai').expect;
	
describe('#login', function() {
	describe('POST /login', function() {
		it('quando o usuário for desconhecido deve redirecionar para /login', function(done) {
			request(app)
				.post('/login')
				.send({
					usuario: 'naoExiste',
					senha: 'abcde'
				})
				.expect(302)
				.expect(function(res) {
					expect(res.headers.location).to.be.equal('/login');
				})
				.end(done);
		})
		it('quando o usuário e senha estiverem corretos deve redirecionar para /', function(done) {
			request(app)
				.post('/login')
				.send({
					usuario: 'admin',
					senha: '123mudar'
				})
				.expect(302)
				.expect(function(res) {
					expect(res.headers.location).to.be.equal('/');
				})
				.end(done);
		})
	});
});