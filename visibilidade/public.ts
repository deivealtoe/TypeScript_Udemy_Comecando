class C {
  public x: string

  constructor(x: string) {
    this.x = x
  }

  public get getX(): string {
    return this.x
  }

  public set setX(x: string) {
    this.x = x
  }
}

const c = new C('C')
console.log(`Get: ${c.getX}`)
c.setX = 'D'
console.log(`After Set: ${c.getX}`)
