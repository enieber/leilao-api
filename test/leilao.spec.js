"use strict";

exports.leilao = function(baseUrl,request,expect) {
  describe('Requests for leilao', ()=> {

    it('test valid URL /leilao', (done) => {
      request.get(baseUrl+'/leilao').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test valid URL /leilao/1', (done) => {
      request.get(baseUrl+'/leilao/1').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test valid URL /empresa/1/leilao', (done) => {
      request.get(baseUrl+'/empresa/1/leilao').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test valid URL /empresa/1/leilao/1', (done) => {
      request.get(baseUrl+'/empresa/1/leilao/1').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test bad request /empresa/1/leilao/abc', (done) => {
      request.get(baseUrl+'/empresa/1/leilao/abc').end(function assert(err, res) {
        expect(err).to.be.ok;
        expect(res).to.have.property('status', 400);
        done();
      });
    });

    it('test post request /empresa/1/leilao', (done) => {
      request.post(baseUrl+'/empresa/1/leilao')
        .send({
          descricao: 'vendas de natal',
          idEmpresa: '18',
          vendedor: '1',
          inicioPrevisto: '2015-12-25'
        }).end(function assert(err, res) {
          expect(err).to.not.be.ok;
          expect(res).to.have.property('status', 200);
          done();
      });
    });
    it('test delete /empresa/1/leilao/1/destroy', (done) => {
     request.get(baseUrl+'/empresa/1/leilao/1/destroy').end(function assert(err, res){
       expect(err).to.not.be.ok;
       expect(res).to.have.property('status', 200);
       done();
     });
   });
  });
};
