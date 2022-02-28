class User {
  name!: string
  age!: number
}

const jon = new User()

console.log(jon)

jon.name = 'Jon'
jon.age = 42
// jon.id = 2

console.log(jon)
