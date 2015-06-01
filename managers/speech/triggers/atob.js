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

var result = {
    "journeys": [
        {
            "id": "fromRef=enschede/bushalte-ut-hallenweg&toRef=enschede/bushalte-centraal&searchType=departure&dateTime=2015-05-30T12:59&interchangeTime=standard&sequence=1&modes=train:true,bus:true,subway:true,tram:true,ferry:true",
            "ludMessages": [],
            "fasterJourneyId": null,
            "departure": "2015-05-30T12:59",
            "arrival": "2015-05-30T13:17",
            "numberOfChanges": 0,
            "legs": [
                {
                    "type": "continuous",
                    "duration": "00:08",
                    "mode": {
                        "type": "walk",
                        "name": "Lopen van/naar bestemming"
                    },
                    "stops": [
                        {
                            "arrival": null,
                            "departure": null,
                            "platform": null,
                            "location": {
                                "id": "enschede/bushalte-ut-hallenweg",
                                "type": "stop",
                                "stopType": "Bushalte",
                                "name": "UT/Hallenweg",
                                "place": {
                                    "name": "Enschede",
                                    "regionCode": "OV",
                                    "regionName": "Overijssel",
                                    "showRegion": false,
                                    "countryCode": "NL",
                                    "countryName": "Nederland",
                                    "showCountry": false
                                },
                                "latLong": {
                                    "lat": 52.238581,
                                    "long": 6.853672
                                },
                                "urls": {
                                    "nl-NL": "/enschede/bushalte-ut-hallenweg",
                                    "en-GB": "/en/enschede/bushalte-ut-hallenweg"
                                }
                            },
                            "fallbackName": null
                        },
                        {
                            "arrival": null,
                            "departure": null,
                            "platform": null,
                            "location": {
                                "id": "enschede/bushalte-jupiterstraat",
                                "type": "stop",
                                "stopType": "Bushalte",
                                "name": "Jupiterstraat",
                                "place": {
                                    "name": "Enschede",
                                    "regionCode": "OV",
                                    "regionName": "Overijssel",
                                    "showRegion": false,
                                    "countryCode": "NL",
                                    "countryName": "Nederland",
                                    "showCountry": false
                                },
                                "latLong": {
                                    "lat": 52.234078,
                                    "long": 6.849278
                                },
                                "urls": {
                                    "nl-NL": "/enschede/bushalte-jupiterstraat",
                                    "en-GB": "/en/enschede/bushalte-jupiterstraat"
                                }
                            },
                            "fallbackName": null
                        }
                    ]
                },
                {
                    "type": "scheduled",
                    "mode": {
                        "type": "bus",
                        "name": "Stadsbus"
                    },
                    "destination": "Wesselerbrink via CS",
                    "operator": {
                        "type": "syntus",
                        "name": "Syntus"
                    },
                    "service": "1",
                    "attributes": [],
                    "disturbancePlannerIds": [],
                    "serviceMessageIds": [],
                    "stops": [
                        {
                            "arrival": "2015-05-30T13:07",
                            "departure": "2015-05-30T13:07",
                            "platform": null,
                            "location": {
                                "id": "enschede/bushalte-jupiterstraat",
                                "type": "stop",
                                "stopType": "Bushalte",
                                "name": "Jupiterstraat",
                                "place": {
                                    "name": "Enschede",
                                    "regionCode": "OV",
                                    "regionName": "Overijssel",
                                    "showRegion": false,
                                    "countryCode": "NL",
                                    "countryName": "Nederland",
                                    "showCountry": false
                                },
                                "latLong": {
                                    "lat": 52.234078,
                                    "long": 6.849278
                                },
                                "urls": {
                                    "nl-NL": "/enschede/bushalte-jupiterstraat",
                                    "en-GB": "/en/enschede/bushalte-jupiterstraat"
                                }
                            },
                            "fallbackName": null
                        },
                        {
                            "arrival": "2015-05-30T13:08",
                            "departure": "2015-05-30T13:08",
                            "platform": null,
                            "location": {
                                "id": "enschede/bushalte-olieslagweg",
                                "type": "stop",
                                "stopType": "Bushalte",
                                "name": "Olieslagweg",
                                "place": {
                                    "name": "Enschede",
                                    "regionCode": "OV",
                                    "regionName": "Overijssel",
                                    "showRegion": false,
                                    "countryCode": "NL",
                                    "countryName": "Nederland",
                                    "showCountry": false
                                },
                                "latLong": {
                                    "lat": 52.231534,
                                    "long": 6.853631
                                },
                                "urls": {
                                    "nl-NL": "/enschede/bushalte-olieslagweg",
                                    "en-GB": "/en/enschede/bushalte-olieslagweg"
                                }
                            },
                            "fallbackName": null
                        },
                        {
                            "arrival": "2015-05-30T13:09",
                            "departure": "2015-05-30T13:09",
                            "platform": null,
                            "location": {
                                "id": "enschede/bushalte-winkelcentrum-twekkelerveld",
                                "type": "stop",
                                "stopType": "Bushalte",
                                "name": "Winkelcentrum Twekkelerveld",
                                "place": {
                                    "name": "Enschede",
                                    "regionCode": "OV",
                                    "regionName": "Overijssel",
                                    "showRegion": false,
                                    "countryCode": "NL",
                                    "countryName": "Nederland",
                                    "showCountry": false
                                },
                                "latLong": {
                                    "lat": 52.229541,
                                    "long": 6.857752
                                },
                                "urls": {
                                    "nl-NL": "/enschede/bushalte-winkelcentrum-twekkelerveld",
                                    "en-GB": "/en/enschede/bushalte-winkelcentrum-twekkelerveld"
                                }
                            },
                            "fallbackName": null
                        },
                        {
                            "arrival": "2015-05-30T13:09",
                            "departure": "2015-05-30T13:09",
                            "platform": null,
                            "location": {
                                "id": "enschede/bushalte-weegschaalstraat",
                                "type": "stop",
                                "stopType": "Bushalte",
                                "name": "Weegschaalstraat",
                                "place": {
                                    "name": "Enschede",
                                    "regionCode": "OV",
                                    "regionName": "Overijssel",
                                    "showRegion": false,
                                    "countryCode": "NL",
                                    "countryName": "Nederland",
                                    "showCountry": false
                                },
                                "latLong": {
                                    "lat": 52.228576,
                                    "long": 6.861584
                                },
                                "urls": {
                                    "nl-NL": "/enschede/bushalte-weegschaalstraat",
                                    "en-GB": "/en/enschede/bushalte-weegschaalstraat"
                                }
                            },
                            "fallbackName": null
                        },
                        {
                            "arrival": "2015-05-30T13:10",
                            "departure": "2015-05-30T13:10",
                            "platform": null,
                            "location": {
                                "id": "enschede/bushalte-toekomststraat",
                                "type": "stop",
                                "stopType": "Bushalte",
                                "name": "Toekomststraat",
                                "place": {
                                    "name": "Enschede",
                                    "regionCode": "OV",
                                    "regionName": "Overijssel",
                                    "showRegion": false,
                                    "countryCode": "NL",
                                    "countryName": "Nederland",
                                    "showCountry": false
                                },
                                "latLong": {
                                    "lat": 52.227772,
                                    "long": 6.866945
                                },
                                "urls": {
                                    "nl-NL": "/enschede/bushalte-toekomststraat",
                                    "en-GB": "/en/enschede/bushalte-toekomststraat"
                                }
                            },
                            "fallbackName": null
                        },
                        {
                            "arrival": "2015-05-30T13:12",
                            "departure": "2015-05-30T13:12",
                            "platform": null,
                            "location": {
                                "id": "enschede/bushalte-lambertus-buddestraat",
                                "type": "stop",
                                "stopType": "Bushalte",
                                "name": "Lambertus Buddestraat",
                                "place": {
                                    "name": "Enschede",
                                    "regionCode": "OV",
                                    "regionName": "Overijssel",
                                    "showRegion": false,
                                    "countryCode": "NL",
                                    "countryName": "Nederland",
                                    "showCountry": false
                                },
                                "latLong": {
                                    "lat": 52.223662,
                                    "long": 6.867818
                                },
                                "urls": {
                                    "nl-NL": "/enschede/bushalte-lambertus-buddestraat",
                                    "en-GB": "/en/enschede/bushalte-lambertus-buddestraat"
                                }
                            },
                            "fallbackName": null
                        },
                        {
                            "arrival": "2015-05-30T13:13",
                            "departure": "2015-05-30T13:13",
                            "platform": null,
                            "location": {
                                "id": "enschede/bushalte-borstelweg",
                                "type": "stop",
                                "stopType": "Bushalte",
                                "name": "Borstelweg",
                                "place": {
                                    "name": "Enschede",
                                    "regionCode": "OV",
                                    "regionName": "Overijssel",
                                    "showRegion": false,
                                    "countryCode": "NL",
                                    "countryName": "Nederland",
                                    "showCountry": false
                                },
                                "latLong": {
                                    "lat": 52.220534,
                                    "long": 6.871388
                                },
                                "urls": {
                                    "nl-NL": "/enschede/bushalte-borstelweg",
                                    "en-GB": "/en/enschede/bushalte-borstelweg"
                                }
                            },
                            "fallbackName": null
                        },
                        {
                            "arrival": "2015-05-30T13:15",
                            "departure": "2015-05-30T13:15",
                            "platform": null,
                            "location": {
                                "id": "enschede/bushalte-volkspark",
                                "type": "stop",
                                "stopType": "Bushalte",
                                "name": "Volkspark",
                                "place": {
                                    "name": "Enschede",
                                    "regionCode": "OV",
                                    "regionName": "Overijssel",
                                    "showRegion": false,
                                    "countryCode": "NL",
                                    "countryName": "Nederland",
                                    "showCountry": false
                                },
                                "latLong": {
                                    "lat": 52.221102,
                                    "long": 6.880554
                                },
                                "urls": {
                                    "nl-NL": "/enschede/bushalte-volkspark",
                                    "en-GB": "/en/enschede/bushalte-volkspark"
                                }
                            },
                            "fallbackName": null
                        },
                        {
                            "arrival": "2015-05-30T13:17",
                            "departure": "2015-05-30T13:20",
                            "platform": null,
                            "location": {
                                "id": "enschede/bushalte-centraal",
                                "type": "stop",
                                "stopType": "Bushalte",
                                "name": "Centraal Station",
                                "place": {
                                    "name": "Enschede",
                                    "regionCode": "OV",
                                    "regionName": "Overijssel",
                                    "showRegion": false,
                                    "countryCode": "NL",
                                    "countryName": "Nederland",
                                    "showCountry": false
                                },
                                "latLong": {
                                    "lat": 52.221589,
                                    "long": 6.889602
                                },
                                "urls": {
                                    "nl-NL": "/enschede/bushalte-centraal",
                                    "en-GB": "/en/enschede/bushalte-centraal"
                                }
                            },
                            "fallbackName": null
                        }
                    ]
                }
            ],
            "fareInfo": {
                "complete": true,
                "fullPriceCents": 145,
                "reducedPriceCents": 96,
                "legs": [
                    {
                        "from": {
                            "id": "enschede/bushalte-jupiterstraat",
                            "type": "stop",
                            "stopType": "Bushalte",
                            "name": "Jupiterstraat",
                            "place": {
                                "name": "Enschede",
                                "regionCode": "OV",
                                "regionName": "Overijssel",
                                "showRegion": false,
                                "countryCode": "NL",
                                "countryName": "Nederland",
                                "showCountry": false
                            },
                            "latLong": {
                                "lat": 52.234078,
                                "long": 6.849278
                            },
                            "urls": {
                                "nl-NL": "/enschede/bushalte-jupiterstraat",
                                "en-GB": "/en/enschede/bushalte-jupiterstraat"
                            }
                        },
                        "to": {
                            "id": "enschede/bushalte-centraal",
                            "type": "stop",
                            "stopType": "Bushalte",
                            "name": "Centraal Station",
                            "place": {
                                "name": "Enschede",
                                "regionCode": "OV",
                                "regionName": "Overijssel",
                                "showRegion": false,
                                "countryCode": "NL",
                                "countryName": "Nederland",
                                "showCountry": false
                            },
                            "latLong": {
                                "lat": 52.221589,
                                "long": 6.889602
                            },
                            "urls": {
                                "nl-NL": "/enschede/bushalte-centraal",
                                "en-GB": "/en/enschede/bushalte-centraal"
                            }
                        },
                        "locationsString": "Enschede",
                        "modeTypeString": "Bus",
                        "operatorString": "Syntus",
                        "fares": [
                            {
                                "class": "none",
                                "reduced": false,
                                "eurocents": 145
                            },
                            {
                                "class": "none",
                                "reduced": true,
                                "eurocents": 96
                            }
                        ]
                    }
                ]
            }
        }
    ],
    "earlier": "/0.1/journeys?lang=nl-NL&from=enschede%2Fbushalte-ut-hallenweg&to=enschede%2Fbushalte-centraal&searchType=departure&dateTime=2015-05-30T1259&sequence=1&byTrain=true&byBus=true&bySubway=true&byTram=true&byFerry=true&interchangeTime=standard&after=-1&realtime=false",
    "later": "/0.1/journeys?lang=nl-NL&from=enschede%2Fbushalte-ut-hallenweg&to=enschede%2Fbushalte-centraal&searchType=departure&dateTime=2015-05-30T1259&sequence=1&byTrain=true&byBus=true&bySubway=true&byTram=true&byFerry=true&interchangeTime=standard&before=-1&realtime=false",
    "disturbances": [],
    "serviceMessages": [],
    "nearbyAddresses": []
};

function resultToText(){ //result){
    if(result.journeys && result.journeys.length > 0){
        result.journeys[0].
    }
}

module.exports.init = init;
