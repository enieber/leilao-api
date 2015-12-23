'use strict';

var models = require('../models');

module.exports = function () {
    return [
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
            method: 'GET',
            path: '/comprador',
            handler: function (request, reply) {
                models.Comprador.findAll({
                  attributes: ['idComprador','idEmpresa','idLeilao'],
                }).then(function (comprador) {
                    reply(comprador);
                })
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
        }, {
            method: 'POST',
            path: '/api/users/{userId}/tasks/create',
            handler: function (request, reply) {

                models.User.find({
                    where: {
                        id: request.params['userId']
                    }
                }).then(function (user) {
                    models.Task.create({
                        title: request.payload['title'],
                        UserId: user.id
                    }).then(function () {
                        reply.redirect('/');
                    });
                });

            }
        },
        {
            method: 'GET',
            path: '/api/users/{userId}/tasks/{taskId}/destroy',
            handler: function (request, reply) {
                models.User.find({
                    where: {
                        id: request.params['userId']
                    }
                }).then(function (user) {
                    models.Task.find({
                        where: {
                            id: request.params['taskId']
                        }
                    }).then(function (task) {
                        task.setUser(null).then(function () {
                            task.destroy().then(function () {
                                reply.redirect('/');
                            });
                        });
                    });
                });
            }
        }
    ];
}();
