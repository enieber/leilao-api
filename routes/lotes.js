'use strict';

var models = require('../models');

module.exports = function () {
    return [
        {
            method: 'GET',
            path: '/lotes',
            handler: function (request, reply) {
                models.Lotes.findAll().then(function (leilao) {
                    reply(leilao);
                })
            }
        }, {
            method: 'POST',
            path: '/empresa/{idEmpresa}/leilao/{codigo}/lotes',
            handler: function (request, reply) {

                models.Empresa.find({
                    where: {
                        idEmpresa: request.params['idEmpresa']
                    }
                }).then(function (empresa) {
                  models.Leilao.find({
                      where: {
                          codigo: request.params['codigo']
                      },
                    }).then(function (leilao) {
                        models.Lote.create({
                          idLote: request.params['idLote'],
                          idLeilao: request.params['codigo'],
                          numero: request.params['numero'],
                          descricao: request.params['descricao'],
                          quantidade: request.params['quantidade'],
                          valor: request.params['valor']
                        }).then(function (lotes){
                          reply.redirect('/lotes');
                        });
                    });
                });

            }
        }, {
            method: ['GET', 'DELETE'],
            path: '/empresa/{idEmpresa}/leilao/{codigo}/lotes/{idLote}/destroy',
            handler: function (request, reply) {
                models.Empresa.find({
                    where: {
                        idEmpresa: request.params['idEmpresa']
                    }
                  }).then(function (empresa) {
                    models.Leilao.find({
                        where: {
                            codigo: request.params['codigo']
                        },
                      }).then(function (leilao) {
                        models.Lote.destroy({
                          where: {
                            idLote: request.params['idLote']
                          }
                        }).then(function (affectedRows) {
                            reply.redirect('/');
                        });
                      });

                });
            }
        }, {
            method: ['POST','PUT'],
            path: '/empresa/{idEmpresa}/leilao/{codigo}/update',
            handler: function (request, reply) {

                models.Leilao.find({
                    where: {
                        idEmpresa: request.params['idEmpresa'],
                        codigo: request.payload['codigo']
                    }
                }).then(function (leilao) {

                    models.Leilao.update({

                      // if((request.payload['descricao']) && (request.payload['descricao'] != descricao))
                      descricao: request.payload['descricao'],

                      // if((request.payload['vendedor']) && (request.payload['vendedor'] != vendedor))
                      vendedor: request.payload['vendedor'],

                      // if((request.payload['inicioPrevisto']) && (request.payload['inicioPrevisto'] != inicioPrevisto))
                      inicioPrevisto: request.payload['inicioPrevisto']

                    }).then(function () {
                        reply.redirect('/');
                    });
                });

            }
        }, {
            method: 'GET',
            path: '/empresa/{idEmpresa}/leilao/',
            handler: function (request, reply) {
                models.Leilao.find({
                    where: {
                        idEmpresa: request.params['idEmpresa']
                    }
                }).then(function (empresa) {
                    reply(leilao);
                });
            }
        }, {
            method: 'GET',
            path: '/empresa/{idEmpresa}/leilao/{codigo}',
            handler: function (request, reply) {
                models.Empresa.find({
                    where: {
                        idEmpresa: request.params['idEmpresa']
                    }
                }).then(function (empresa) {
                    models.Leilao.find({
                        where: {
                            codigo: request.params['codigo']
                        }
                    }).then(function (leilao) {
                        reply(leilao);
                    });
                });
            }
        }
    ];
}();
