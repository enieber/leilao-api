'use strict';

var models = require('../models');

module.exports = function () {
    return [
        {
            method: 'POST',
            path: '/empresa',
            handler: function (request, reply) {

              console.log(request.query);
                models.Empresa.create({

                    idEmpresa: request.query['idEmpresa'],
                    idLeilao: request.query['idLeilao'],
                    cnpj: request.query['cnpj'],
                    razaoSocial: request.query['razaoSocial'],
                    usuario: request.query['usuario'],
                    senha: request.query['senha'],
                    email: request.query['email'],
                    telefone: request.query['telefone'],
                    logradouro: request.query['logradouro'],
                    municipio: request.query['municipio'],
                    numero: request.query['numero'],
                    complemento: request.query['complemento'],
                    bairro: request.query['bairro'],
                    cep: request.query['cep']
                }).then(function (empresa) {
                    reply(empresa);
                });

            }
        }, {
            method: 'GET',
            path: '/empresa',
            handler: function (request, reply) {
                models.Empresa.findAll({
                  attributes: ['idEmpresa', 'cnpj', 'razaoSocial', 'usuario', 'senha', 'email', 'telefone', 'logradouro', 'municipio','numero','complemento','bairro','cep'],
                  include: [models.Leilao]
                }).then(function (empresa) {
                    reply(empresa);
                })
            }
        }, {

            method: 'GET',
            path: '/empresa/{idEmpresa}',
            handler: function (request, reply) {
                models.Empresa.find({
                  where:{
                      idEmpresa: request.params['idEmpresa']
                  },
                  attributes: ['idEmpresa', 'cnpj', 'razaoSocial', 'usuario', 'senha', 'email', 'telefone', 'logradouro', 'municipio','numero','complemento','bairro','cep'],
                  include: [models.Leilao]
                }).then(function (empresa) {
                    reply(empresa);
                })
            }
        }, {

            method: ['GET','DELETE'],
            path: '/empresa/{idEmpresa}/destroy',
            handler: function (request, reply) {

                models.Empresa.find({
                    where: {
                        idEmpresa: request.params['idEmpresa']
                    },
                    include: [models.Leilao]
                }).then(function (empresa) {
                    models.Leilao.destroy({
                        where: {
                            idEmpresa:request.params['idEmpresa']
                        }
                    }).then(function (affectedRows) {
                        empresa.destroy().then(function () {
                            reply(affectedRows);
                        });
                    });
                });

            }
        }
    ];
}();
