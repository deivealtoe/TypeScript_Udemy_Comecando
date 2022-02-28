class User {
  username: string = ''

  constructor(username: string) {
    this.username = username
  }
}

class SuperUser extends User {
  constructor(username: string) {
    super(username)
  }
}

const foo = new SuperUser('Foo')
const bar = new User('Bar')

console.log(foo)
console.log(bar)

function userGreeting(user: User) {
  if (user instanceof SuperUser) {
    console.log(`Olá, ${user.username}! Deseja visualizar os dados do sistema?`)
  } else if (user instanceof User) {
    console.log(`Olá, ${user.username}! Seja bem vindo(a)`)
  }
}

userGreeting(foo)
userGreeting(bar)
