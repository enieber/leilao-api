'use strict';


const Controller = require('../controllers/empresa');

exports.register = (server, options, next) => {
  const controller = new Controller(options.database);
  server.bind(controller);
  server.route([
        {
            method: 'GET',
            path: '/empresa',
            config: {
              handler: controller.get
            }
        },
        {
            method: 'GET',
            path: '/empresa/{idEmpresa}',
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
            method: ['GET','DELETE'],
            path: '/empresa/{idEmpresa}/destroy',
            config: {
              handler: controller.destroy,
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
        }
        {
          method: 'POST',
          path: '/empresa',
          config: {
            handler: controller.get,
            validate: {
              payload: {
                idEmpresa: Joi
                    .number()
                    .integer()
                    .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, '_id')
                    .required(),
                idLeilao: Joi
                    .number()
                    .integer()
                    .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, '_id')
                    .required(),
                cnpj: Joi
                    .number()
                    .integer()
                    .required()
                    .min(14)
                    .max(14)
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
                  .integer()
                  .min(8)
                  .max(32)
                logradouro: Joi
                  .string()
                  .min(4)
                  .max(64)
                municipio: Joi
                  .string()
                  .min(4)
                  .max(64)
                numero: Joi
                  .number()
                  .integer()
                  .min(1)
                  .max(10)
                complemento: Joi
                  .string()
                  .min(4)
                  .max(64)
                bairro: Joi
                  .string()
                  .min(4)
                  .max(64)
                cep: Joi
                  .number()
                  .integer()
                  .min(8)
                  .max(16)
              }
            }
          }
        }

    ]);
}();
