var fs = require('fs');
var path = require('path');

var managerPath = path.join(__dirname, 'manager');
var managerFile = 'manager.js';

function App() {
    var self = this;

    this.managers = {};
    Homey.log(managerPath);
    fs.readdirSync(managerPath).forEach(function (dir) {
        var manager = require(path.join(managerPath, dir, managerFile));
        if(manager.init === 'function') {
            manager.init(this);
        }
        self.managers[dir] = manager;
    });
}

App.prototype.init = function () {
    // quick fix for speech output
    Homey.manager('speech-output').say = Homey.log;

    Homey.manager('ledring').animate({
        name: '9292'
    });
};

App.prototype.manager = function (name) {
    if(!this.managers.hasOwnProperty(name)) {
        Homey.log('manager \'' + name + '\' could not be found!');
        return null;
    }

    return this.managers[name];
};

App.prototype.speech = function (speech) {
    speech.triggers.forEach(function (trigger) {
        if(trigger.id === 'begin') {
            Homey.manager('speech-output').say('jaaay!!');
        }
    });
};

module.exports = App;
