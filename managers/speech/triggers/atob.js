var app;
var triggerManager;

function init(application) {
    app = application;
    triggerManager = app.manager('trigger');

    addTriggers();
}

function addTriggers() {
    triggerManager.addTrigger({
        id: "question",
        importance: 0.2,
        synonyms: {
            "nl": ["wat is", "geef mij", "wanneer gaat"],
            "en": ["wat is", "geef mij", "wanneer gaat"]
        }
    }, matchAll);

    triggerManager.addTrigger({
        id: "time",
        importance: 0.4,
        synonyms: {
            "nl": ["volgende", "laatste", "om", "van"],
            "en": ["volgende", "laatste", "om", "van"]
        }
    }, matchAll);

    triggerManager.addTrigger({
        id: "time-relative",
        importance: 0.7,
        synonyms: {
            "nl": ["vertrek", "vertrektijd", "vertrekt", "aankomst", "aankomsttijd", "aan komt", "komt"],
            "en": ["vertrek", "vertrektijd", "vertrekt", "aankomst", "aankomsttijd", "aan komt", "komt"]
        }
    }, matchAll);

    triggerManager.addTrigger({
        id: "from",
        importance: 0.5,
        synonyms: {
            "nl": ["vanaf", "van"],
            "en": ["vanaf", "van"]
        }
    }, matchAll);

    triggerManager.addTrigger({
        id: "to",
        importance: 0.4,
        synonyms: {
            "nl":["naar", "tot"],
            "en":["naar", "tot"]
        }
    }, matchAll);

    triggerManager.addTrigger({
        id: "location",
        importance: 0.4,
        synonyms: {
            "nl":["halte", "bushalte", "busstation", "treinstation", "treinhalte", "station"],
            "en":["halte", "bushalte", "busstation", "treinstation", "treinhalte", "station"]
        }
    }, matchAll);
}

function matchAll(sentence) {

}

module.exports.init = init;
