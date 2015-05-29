//var extend = require('util')._extend;
//var rest = require('rest');
//var mime = require('rest/interceptor/mime');
//var RSVP = require('rsvp');
//
//var client = rest.wrap(mime);
//
//var apiBaseUrl = 'http://api.9292.nl/0.1/';
//
//var defaultArgs = {
//    lang: 'nl-NL'
//};

function entity(entity, args) {
    var url = apiBaseUrl + entity;

    extend(args, defaultArgs);
    var first = true;
    for (var argKey in args) {
        if (args.hasOwnProperty(argKey)) {
            if (first) {
                url += '?';
                first = false;
            } else {
                url += '&';
            }

            var argValue = args[argKey];
            url += encodeURIComponent(argKey) + '=' + encodeURIComponent(argValue);
        }
    }

    return new RSVP.Promise(function (resolve, reject) {
        client({path: url}).then(function (response) {
            if (!response.entity[entity]) {
                reject(response.entity.exception);
            } else {
                resolve(response.entity[entity]);
            }
        }, function (response) {
            reject(response);
        });
    });
}

//module.exports.init = init;
module.exports.entity = entity;
