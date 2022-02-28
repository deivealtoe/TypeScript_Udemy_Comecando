class Car {
  model: string
  year: number

  constructor(model: string, year: number) {
    this.model = model
    this.year = year
  }
}

const bmw = new Car('BMW', 2022)

console.log(bmw)
