"use strict";
class E {
    constructor(cpf) {
        this.cpf = cpf;
    }
}
class F extends E {
    constructor(cpf, rg) {
        super(cpf);
        this.rg = rg;
    }
    showCpf() {
        console.log(this.cpf);
    }
}
const f = new F('143', '326');
f.showCpf();
// f.cpf
