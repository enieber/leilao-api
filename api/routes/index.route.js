'use strict';

exports.route = (server) => {
  server.route([
    {
      method: 'GET',
      path: '/test',
      handler: function (request, reply) {
          reply({"test":"ok"});
      }
    },
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Home');
        }
    }
  ]);
};
