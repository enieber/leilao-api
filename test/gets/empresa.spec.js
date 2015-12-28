"use strict";

exports.empresa = function(baseUrl,request,expect) {
  describe('Requests for empresa', ()=> {

    it('test valid URL /empresa', (done) => {
      request.get(baseUrl+'/empresa').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test valid URL /empresa/123', (done) => {
      request.get(baseUrl+'/empresa/123').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });

    it('test bad request /empresa/abc', (done) => {
      request.get(baseUrl+'/empresa/abc').end(function assert(err, res) {
        expect(err).to.be.ok;
        expect(res).to.have.property('status', 400);
        done();
      });
    });
     
    });
}
