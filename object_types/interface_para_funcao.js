"use strict";
function showProductsDetailsInterface(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log(`O produto ${product.name} está disponível`);
    }
}
const shirt = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: true
};
showProductsDetailsInterface(shirt);
showProductsDetailsInterface({ name: 'Bermuda', price: 29.99, isAvailable: false });
