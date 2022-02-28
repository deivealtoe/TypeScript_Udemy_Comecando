"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, ${this.name}. How are you?`;
    }
}
const doe = new Person('Doe');
console.log(doe.greet());
console.log(doe);
