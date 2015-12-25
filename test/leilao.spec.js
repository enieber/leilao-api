"use strict";

exports.leilao = function(baseUrl,request,expect) {
  describe('when request at /leilao', () => {
    it('test url /leilao', ()=>{
      request.get(baseUrl+'/leilao').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });
  });
}
