class heroi {
    constructor (nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
 
atacar () {
let ataque;
    switch (this.tipo){
        case "guerreiro":
        ataque = "espada"
        break

        case "mago":
        ataque = "magia"
        break
        
        case "ninja":
        ataque = "shuriken"
        break
        
        case "monje":
        ataque = "artes marciais"
        break
    }
    console.log ("O " + this.tipo + " atacou usando " + ataque);
    }
    mostrar_infos (){
    console.log ("Nome - " + this.nome) 
    console.log ("Idade - " + this.idade)
    console.log ("Classe - " + this.tipo)
}

}

    let heroi1 = new heroi ("Enzo", 18, "mago");
    heroi1.mostrar_infos();
    heroi1.atacar();

    let heroi2 = new heroi ("Caetano", 21, "guerreiro");
    heroi2.atacar();