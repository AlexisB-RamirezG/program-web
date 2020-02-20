var Emitter = require('events');
// Imports config keywords
var config = require('./config').events;

var emtr = new Emitter();

//config.GREET returns the string of the event 
emtr.on(config.GREET, () => {
    console.log(`Somewhere, someone said hello.`);
});

emtr.on(config.GREET, () => {
    console.log(`A greeting ocurred.`);
});

console.log(`Hello!`);
emtr.emit('greet');