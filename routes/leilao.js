'use strict';

var models = require('../models');

module.exports = function () {
    return [
        {
            method: 'GET',
            path: '/leilao',
            handler: function (request, reply) {
                // models.Leilao.findAll({
                //   include: [models.Lote],
                //   include: [models.Comprador]
                // }).then(function (leilao) {
                //     reply(leilao);
                // })
                reply("Leilões");
            }
        }, {
            method: 'POST',
            path: '/empresa/{idEmpresa}/leilao',
            handler: function (request, reply) {

                models.Empresa.find({
                    where: {
                        idEmpresa: request.params['idEmpresa']
                    }
                }).then(function (empresa) {
                    models.Leilao.create({
                      idEmpresa: request.payload['idEmpresa'],
                      codigo: request.payload['codigo'],
                      descricao: request.payload['descricao'],
                      vendedor: request.payload['vendedor'],
                      inicioPrevisto: request.payload['inicioPrevisto']
                    }).then(function () {
                        reply.redirect('/');
                    });
                });

            }
        }, {
            method: ['GET', 'DELETE'],
            path: '/empresa/{idEmpresa}/leilao/{codigo}/destroy',
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
                        include: [models.Lote],
                        include: [models.Comprador]
                    }).then(function (leilao) {
                      leilao.setEmpresa(null).then(function () {
                        models.Lote.destroy({
                            where: {
                                idLeilao: leilao.codigo
                            }
                        }),
                        models.Comprador.destroy({
                          where: {
                              idLeilao: leilao.codigo
                          }
                        }).then(function (affectedRows) {
                            leilao.destroy().then(function () {
                                reply.redirect('/');
                            });
                        });
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

                      // if(request.payload['descricao'] != null && (request.payload['descricao'] != descricao))
                      descricao: request.payload['descricao'],

                      // if(request.payload['vendedor'] != null && (request.payload['vendedor'] != vendedor))
                      vendedor: request.payload['vendedor'],

                      // if(request.payload['inicioPrevisto'] != null && (request.payload['inicioPrevisto'] != inicioPrevisto))
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
