const serve = require('./server/server');
serve.start(function () {
    console.log("Hapi server started @", server.info.uri);
});
