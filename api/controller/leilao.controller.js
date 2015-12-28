"use strict";

const models = require('../model');

exports.get = function(request, reply) {
  models.Leiloes.findAll({
    attributes: ['descricao', 'vendedor', 'inicioPrevisto'],
    include: [models.Lotes],
    include: [models.Compradores]
  }).then(function (leilao) {
      reply(leilao);
  })
}

exports.getByIdEmpresa = function(request, reply) {
  models.Empresas.find({
      where: {
          idEmpresa: request.params['idEmpresa']
      }
  }).then(function (empresa) {
    models.Leiloes.find({
      where: {
          idEmpresa: request.params['idEmpresa']
      },
      include: [models.Lotes],
      include: [models.Compradores]
    }).then(function (leilao) {
        reply(leilao);
    })
  });
}

exports.getById = function(request, reply) {
  models.Empresas.find({
      where: {
          idEmpresa: request.params['idEmpresa']
      }
  }).then(function (empresa) {
      models.Leiloes.find({
          where: {
              codigo: request.params['codigo']
          }
      }).then(function (leilao) {
          reply(leilao);
      });
  });
}

// function update() {
//   models.Leilao.find({
//       where: {
//           idEmpresa: request.params['idEmpresa'],
//           codigo: request.payload['codigo']
//       }
//   }).then(function (leilao) {
//
//       models.Leilao.update({
//
//         // if(request.payload['descricao'] != null && (request.payload['descricao'] != descricao))
//         descricao: request.payload['descricao'],
//
//         // if(request.payload['vendedor'] != null && (request.payload['vendedor'] != vendedor))
//         vendedor: request.payload['vendedor'],
//
//         // if(request.payload['inicioPrevisto'] != null && (request.payload['inicioPrevisto'] != inicioPrevisto))
//         inicioPrevisto: request.payload['inicioPrevisto']
//
//       }).then(function () {
//           reply.redirect('/');
//       });
//   });
// }

exports.create = function(request, reply) {
  models.Empresas.find({
      where: {
          idEmpresa: request.params['idEmpresa']
      }
  }).then(function (empresa) {
      models.Leiloes.create({
        idEmpresa: empresa.idEmpresa,
        descricao: request.payload['descricao'],
        vendedor: request.payload['vendedor'],
        inicioPrevisto: request.payload['inicioPrevisto']
      }).then(function () {
          reply.redirect('/leilao');
      });
  });
};
exports.destroy = function(request, reply) {
  models.Empresas.find({
      where: {
          idEmpresa: request.params['idEmpresa']
      },
      include: [models.Leiloes]
  }).then(function (empresa) {
      models.Leiloes.destroy({
          where: {
              codigo:request.params['codigo']
          },
          include: [models.Lotes],
          include: [models.Compradores]
      }).then(function (affectedRows) {
          reply(affectedRows);
      });
  });
}
