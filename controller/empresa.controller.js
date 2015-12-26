"use strict";

const models = require('../models');

exports.get = function(request, reply) {

  models.Empresas.findAll({
    attributes: ['idEmpresa', 'cnpj', 'razaoSocial', 'usuario', 'senha', 'email', 'telefone', 'logradouro', 'municipio','numero','complemento','bairro','cep'],
    include: [models.Leiloes]
  }).then(function (empresa) {
      reply(empresa);
  });
};
  //
  // this.model.findOneAsync({_id: id, owner: userId})
  // .then((todo) => {
  //   if (!todo) {
  //     return reply.notFound();
  //   }
  //
  //   reply(todo);
  // })
  // .catch((err) => {
  //   reply.badImplementation(err.message);
  // });
// };

exports.getById = function(request, reply) {
  let idEmpresa = request.params['idEmpresa'];
  models.Empresas.find({
    where:{
        idEmpresa: request.params['idEmpresa']
    },
    attributes: ['idEmpresa', 'cnpj', 'razaoSocial', 'usuario', 'senha', 'email', 'telefone', 'logradouro', 'municipio','numero','complemento','bairro','cep'],
    include: [models.Leiloes]
  }).then(function (empresa) {
      reply(empresa);
  })
};

exports.post = function(request, reply){
  models.Empresas.create({
      idEmpresa: request.payload['idEmpresa'],
      idLeilao: request.payload['idLeilao'],
      cnpj: request.payload['cnpj'],
      razaoSocial: request.payload['razaoSocial'],
      usuario: request.payload['usuario'],
      senha: request.payload['senha'],
      email: request.payload['email'],
      telefone: request.payload['telefone'],
      logradouro: request.payload['logradouro'],
      municipio: request.payload['municipio'],
      numero: request.payload['numero'],
      complemento: request.payload['complemento'],
      bairro: request.payload['bairro'],
      cep: request.payload['cep']
  }).then(function (empresa) {
      reply(empresa);
  });
};


// function destroy(){
//   models.Empresas.find({
//       where: {
//           idEmpresa: request.params['idEmpresa']
//       },
//       include: [models.Leilao]
//   }).then(function (empresa) {
//       models.Leilao.destroy({
//           where: {
//               idEmpresa:request.params['idEmpresa']
//           }
//       }).then(function (affectedRows) {
//           empresa.destroy().then(function () {
//               reply(affectedRows);
//           });
//       });
//   });
// }
