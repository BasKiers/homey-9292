var fs = require('fs');
var path = require('path');

var managerPath = path.join(__dirname, 'managers');
var managerFile = 'manager.js';

function App() {
}

App.prototype.init = function () {
    setTimeout(this.delayedInit.bind(this), 1000);
};

App.prototype.delayedInit = function () {
    var self = this;

    this.log('initiating managers...');

    self.managers = {};
    fs.readdirSync(managerPath).forEach(function (dir) {
        self.log('adding manager \'' + dir + '\'');
        self.managers[dir] = require(path.join(managerPath, dir, managerFile));
    });

    function initManagers(stage) {
        for (var dir in self.managers) {
            if (self.managers.hasOwnProperty(dir)) {
                var manager = self.managers[dir];
                if (typeof manager[stage] === 'function') {
                    manager[stage](self);
                }
            }
        }
    }

    initManagers('preinit');
    initManagers('init');
    initManagers('post');

    // quick fix for speech output
    /*Homey.manager('speech-output').say = Homey.log;

     Homey.manager('ledring').animate({
     name: '9292'
     });*/
};

// add logging test
App.prototype.log = console.log;

App.prototype.manager = function (name) {
    if (!this.managers.hasOwnProperty(name)) {
        this.log('manager \'' + name + '\' could not be found!');
        return null;
    }

    return this.managers[name];
};

App.prototype.speech = function (speech) {
    speech.triggers.forEach(function (trigger) {
        if (trigger.id === 'begin') {
            Homey.manager('speech-output').say('jaaay!!');
        }
    });
};

module.exports = App;

// remove for homey
var app = new App();
app.init();
