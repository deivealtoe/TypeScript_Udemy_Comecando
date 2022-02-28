interface User {
  email: string
  role?: string
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o email ${user.email}`)

  if (user.role) {
    console.log(`Sua função é ${user.role}`)
  }
}

const user: User = {
  email: 'foo@bar.com'
}

const anotherUser: User = {
  email: 'jon@doe.net',
  role: 'Admin'
}

showUserDetails(user)
showUserDetails(anotherUser)
