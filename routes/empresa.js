'use strict';

var models = require('../models');

module.exports = function () {
    return [
        {
            method: 'POST',
            path: '/empresa',
            handler: function (request, reply) {

                models.Empresa.create({
                    idEmpresa: request.payload['idEmpresa'],
                    idLeilao: request.payload['idLeilao'],
                    cnpj: request.payload['cnpj'],
                    razaoSocial: request.payload['razaoSocial'],
                    usuario: request.payload['usuario'],
                    senha: request.payload['senha'],
                    email: request.payload['email'],
                    telefone: request.payload['telefone'],
                    logradouro: request.payload['logradouro'],
                    municipio: request.payload['municipio'],
                    numero: request.payload['numero'],
                    complemento: request.payload['complemento'],
                    bairro: request.payload[''],
                    cep: request.payload['cep']
                }).then(function () {
                    reply.redirect('/');
                });

            }
        }, {
            method: 'GET',
            path: '/empresa',
            handler: function (request, reply) {
                models.Empresa.find({
                  include: [models.Leilao]
                }).then(function (empresa) {
                    reply.view("o");
                })
            }
        }, {

            method: 'GET',
            path: '/empresa/{idEmpresa}',
            handler: function (request, reply) {
                models.Empresa.findById({
                  where:{
                    idEmpresa: request.params['idEmpresa']
                  },
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
                            idEmpresa: empresa.id
                        }
                    }).then(function (affectedRows) {
                        empresa.destroy().then(function () {
                            reply.redirect('/');
                        });
                    });
                });

            }
        }
    ];
}();
