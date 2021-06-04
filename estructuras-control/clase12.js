var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeriero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
};


const MAYORIA_DE_EDAD = 18

// const esMayorDeEdad = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// const esMayorDeEdad = persona => {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if (esMenorDeEad(persona)) {
        console.log('ACESSO DENEGADO')
    } else {
        console.log('ACCESO PERMITIDO')
    }
}

// RETO
// escribir la funcion esMenorDeEdad como arrow function y que retorne la
// la negacion a la llamada esMayorDeEdad

const esMenorDeEad = (persona) => {
    return persona.edad <= 18
}