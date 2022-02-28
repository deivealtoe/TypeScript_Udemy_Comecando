class Coordinates {
  x!: number
  y!: number

  set fillX(x: number) {
    if (x == 0) {
      return
    }

    this.x = x

    console.log(`O valor de x: ${this.x}. Foi inserido com sucesso`)
  }

  set fillY(y: number) {
    if (y == 0) {
      return
    }

    this.y = y

    console.log(`O valor de y: ${this.y}. Foi inserido com sucesso`)
  }

  get getCoords(): string {
    return `As coordenadas são. x: ${this.x}, y: ${this.y}`
  }
}

const coord = new Coordinates()

coord.fillX = 5
coord.fillY = 6

console.log(coord.getCoords)
