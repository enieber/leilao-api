'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
let  mod = {};

fs.readdirSync(__dirname).forEach(function (file) {
    /* If its the current file ignore it */
    if (file === 'index.js') return;

    /* Prepare empty object to store module */


    /* Store module with its name (from filename) */
    mod[path.basename(file, '.js')] = require(path.join(__dirname, file));

})

module.exports = mod;
