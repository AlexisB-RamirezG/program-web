// Sintaxis estricta
'use strict';

var util = require('util');
var Greetr = require('./greetr');

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log(`Someone greeted!: ${data}`);
});

greeter1.greet('Lana');

/*
function Greetr() {
    EventEmitter.call(this);
    this.greeting = 'Hello world!';
}
// Let two clases inherit functions/methods
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting, data);
    // Sends an attribute to the 'on' function and triggers the event response 
    this.emit('greet', data);
}

var greeter1 = new Greetr(); 

greeter1.on('greet', function(data) {
    console.log('Someone greeted!: ' + data);
});*/