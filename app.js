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
server.connection({
    host: 'localhost',
    port: 3000
});



// Start the server
server.route( {
  method: 'GET',
  path: '/test',
  handler: function (request, reply) {
    reply({"test": "ok"});
  }
});


  for (var router in routes) {
      server.route(routes[router]);
  }



  models.sequelize.sync().then(function() {
      server.start(function () {
          console.log("Hapi server started @", server.info.uri);
      });
  });
