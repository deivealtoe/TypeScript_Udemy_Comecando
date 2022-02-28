"use strict";
class C {
    constructor(x) {
        this.x = x;
    }
    get getX() {
        return this.x;
    }
    set setX(x) {
        this.x = x;
    }
}
const c = new C('C');
console.log(`Get: ${c.getX}`);
c.setX = 'D';
console.log(`After Set: ${c.getX}`);
