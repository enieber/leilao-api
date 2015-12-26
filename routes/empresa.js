'use strict';

const Joi = require('joi');
const Controller = require('../controller/empresa.controller');

exports.route = (server) => {
  const controllerEmpresa = Controller;
  server.bind(controllerEmpresa);
  server.route([
        {
            method: 'GET',
            path: '/empresa',
            config: {
              handler: controllerEmpresa.get
            }
        },
        {
            method: 'GET',
            path: '/empresa/{idEmpresa}',
            config: {
              handler: controllerEmpresa.getById,
              validate: {
                params: {
                  idEmpresa: Joi
                      .number()
                      .integer()
                      .required()
                }
              }
            }
        },
        // {
        //     method: ['GET','DELETE'],
        //     path: '/empresa/{idEmpresa}/destroy',
        //     config: {
        //       handler: controllerEmpresa.destroy,
        //       validate: {
        //         params: {
        //           idEmpresa: Joi
        //               .number()
        //               .integer()
        //               .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, '_id')
        //               .required()
        //         }
        //       }
        //     }
        // }
        {
          method: 'POST',
          path: '/empresa',
          config: {
            handler: controllerEmpresa.post,
            validate: {
              payload: {
                idEmpresa: Joi
                    .number()
                    .integer()
                    .required(),
                idLeilao: Joi
                    .number()
                    .integer()
                    .required(),
                cnpj: Joi
                    .string()
                    .required()
                    .min(14)
                    .max(19)
                    .required(),
                razaoSocial: Joi
                  .string()
                  .min(4)
                  .max(30)
                  .trim()
                  .required(),
                usuario: Joi
                  .string()
                  .alphanum()
                  .min(4)
                  .max(20)
                  .trim()
                  .required(),
                senha: Joi
                  .string()
                  .min(8)
                  .max(128)
                  .required(),
                email: Joi
                  .string()
                  .email()
                  .required(),
                telefone: Joi
                  .number()
                  .min(11111111)
                  .max(99999999999),
                logradouro: Joi
                  .string()
                  .min(4)
                  .max(64),
                municipio: Joi
                  .string()
                  .min(4)
                  .max(64),
                numero: Joi
                  .number()
                  .integer()
                  .min(1)
                  .max(10),
                complemento: Joi
                  .string()
                  .min(4)
                  .max(64),
                bairro: Joi
                  .string()
                  .min(4)
                  .max(64),
                cep: Joi
                  .number()
                  .integer()
                  .min(8)
                  .max(99999999)
              }
            }
          }
        }

    ]);
};
