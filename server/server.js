const Hapi = require('hapi');
const models = require('../models');
const routes = require('../routes');
const Inert = require('inert');
const path = require('path');
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000
});

  for (var router in routes) {
      server.route(routes[router]);
  }


models.sequelize.sync().then(function() {
      server.start(function () {
          console.log("Hapi server started @", server.info.uri);
      });
});
