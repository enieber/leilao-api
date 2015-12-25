"use strict";

exports.comprador = function(baseUrl,request,expect) {
  describe('when request at /compradores', () => {
    it('test url /compradores', ()=>{
      request.get(baseUrl+'/compradores').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });
  });
}
