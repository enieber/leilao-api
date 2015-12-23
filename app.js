const Hapi = require('hapi');
const models = require('./models');
const routes = require('./routes');
const Inert = require('inert');
const path = require('path');
const server = new Hapi.Server();


// server.views({
//     engines: {
//         html: require('swig')
//     },
//     relativeTo: __dirname,
//     path: './views'
// });




// Start the server


server.register(Inert, function () {
  server.connection({
      host: 'localhost',
      port: 3000
  });
    server.route( {
      method: 'GET',
      path: '/test',
      handler: function (request, reply) {
        reply.view({"test": "ok"});
      }
    });
  server.route( {
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: { path: path.normalize(__dirname + '/') }
      }
    });
  for (var route in routes) {
      server.route(routes[route]);
  }

  models.sequelize.sync().then(function() {
      server.start(function () {
          console.log("Hapi server started @", server.info.uri);
      });
  });
}); // requires a callback funct
