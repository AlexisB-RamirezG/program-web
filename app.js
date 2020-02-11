/*function greet() {
    console.log(`Hi`);
}*/

//Nueva forma
let greet = () => {
    console.log(`Hi`);
}

greet();

/*function logGreeting(fn) {
    console.log(fn);
    fn();
}*/

//Function expression   let XXXXXX = () => {}
let logGreeting = (fn) => {
    fn();
}

//logGreeting(greet);


//Functions are first class so you can send them as a parameter
//Función as parameter XXXXX(() => {});
logGreeting(() => {
    console.log(`Hi`);
});

//Use a function expression on the fly. See above too
logGreeting2(function() {
    console.log(`Hi`)
});