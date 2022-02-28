class StaticMembers {
  static property: string = 'Hello'

  static showMessage(): void {
    console.log('Showing message')
  }
}

console.log(StaticMembers.property)

StaticMembers.showMessage()
