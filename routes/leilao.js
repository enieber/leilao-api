'use strict';

var models = require('../models');

module.exports = function () {
    return [
        {
            method: 'GET',
            path: '/leilao',
            config: {
              handler: controller.findAll
            }
        },
        {
            method: 'GET',
            path: '/empresa/{idEmpresa}/leilao/',
            config: {
              handler: controller.getId,
              validate: {
                params: {
                  idEmpresa: Joi
                      .number()
                      .integer()
                      .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, '_id')
                      .required()
                }
              }
            }
        },
        {
            method: 'GET',
            path: '/empresa/{idEmpresa}/leilao/{codigo}',
            config: {
              handler: controller.getId,
              validate: {
                params: {
                  idEmpresa: Joi
                      .number()
                      .integer()
                      .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, '_id')
                      .required(),
                  codigo: Joi
                      .number()
                      .integer()
                      .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, '_id')
                      .required()
                }
              }
            }
        },
        {
            method: ['GET', 'DELETE'],
            path: '/empresa/{idEmpresa}/leilao/{codigo}/destroy',
            config: {
              handler: controller.getId,
              validate: {
                params: {
                  idEmpresa: Joi
                      .number()
                      .integer()
                      .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, '_id')
                      .required(),
                  codigo: Joi
                      .number()
                      .integer()
                      .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, '_id')
                      .required()
                }
              }
            }
        },
        {
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
        },
        {
            method: ['POST','PUT'],
            path: '/empresa/{idEmpresa}/leilao/{codigo}/update',
            config: {
              handler: controller.update,
              validate: {
                params: {
                  idEmpresa: Joi
                      .number()
                      .integer()
                      .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, '_id')
                      .required(),
                  codigo: Joi
                      .number()
                      .integer()
                      .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, '_id')
                      .required()
                },
                payload: {
                  descricao: Joi
                      .string()
                      .min(4)
                      .max(64)
                  vendedor: Joi
                      .string()
                      .min(4)
                      .max(64)
                  inicioPrevisto: Joi
                       .date()
                       .format('DD/MM/YYYY')
                       .min('now')
              }
            }
          }
        }
    ];
}();
