"use strict";
class WaterBottle {
    constructor(name, ml) {
        this.name = name;
        this.ml = ml;
    }
    get getMl() {
        return this.ml;
    }
}
const tapauwhere = new WaterBottle('Tapauwhere', 500);
console.log(tapauwhere.getMl);
