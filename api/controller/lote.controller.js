"use strict";

const models = require('../model');

exports.get = function(request, reply) {
  models.Lotes.findAll({
    attributes: ['idLote', 'numero', 'descricao', 'quantidade', 'valor']
  }).then(function (leilao) {
      reply(leilao);
  })
};

exports.getByIdLeilao = function(request, reply) {
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
        models.Lotes.findAll({
          attributes: ['idLote', 'numero', 'descricao', 'quantidade', 'valor']
        }).then(function (lote) {
            reply(lote);
        })
      });
  });
};

exports.getById = function(request, reply) {
  models.Empresas.find({
      where: {
          idEmpresa: request.params['idEmpresa']
      },
      include: [models.Leiloes]
  }).then(function (empresa) {
      models.Leiloes.find({
          where: {
              codigo: request.params['codigo']
          },
          include: [models.Lotes]
      }).then(function (leilao) {
          models.Lotes.find({
            where: {
              idLote: request.params['idLote']
            }
          }).then(function (lote){
            reply(lote);
          });
      });
  });
};

exports.create = function(request, reply) {
  models.Empresas.find({
      where: {
          idEmpresa: request.params['idEmpresa']
      },
      include: [models.Leiloes]
  }).then(function (empresa) {
      models.Leiloes.find({
        where: {
          codigo: request.params['codigo']
        },
        include: [models.Lotes]
      }).then(function () {
        models.Lotes.create({
          idLote: request.payload['idLote'],
          numero: request.payload['numero'],
          quantidade: request.payload['quantidade']
        }).then(function(affectedRows) {
        reply(affectedRows);
      });
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
      models.Leiloes.find({
          where: {
              codigo:request.params['codigo']
          },
          include: [models.Lotes]
      }).then(function (affectedRows) {
        models.Lotes.destroy({
            where: {
                idLote: request.params['idLote']
            }
          }).then(function (affectedRows) {
              reply(affectedRows);
          });
      });
  });
}
