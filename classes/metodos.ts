class Person {
  name: string

  constructor(name: string) {
    this.name = name
  }

  public greet(): string {
    return `Hello, ${this.name}. How are you?`
  }
}

const doe = new Person('Doe')

console.log(doe.greet())
console.log(doe)
