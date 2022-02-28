function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Hello, ${firstName} ${lastName}`
  }

  return `Hello, ${firstName}`
}

console.log(advancedGreeting(`Foo`))
console.log(advancedGreeting(`Foo`, `Bar`))
