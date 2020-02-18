// Object literals with key pairs
var obj = {
    greet: `Hello`
}

console.log(obj.greet);
console.log(obj['greet']);
// Get access to a key using a variable with the name of a key
var prop = 'greet';
// obj[''] to reference a key, obj[a] to reference a key using a variable
console.log(obj[prop]);

// Function array
var arr = [];

arr.push(function() {
    console.log('Hello world 1');
});
arr.push(function() {
    console.log('Hello world 2');
});
arr.push(function() {
    console.log('Hello world 3');
});

arr.forEach((item) => {
    item();
});