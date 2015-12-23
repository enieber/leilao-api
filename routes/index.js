'use strict';

const Hapi = require('hapi');
const CompradorController = require('../controllers/CompradorController');
const EmpresaController = require('../controllers/EmpresaController');
const LeilaoController = require('../controllers/LeilaoController');
const LoteController = require('../controllers/LoteController');
const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route(CompradorController.getCompradores);
server.route(CompradorController.getCompradorById);
server.route(CompradorController.postComprador);
server.route(CompradorController.putCompradorById);
server.route(CompradorController.deleteCompradorById);

server.route(EmpresaController.getEmpresas);
server.route(EmpresaController.getEmpresaById);
server.route(EmpresaController.postEmpresa);
server.route(EmpresaController.putEmpresaById);
server.route(EmpresaController.deleteEmpresaById);

server.route(LeilaoController.getLeiloes);
server.route(LeilaoController.getLeilaoById);
server.route(LeilaoController.postLeilao);
server.route(LeilaoController.putLeilaoById);
server.route(LeilaoController.deleteLeilaoById);

server.route(LoteController.getLotes);
server.route(LoteController.getLoteById);
server.route(LoteController.postLote);
server.route(LoteController.putLoteById);
server.route(LoteController.deleteLoteById);

server.start(() => {
    console.log('Server running at:', server.info.uri);
});

module.exports = server;
