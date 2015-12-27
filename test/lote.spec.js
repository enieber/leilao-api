"use strict";

exports.lote = function(baseUrl,request,expect) {
  describe('when request at lotes', () => {

    it('test url /lote', () => {
      request.get(baseUrl+'/lote').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test bad request /empresa/1/leilao/abc/lote', (done) => {
      request.get(baseUrl+'/empresa/1/leilao/abc/lote').end(function assert(err, res) {
        expect(err).to.be.ok;
        expect(res).to.have.property('status', 400);
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
  });
};
