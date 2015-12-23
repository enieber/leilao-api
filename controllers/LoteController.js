"use strict";

let LoteController = [];

LoteController.getLotes = {
    method: 'GET',
    path: '/lote',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

LoteController.getLoteById = {
    method: 'GET',
    path: '/lote/{id}',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

LoteController.postLote = {
    method: 'POST',
    path: '/lote',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

LoteController.putLoteById = {
    method: 'PUT',
    path: '/lote/{id}',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

LoteController.deleteLoteById = {
    method: 'DELETE',
    path: '/lote/{id}',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

module.exports = LoteController;
