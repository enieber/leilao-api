"use strict";

const expect = require('chai').expect;
const request = require('superagent');
const empresaTeste = require('./empresa.spec.js');
const compradorTeste = require('./comprador.spec');
const leilaoTeste = require('./leilao.spec');
const loteTeste = require('./lote.spec');

describe('Api leilao', function (){
  let baseUrl = "http://localhost:3000";
  describe('test server', function (){
    it('test server running', (done) => {
      request.get(baseUrl+'/test').end(function assert(err, res){
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        done();
      });
    });
  });
  empresaTeste.empresa(baseUrl,request,expect);
  leilaoTeste.leilao(baseUrl,request,expect);
  loteTeste.lote(baseUrl,request,expect);
  compradorTeste.comprador(baseUrl,request,expect);
});
