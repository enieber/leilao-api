"use strict";

exports.delete = function(baseUrl,request,expect) {
  describe('Delete datas', () => {

    it('Delete Comprador', (done) => {
      request.delete(baseUrl+'/empresa/2/leilao/1/lote/1/comprador/1/destroy').end(function assert(err, res) {
            expect(err).to.not.be.ok;
            expect(res).to.have.property('status', 200);
            done();
        });
      });

    it('Delete Lote', (done) => {
      request.delete(baseUrl+'/empresa/1/leilao/2/lote/2/destroy').end(function assert(err, res) {
            expect(err).to.not.be.ok;
            expect(res).to.have.property('status', 200);
            done();
        });
      });

    it('Delete Leilao', (done) => {
     request.delete(baseUrl+'/empresa/1/leilao/1/destroy').end(function assert(err, res){
       expect(err).to.not.be.ok;
       expect(res).to.have.property('status', 200);
       done();
     });
    });
    it('Delete Empresa', (done) => {
      request.delete(baseUrl+'/empresa/1/destroy').end(function assert(err, res) {
            expect(err).to.not.be.ok;
            expect(res).to.have.property('status', 200);
            done();
      });
    });

  });
}
