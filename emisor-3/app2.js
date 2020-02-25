var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = `Hello world!`;
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
});


////////////////////////////////////////////////////////////////////////////////////////
greeter1.greet('Tony');

var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`What's up, ${this.name}?`);
    }
}

obj.greet();
// call() lets you call a function in an object with temporal parameters 
obj.greet.call({name: 'Jane Doe'});
console.log(obj);