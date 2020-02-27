const EventEmitter = require('events');
const util = require('util');

// Es una forma diferente de hacer el Prototype, Inherit
// module.exports = Exporta una clase como modulo
module.exports = class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world!';
    }

    greet(data) {
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
}