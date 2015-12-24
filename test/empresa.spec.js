'use strict';
const expect = require('chai').expect;
const request = require('superagent');

describe('Api leilao', function (){
  const baseUrl = "http://localhost:3000";
  describe('when requested at /empresa', ()=> {
    it('test url /empresa', (done) => {
      request.get(baseUrl+'/empresa').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });
  });
  describe('when request at /leilao', () => {
    it('test url / ', ()=>{
      request.get(baseUrl+'/leilao').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });
  });
  describe('when request at /lotes', () => {
    it('test url / ', ()=>{
      request.get(baseUrl+'/lotes').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });
  });
  describe('when request at /compradores', () => {
    it('test url / ', ()=>{
      request.get(baseUrl+'/compradores').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });
  });
});
