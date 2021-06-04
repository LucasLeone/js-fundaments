function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    if (this.altura > 1.8) {
        console.log(`${this.nombre} es alt@`)
    } else {
        console.log(`${this.nombre} no es alt@`)
    }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.85)
var erika = new Persona('Erika', 'Luna', 1.6)
var arturo = new Persona('Arturo', 'Martinez', 1.7)