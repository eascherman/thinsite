


var fs = require('fs');
var eventsCode = require('./eventsbuilder');



fs.writeFile("./onevents.js", eventsCode, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("onevents.js build complete");
}); 