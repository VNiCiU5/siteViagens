class pessoa {

    constructor (nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log("ola"+ this.nome);
    }
}

p1 = new pessoa("FABIO", "SILVA");
P1.falar();