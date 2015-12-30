"use strict";

exports.create = function(baseUrl,request,expect) {
  describe('Create datas', () => {
       it('Create Empresa', (done) => {
         request.post(baseUrl+'/empresa')
           .send({
             cnpj: '12.345.123./0002-66',
             razaoSocial: 'Motivados por um mundo melhor',
             usuario: 'joa1234aeo',
             senha: '123JMJ123',
             email: 'jowaotesta@jmj.com.br',
             telefone: 6652515451,
             logradouro: 'Portoario',
             municipio: 'Sorriso',
             numero: 10,
             bairro: 'Centro',
             cep: 78530000
          }).end(function assert(err, res) {
             expect(err).to.not.be.ok;
             expect(res).to.have.property('status', 200);

             done();
         });
       });

       it('Create Leilao', (done) => {
         request.post(baseUrl+'/empresa/1/leilao')
           .send({
             codigo: 1,
             descricao: 'vendas de natal',
             vendedor: 1,
             inicioPrevisto: '2015-12-25'
           }).end(function assert(err, res) {
             expect(err).to.not.be.ok;
             expect(res).to.have.property('status', 200);
             done();
         });
       });

       it('Create Lote', (done) => {
         request.post(baseUrl+'/empresa/2/leilao/1/lote')
           .send({
             codigo: 1,
             numero: 86,
             descricao: 'vendas de natal',
             valor: 5135,
             quantidade: 5
           }).end(function assert(err, res) {
             expect(err).to.not.be.ok;
             expect(res).to.have.property('status', 200);
             done();
         });
         });

       it('Create Comprador', (done) => {
         request.post(baseUrl+'/empresa/2/leilao/1/lote/1/comprador')
           .send({
             codio: 1,
             nomeComprador: "Benedito",
             idComprador: 1,
             idEmpresa: 2,
             idLeilao: 3
           }).end(function assert(err, res) {
             expect(err).to.not.be.ok;
             expect(res).to.have.property('status', 200);
             done();
         });
       });

  });
}
