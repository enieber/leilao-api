"use strict";

const models = require('../models');

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
        }).then(function (leilao) {
            reply(leilao);
        })
      });
  });
};

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
          models.Lotes.find({
            where: {
              idLote: request.params['idLote']
            }
          }).then(function (lote){
            reply(lote);
          });
      });
  });
}
