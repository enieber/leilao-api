"use strict";

const models = require('../models');

exports.get = function(request, reply) {
  models.Compradores.findAll({
    attributes: ['idComprador','idEmpresa','codigo'],
  }).then(function (comprador) {
      reply(comprador);
  })
};

exports.getById = function(request, reply) {
  models.Compradores.find({
    where: {
        idComprador: request.params['idComprador']
    },
    attributes: ['idComprador','idEmpresa','codigo'],
  }).then(function (comprador) {
      reply(comprador);
  })
};

exports.getByLote = function(request, reply){
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
        }).then(function (lote) {
          models.Compradores.findAll({
            attributes: ['idComprador','idEmpresa','codigo'],
          }).then(function (comprador) {
              reply(comprador);
          })
        })
      });
  });
}
exports.getByIdFather = function(request, reply){
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
        }).then(function (lote) {
          models.Compradores.find({
            where: {
                idComprador: request.params['idComprador']
            }
          }).then(function (comprador) {
              reply(comprador);
          })
        })
      });
  });
}
