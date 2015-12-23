"use strict";

let CompradorController = [];

CompradorController.getCompradores  = {
    method: 'GET',
    path: '/comprador',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

CompradorController.getCompradorById = {
    method: 'GET',
    path: '/comprador/{id}',
    handler: function (request, reply) {
        reply('Hello '+ encodeURIComponent(request.params.id));
    }
}

CompradorController.postComprador = {
    method: 'POST',
    path: '/comprador',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

CompradorController.putCompradorById = {
    method: 'PUT',
    path: '/comprador/{id}',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

CompradorController.deleteCompradorById = {
    method: 'DELETE',
    path: '/comprador/{id}',
    handler: function (request, reply) {
        reply('');
    }
}

module.exports = CompradorController;
