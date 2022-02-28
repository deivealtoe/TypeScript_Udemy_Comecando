class WaterBottle {
  name: string
  ml: number

  constructor(name: string, ml: number) {
    this.name = name
    this.ml = ml
  }

  get getMl(): number {
    return this.ml
  }
}

const tapauwhere = new WaterBottle('Tapauwhere', 500)

console.log(tapauwhere.getMl)
