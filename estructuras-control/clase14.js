var lucas = {
    nombre: 'Lucas',
    apellido: 'Leone',
    edad: 18,
    peso: 105
}

console.log(`Al inicio del año ${lucas.nombre} pesa ${lucas.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = lucas.peso - 3
var dias = 0

while (lucas.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(lucas)
    }
    if (realizaDeporte()) {
        adelgazar(lucas)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${lucas.nombre} adelgazo 3kg`)