'use strict';

const Joi = require('joi');
const Controller = require('../controller/lote.controller');

exports.route = (server) => {
  const controller = Controller;
  server.bind(controller);
  server.route([
        {
            method: 'GET',
            path: '/lote',
            config: {
              handler: controller.get
            }
        },
        {
            method: 'GET',
            path: '/lote/{idLote}',
            config: {
              handler: controller.getById,
              validate: {
                params: {
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
            path: '/empresa/{idEmpresa}/leilao/{codigo}/lote',
            config: {
              handler: controller.getByIdLeilao,
              validate: {
                params: {
                  idEmpresa: Joi
                      .number()
                      .integer()
                      .required(),
                  codigo: Joi
                      .number()
                      .integer()
                      .required()
              }
            }
          }
        },
        {
            method: 'GET',
            path: '/empresa/{idEmpresa}/leilao/{codigo}/lote/{idLote}',
            config: {
              handler: controller.getById,
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
        }
        // }, {
        //     method: 'POST',
        //     path: '/empresa/{idEmpresa}/leilao/{codigo}/lotes',
        //     handler: function (request, reply) {
        //
        //         models.Empresa.find({
        //             where: {
        //                 idEmpresa: request.params['idEmpresa']
        //             }
        //         }).then(function (empresa) {
        //           models.Leilao.find({
        //               where: {
        //                   codigo: request.params['codigo']
        //               },
        //             }).then(function (leilao) {
        //                 models.Lote.create({
        //                   idLote: request.params['idLote'],
        //                   idLeilao: request.params['codigo'],
        //                   numero: request.params['numero'],
        //                   descricao: request.params['descricao'],
        //                   quantidade: request.params['quantidade'],
        //                   valor: request.params['valor']
        //                 }).then(function (lotes){
        //                   reply.redirect('/lotes');
        //                 });
        //             });
        //         });
        //
        //     }
        // }, {
        //     method: ['GET', 'DELETE'],
        //     path: '/empresa/{idEmpresa}/leilao/{codigo}/lotes/{idLote}/destroy',
        //     handler: function (request, reply) {
        //         models.Empresa.find({
        //             where: {
        //                 idEmpresa: request.params['idEmpresa']
        //             }
        //           }).then(function (empresa) {
        //             models.Leilao.find({
        //                 where: {
        //                     codigo: request.params['codigo']
        //                 },
        //               }).then(function (leilao) {
        //                 models.Lote.destroy({
        //                   where: {
        //                     idLote: request.params['idLote']
        //                   }
        //                 }).then(function (affectedRows) {
        //                     reply.redirect('/');
        //                 });
        //               });
        //
        //         });
        //     }
        //   }
        // }, {
        //     method: ['POST','PUT'],
        //     path: '/empresa/{idEmpresa}/leilao/{codigo}/update',
        //     handler: function (request, reply) {
        //
        //         models.Leilao.find({
        //             where: {
        //                 idEmpresa: request.params['idEmpresa'],
        //                 codigo: request.payload['codigo']
        //             }
        //         }).then(function (leilao) {
        //
        //             models.Leilao.update({
        //
        //               // if((request.payload['descricao']) && (request.payload['descricao'] != descricao))
        //               descricao: request.payload['descricao'],
        //
        //               // if((request.payload['vendedor']) && (request.payload['vendedor'] != vendedor))
        //               vendedor: request.payload['vendedor'],
        //
        //               // if((request.payload['inicioPrevisto']) && (request.payload['inicioPrevisto'] != inicioPrevisto))
        //               inicioPrevisto: request.payload['inicioPrevisto']
        //
        //             }).then(function () {
        //                 reply.redirect('/');
        //             });
        //         });
        //
        //     }
        // }, {

    ]);
}
