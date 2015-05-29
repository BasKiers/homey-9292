var app;
var triggerManager;

function init(application){
    app = application;
    triggerManager = app.manager('trigger');

    addTriggers();
}

function addTriggers(){
    triggerManager.addTrigger({
        id: "matchall",
        importance: 1.0,
        synonyms:{
            "nl": [
                "9292",
            ]
        }
    }, matchAll);

    triggerManager.addTrigger({
        id: "matchall",
        importance: 0.6,
        synonyms:{
            "nl": [
                "trein",
                "bus"
            ]
        }
    }, matchAll);

    //triggerManager.triggerOnSentence(
    //
    //    , matchAll
    //)
}

function matchAll(trigger){

}

module.exports.init = init;