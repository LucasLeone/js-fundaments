var lucas = {
    nombre: 'Lucas',
    apellido: 'Leone',
    edad: 18,
    peso: 105
}

console.log(`Al inicio del año ${lucas.nombre} pesa ${lucas.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO



for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
    var random = Math.random()
    
    if (random < 0.25) {
        aumentarDePeso(lucas)
    } else if (random < 0.5) {
        adelgazar(lucas)
    }
}

console.log(`Al final del año ${lucas.nombre} pesa ${lucas.peso.toFixed(2)}kg`)