"use strict";

exports.empresa = function(baseUrl,request,expect) {
  describe('Requests for empresa', ()=> {

    it('test valid URL /empresa', (done) => {
      request.get(baseUrl+'/empresa').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test bad request /empresa/abc', (done) => {
      request.get(baseUrl+'/empresa/abc').end(function assert(err, res) {
        expect(err).to.be.ok;
        expect(res).to.have.property('status', 400);
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

    // it('test post /empresa', (done) => {
    //   request.post(baseUrl+'/empresa')
    //     .send({
    //       cnpj: '12.345.123./0002-86',
    //       razaoSocial: 'Motivados por um mundo melhor',
    //       usuario: 'joa1234eo',
    //       senha: '123JMJ123',
    //       email: 'joaotesta@jmj.com.br',
    //       telefone: 6652515451,
    //       logradouro: 'Portoario',
    //       municipio: 'Sorriso',
    //       numero: 10,
    //       bairro: 'Centro',
    //       cep: 78530000
    //     }).end(function assert(err, res) {
    //       expect(err).to.not.be.ok;
    //       expect(res).to.have.property('status', 200);
    //
    //       done();
    //   });
    // });
    //
    // it('test delete /empresa/1/destroy', (done) => {
    //   request.get(baseUrl+'/empresa/1/destroy').end(function assert(err, res){
    //     expect(err).to.not.be.ok;
    //     expect(res).to.have.property('status', 200);
    //     done();
    //   });
    // });

  });
}
