"use strict";

exports.test = function(baseUrl,request,expect) {
  describe('test api', function (){
      it('test api running', (done) => {
        request.get(baseUrl+'/test').end(function assert(err, res){
          expect(err).to.not.be.ok;
          expect(res).to.have.property('status', 200);
          done();
        });
      });
    });
};
