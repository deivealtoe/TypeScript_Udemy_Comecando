"use strict";
class Base {
    someMethod() {
        console.log('Alguma coisa');
    }
}
class Nova extends Base {
    someMethod() {
        console.log('Outra coisa');
    }
}
const myAlgo = new Nova();
myAlgo.someMethod();
