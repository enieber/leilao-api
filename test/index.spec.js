"use strict";

const expect = require('chai').expect;
const request = require('superagent');
const empresaTeste = require('./gets/empresa.spec.js');
const compradorTeste = require('./gets/comprador.spec');
const leilaoTeste = require('./gets/leilao.spec');
const loteTeste = require('./gets/lote.spec');
const connection = require('./gets/index.spec');
const posts = require('./post.spec');
const deletes = require('./delete.spec');
const baseUrl = "http://localhost:3000";

describe('Api leilao', function (){
  connection.test(baseUrl, request, expect);
  empresaTeste.empresa(baseUrl,request,expect);
  leilaoTeste.leilao(baseUrl,request,expect);
  loteTeste.lote(baseUrl,request,expect);
  compradorTeste.comprador(baseUrl,request,expect);
  posts.create(baseUrl,request,expect);
  deletes.delete(baseUrl, request, expect);
});
