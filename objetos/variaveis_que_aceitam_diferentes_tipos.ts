function showBalance(balance: string | number) {
    console.log(`O saldo da conta é ${balance}`)
}

showBalance(100)
showBalance('500')

const myArr: Array<string | number> = [1, 'Test', 2, `Foo`]
console.log(myArr)

function showUserRole(role: boolean | string) {
  if (typeof(role) === 'boolean') {
    return 'Usuário não aprovado'
  }

  return `A função do usuário é ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole('Admin'))
