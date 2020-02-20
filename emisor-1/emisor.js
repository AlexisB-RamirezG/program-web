// Constructor function
function Emitter() {
    this.events = {};
}

// Method in prototype
Emitter.prototype.on = function(type, listener) {
    // Validates that the array isn't empty, and if it is then equals it to an empty array
    this.events[type] = this.events[type] || [];
    /* this.events = {
        greet: [];
    }*/
    this.events[type].push(listener);
    /* this.events = {
        greet:[() => {}, () => {}]
    }*/
}

Emitter.prototype.emit = function(type) {
    if(this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;