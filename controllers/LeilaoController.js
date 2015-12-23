"use strict";

let LeilaoController = [];

LeilaoController.getLeiloes = {
    method: 'GET',
    path: '/leilao',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

LeilaoController.getLeilaoById = {
    method: 'GET',
    path: '/leilao/{id}',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

LeilaoController.postLeilao = {
    method: 'POST',
    path: '/leilao',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

LeilaoController.putLeilaoById = {
    method: 'PUT',
    path: '/leilao/{id}',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

LeilaoController.deleteLeilaoById = {
    method: 'DELETE',
    path: '/leilao/{id}',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

module.exports = LeilaoController;
