const Hapi = require('hapi');
const models = require('./model');
const empresa = require('./routes/empresa.route');
const lote = require('./routes/lote.route');
const leilao = require('./routes/leilao.route');
const comprador = require('./routes/comprador.route');
const test = require('./routes/index.route');
const Inert = require('inert');
const path = require('path');
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000
});
server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }
});

test.route(server);
empresa.route(server);
leilao.route(server);
lote.route(server);
comprador.route(server);
  // for (var router in routes) {
  //     api.route(routes[router]);
  // }


models.sequelize.sync({force: true}).then(function() {
      server.start(function () {
          console.log("Hapi api started @", server.info.uri);
      });
});
