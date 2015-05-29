var speechInput;

var triggers = {};
var triggerId = 0;

function init(){
    speechInput = Homey.manager('speech-input');
}

function removeTrigger(id){
    speechInput.removeTrigger(id);
}

function createTrigger(trigger, callback){
    trigger.id = trigger.id || 'trigger-'+(triggerId++);
    trigger.importance = trigger.importance || 0.7;

    trigger.add(trigger, callback);

    return trigger.id;
}

function createTemporaryTrigger(trigger, callback, timeout){
    timeout = timeout || 30000;

    var id = createTrigger(trigger, callback)
    setTimeout(function() { removeTrigger(id) }, timeout );
}

module.exports.init = init();