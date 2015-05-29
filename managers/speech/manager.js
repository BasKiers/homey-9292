var fs = require('fs');
var path = require('path');

var app;
var triggerManager;

var triggers = {};

function init(application){
    app = application;
    triggerManager = app.manager('trigger');

    initTriggers();
}

function initTriggers(){
    fs.readdirSync(path.join(__dirname, "triggers")).forEach(function (name) {
        var trigger = require("./"+path.join("triggers", name));
        if(typeof trigger.init === 'function') {
            trigger.init(app);
        }
        triggers[name] = trigger;
    });
}

module.exports.init = init;