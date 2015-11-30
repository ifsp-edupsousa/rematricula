var request = require('supertest'),
	app = require('../../api/config/express'),
	expect = require('chai').expect;
	
describe('#app', function() {
	it('app deve ser uma função', function() {
		expect(app).to.be.a('function');
	});
	describe('Requisições Simples', function() {
		it('GET / deve retornar status 200', function(done) {
			request(app)
				.get('/')
				.expect(200)
				.end(done);
		});
		it('GET /issoNaoExiste deve retornar status 404', function(done) {
			request(app)
				.get('/issoNaoExiste')
				.expect(404)
				.end(done);
		});
	});
	
});