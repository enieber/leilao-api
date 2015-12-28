"use strict";

exports.lote = function(baseUrl,request,expect) {
  describe('Requests for lotes', () => {

    it('test url /lote', (done) => {
      request.get(baseUrl+'/lote').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test url /lote/1', (done) => {
      request.get(baseUrl+'/lote/1').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test valid URL /empresa/1/leilao/1/lote', (done) => {
      request.get(baseUrl+'/empresa/1/leilao/1/lote').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test valid URL /empresa/1/leilao/1/lote/1', (done) => {
      request.get(baseUrl+'/empresa/1/leilao/1/lote/1').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test bad request /empresa/1/leilao/1/lote/abc', (done) => {
      request.get(baseUrl+'/empresa/1/leilao/1/lote/abc').end(function assert(err, res) {
        expect(err).to.be.ok;
        expect(res).to.have.property('status', 400);
        done();
      });
    });

    it('test post request /empresa/18/leilao/1/lote', (done) => {
      request.post(baseUrl+'/empresa/18/leilao/1/lote')
        .send({
          codigo: 1,
          numero: 86,
          quantidade: 5
        }).end(function assert(err, res) {
          expect(err).to.not.be.ok;
          expect(res).to.have.property('status', 200);
          done();
      });
    });

    it('test delete /empresa/18/leilao/1/lote/1/destroy', (done) => {
     request.get(baseUrl+'/empresa/18/leilao/1/lote/1/destroy').end(function assert(err, res){
       expect(err).to.not.be.ok;
       expect(res).to.have.property('status', 200);
       done();
     });
   });

  });
};
