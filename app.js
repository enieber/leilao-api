const serve = require('./api/server');
serve.start(function () {
    console.log("Hapi api started @", server.info.uri);
});
