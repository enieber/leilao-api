'use strict';

const Joi = require('joi');
const Controller = require('../controller/comprador.controller');

exports.route = (server) => {
  const controller = Controller;
  server.bind(controller);
  server.route([
        {
          method: 'GET',
          path: '/comprador',
          config: {
            handler: controller.get
          }
        },
        {
          method: 'GET',
          path: '/comprador/{idComprador}',
          config: {
            handler: controller.getById,
            validate:{
              params: {
                idComprador: Joi
                    .number()
                    .integer()
                    .required()
              }
            }
          }
        },
        {
            method: 'GET',
            path: '/empresa/{idEmpresa}/leilao/{codigo}/lote/{idLote}/comprador',
            config: {
              handler: controller.getByLote,
              validate: {
                params: {
                  idEmpresa: Joi
                      .number()
                      .integer()
                      .required(),
                  codigo: Joi
                      .number()
                      .integer()
                      .required(),
                  idLote: Joi
                      .number()
                      .integer()
                      .required()
            }
          }
        }
        },
        {
            method: 'GET',
            path: '/empresa/{idEmpresa}/leilao/{codigo}/lote/{idLote}/comprador/{idComprador}',
            config: {
              handler: controller.getByIdFather,
              validate: {
                params: {
                  idEmpresa: Joi
                      .number()
                      .integer()
                      .required(),
                  codigo: Joi
                      .number()
                      .integer()
                      .required(),
                  idLote: Joi
                      .number()
                      .integer()
                      .required(),
                  idComprador: Joi
                      .number()
                      .integer()
                      .required()
              }
            }
          }
        },
        {
            method: 'POST',
            path: '/comprador',
            handler: function (request, reply) {

                models.Comprador.create({
                    idComprador: request.payload['idComprador'],
                    idEmpresa: request.payload['idEmpresa'],
                    idLeilao: request.payload['idLeilao'],
                }).then(function () {
                    reply.redirect('/');
                });

            }
        }, {

            method: 'DELETE',
            path: '/comprador/{id}',
            handler: function (request, reply) {

                models.Comprador.find({
                    where: {
                        id: request.params['idComprador']
                    },
                    include: [models.Leilao]
                }).then(function (comprador) {
                    models.Leilao.destroy({
                        where: {
                            idComprador: comprador.id
                        }
                    }).then(function (affectedRows) {
                        comprador.destroy().then(function () {
                            reply.redirect('/');
                        });
                    });
                });

            }
        }

    ]);
}
