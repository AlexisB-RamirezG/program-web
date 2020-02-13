function Greetr() {
    this.greeting = 'Hello';
    this.greet = function() {
        console.log(this.greeting);
    }
}

//Exports an object
module.exports = new Greetr();