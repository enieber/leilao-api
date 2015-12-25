"use strict";

exports.lote = function(baseUrl,request,expect) {
  describe('when request at /lotes', () => {
    it('test url /lotes ', ()=>{
      request.get(baseUrl+'/lotes').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });
  });
}
