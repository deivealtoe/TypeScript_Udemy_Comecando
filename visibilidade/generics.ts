class Item<T, U> {
  first: T
  second: U

  constructor(first: T, second: U) {
    this.first = first
    this.second = second
  }

  public showTypes(): void {
    console.log(`First: ${typeof(this.first)} - Second: ${typeof(this.second)}`)
  }
}

const item1 = new Item('Primeiro', 'Segundo')
console.log(item1)
item1.showTypes()

const item2 = new Item(1, 2)
console.log(item2)
item2.showTypes()
