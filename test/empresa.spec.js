"use strict";

exports.empresa = function(baseUrl,request,expect) {
  describe('when requested at /empresa', ()=> {


    it('test valid URL /empresa', (done) => {
      request.get(baseUrl+'/empresa').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test valid URL /empresa/123', (done) => {
      request.get(baseUrl+'/empresa/123').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test invalid URL /empresasss', (done) => {
      request.get(baseUrl+'/empresasss').end(function assert(err, res) {
        expect(err).to.be.ok;
        expect(res).to.have.property('status', 404);
        done();
      });
    });

    it('test invalid URL /empresa/abc', (done) => {
      request.get(baseUrl+'/empresa/abc').end(function assert(err, res) {
        expect(err).to.be.ok;
        expect(res).to.have.property('status', 400);
        done();
      });
    });

    it('test post /empresa', (done) => {
      request.post(baseUrl+'/empresa')
        .send({
      idEmpresa: 4,
      idLeilao: 4,
      cnpj: '12.345.678./0002-96',
      razaoSocial: 'Motivados por um mundo melhor',
      usuario: 'joao',
      senha: '123JMJ123',
      email: 'joaotest@jmj.com.br',
      telefone: 6652515451,
      logradouro: 'Portoario',
      municipio: 'Sorriso',
      numero: 10,
      bairro: 'Centro',
      cep: 78588888
      }).end(function assert(err, res) {
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);

        done();
      });
    });

  });
}
