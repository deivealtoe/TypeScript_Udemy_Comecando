"use strict";
class Coordinates {
    set fillX(x) {
        if (x == 0) {
            return;
        }
        this.x = x;
        console.log(`O valor de x: ${this.x}. Foi inserido com sucesso`);
    }
    set fillY(y) {
        if (y == 0) {
            return;
        }
        this.y = y;
        console.log(`O valor de y: ${this.y}. Foi inserido com sucesso`);
    }
    get getCoords() {
        return `As coordenadas são. x: ${this.x}, y: ${this.y}`;
    }
}
const coord = new Coordinates();
coord.fillX = 5;
coord.fillY = 6;
console.log(coord.getCoords);
