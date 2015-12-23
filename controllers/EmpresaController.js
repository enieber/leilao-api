"use strict";

let EmpresaController = [];

EmpresaController.getEmpresas = {
    method: 'GET',
    path: '/empresa',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

EmpresaController.getEmpresaById = {
    method: 'GET',
    path: '/empresa/{id}',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

EmpresaController.postEmpresa = {
    method: 'POST',
    path: '/empresa',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

EmpresaController.putEmpresaById = {
    method: 'PUT',
    path: '/empresa/{id}',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

EmpresaController.deleteEmpresaById = {
    method: 'DELETE',
    path: '/empresa/{id}',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
}

module.exports = EmpresaController;
