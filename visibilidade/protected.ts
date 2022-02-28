class E {
  protected cpf: string

  constructor(cpf: string) {
    this.cpf = cpf
  }
}

class F extends E {
  public rg: string

  constructor(cpf: string, rg: string) {
    super(cpf)

    this.rg = rg
  }

  public showCpf(): void {
    console.log(this.cpf)
  }
}

const f = new F('143', '326')

f.showCpf()
// f.cpf