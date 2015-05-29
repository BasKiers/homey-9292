var speechInput;

var app;
var triggers = {};
var tempTriggers = {};
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

    //speechInput.addTrigger(trigger);    //TODO remove triggers from config and call this function!

    triggers[triggers.code] = callback;

    return trigger.id;
}

function createTemporaryTrigger(trigger, callback, timeout){
    timeout = timeout || 30000;

    var id = addTrigger(trigger, callback)
    setTimeout(function() { removeTrigger(id) }, timeout );
}

function parseSpeech(speech){
    Homey.log(speech);
}

module.exports.preInit = preInit;
module.exports.removeTrigger = removeTrigger;
module.exports.addTrigger = addTrigger;
module.exports.createTemporaryTrigger = createTemporaryTrigger;
module.exports.create