let nome = "MaveStein"
let idade = 26

class tipo {
    constructor (classeDoHeroi, armaDoHeroi){
        this.classeDoHeroi = classeDoHeroi
        this.armaDoHeroi = armaDoHeroi
    }
    ataque(){
    console.log(`o ${this.classeDoHeroi} atacou usando ${this.armaDoHeroi}`)
    }
}

let Mago = new tipo ("Mago","Magia")
let Guerreiro = new tipo ("Guerreiro","Espada")
let Monge = new tipo ("Monge","Artes Marciais")
let Ninja = new tipo ("Ninja","Shuriken")

Mago.ataque()
Guerreiro.ataque()
Monge.ataque()
Ninja.ataque()