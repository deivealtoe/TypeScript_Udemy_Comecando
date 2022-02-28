"use strict";
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData('Olá, Mundo!'));
console.log(showData(42));
function showProductName(product) {
    console.log(`O nome do produto é ${product.name}`);
}
const box = {
    name: 'Caixa',
    color: 'Azul'
};
const keyboard = {
    name: 'Keyboard',
    config: 'ABNT2'
};
const airdots = {
    color: 'Black',
    version: 1
};
showProductName(box);
showProductName(keyboard);
// showProductName(airdots)
