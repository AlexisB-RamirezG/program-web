let person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function() {
        console.log(`Hello, ${this.firstname} ${this.lastname}`);
    }
}

//objetc['key']   object.key
console.log(person.firstname, person['lastname']);
person.greet();