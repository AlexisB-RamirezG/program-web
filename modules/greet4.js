function Greetr() {
    this.greeting = 'Hello Venice';
    this.greet = function() {
        console.log(this.greeting);
    }
}

//Exports a constructor
module.exports = Greetr;