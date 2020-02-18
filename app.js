// Event: Something that has happened in our app that we can respond to.
// Inheritance: One object thatgets access to the properties and methods of another object.
// Prototypical inheritance: 
// Function constructors: A normal function that is used to construct objects. 

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

// Pointing to the class' prototype, not the instance prototype. Whatever you change in one, it will reflects in the others.
Person.prototype.greet = function() {
    console.log(`Hello, ${this.firstname} ${this.lastname}`);
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

// How to print the prototype's content
console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);