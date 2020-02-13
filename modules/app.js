//Import an anonymous function in a variable
var greet1 = require('./greet1');
greet1();

//Import a named function in a variable
var greet2 = require('./greet2').greet2;
greet2();

//Import an already created object. All of them references the same object
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

var greet3b = require('./greet3');
greet3b.greet();

//Import a constructur
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();