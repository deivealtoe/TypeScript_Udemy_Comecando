"use strict";
class Shirt {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
}
const onePieceShirt = new Shirt('One Piece', 10, 19.99);
console.log(onePieceShirt);
onePieceShirt.name = 'Chopper';
console.log(onePieceShirt.name);
// console.log(onePieceShirt.price)
