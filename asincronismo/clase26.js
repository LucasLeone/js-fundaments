class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if (fn) {
            fn(this.nombre, this.apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
        if (fn) {
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mira, no sabia que eras dev`)
    }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.85)
var erika = new Persona('Erika', 'Luna', 1.6)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.7)

sacha.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)