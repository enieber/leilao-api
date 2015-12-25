"use strict";

exports.empresa = function(baseUrl,request,expect) {
  describe('when requested at /empresa', ()=> {
    it('test url /empresa', (done) => {
      request.get(baseUrl+'/empresa').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });
  });
}