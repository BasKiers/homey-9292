var speechInput;

var app;
var triggers = {};
var triggerId = 0;

function preInit(application){
    app = application;
    speechInput = Homey.manager('speech-input');
}

function removeTrigger(id){
    speechInput.removeTrigger(id);
}

function addTrigger(trigger, callback){
    trigger.id = trigger.id || 'trigger-'+(triggerId++);
    trigger.importance = trigger.importance || 0.7;

    trigger.add(trigger, callback);

    return trigger.id;
}

function createTemporaryTrigger(trigger, callback, timeout){
    timeout = timeout || 30000;

    var id = addTrigger(trigger, callback)
    setTimeout(function() { removeTrigger(id) }, timeout );
}

module.exports.preInit = preInit;
module.exports.removeTrigger = removeTrigger;
module.exports.addTrigger = addTrigger;
module.exports.createTemporaryTrigger = createTemporaryTrigger;