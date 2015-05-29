var Client = require('node-rest-client').Client;
var RSVP = require('rsvp');

function init(app) {
    Homey.log('joepie!!');
}

modules.export.init = init;
