require('sugar');

var locale = 'nl';

function date(str) {
    var date = Date.create(str, locale);
    if(isNaN(date)) {
        str = str.replace(/\s+uur/g, ':00');
        console.log(str);
        date = Date.create(str, locale);
    }
    if(isNaN(date)) {
        date = null;
    }
    return date;
}

module.exports.date = date;
