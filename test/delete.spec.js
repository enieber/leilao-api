"use strict";

exports.delete = function(baseUrl,request,expect) {

  it('Delete Leilao', (done) => {
   request.get(baseUrl+'/empresa/1/leilao/1/destroy').end(function assert(err, res){
     expect(err).to.not.be.ok;
     expect(res).to.have.property('status', 200);
     done();
   });
  });

  it('Delete Empresa', (done) => {
    request.get(baseUrl+'/empresa/1/destroy').end(function assert(err, res) {
          expect(err).to.not.be.ok;
          expect(res).to.have.property('status', 200);
          done();
      });
    });
}
