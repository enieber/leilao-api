"use strict";

exports.comprador = function(baseUrl,request,expect) {
  describe('Requests for compradores', () => {

    it('test url /comprador', ()=>{
      request.get(baseUrl+'/comprador').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test valid URL /empresa/1/leilao/2/lote/2/comprador', () => {
      request.get(baseUrl+'/empresa/1/leilao/1/lote/2/comprador').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test valid URL /empresa/1/leilao/2/lote/2/comprador/1', () => {
      request.get(baseUrl+'/empresa/1/leilao/1/lote/2/comprador/1').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test bad request /empresa/1/leilao/2/lote/1/comprador/abc', () => {
      request.get(baseUrl+'/empresa/1/leilao/2/lote/1/comprador/abc').end(function assert(err, res) {
        expect(err).to.be.ok;
        expect(res).to.have.property('status', 400);
        done();
      });
    });

  });
}
