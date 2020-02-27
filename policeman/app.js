// Módulo nativo de node.js
var util = require('util');

// Constructor de Persona
function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

// Función en el prototipo de persona
Person.prototype.greet = function() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
}

// Constructor de Policia
function Policeman() {
    // Esta línea te permite también ejecutar el constructor de la clase de la cual hereda
    Person.call(this);
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
let officer = new Policeman();
officer.greet();