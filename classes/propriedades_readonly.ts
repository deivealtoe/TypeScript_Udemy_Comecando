class Shirt {
  name
  readonly wheels = 4

  constructor(name: string) {
    this.name = name
  }
}

const guci = new Shirt('Guci')

console.log(guci)

// guci.wheels = 2
