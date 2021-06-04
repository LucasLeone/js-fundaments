var signo = prompt('Cual es tu signo?')

switch (signo) {
    case 'acuario':
        console.log('Imprime acuario')
        break
    case 'leo':
        console.log('Imprime leo')
        break
    case 'piscis':
        console.log('Imprime piscis')
        break
    case 'escorpio':
        console.log('Imprime escorpio')
        break
    case 'tauro':
    case 'tauró':
        console.log('Imprime tauro')
        break
    default:
        console.log('No es un signo zodiacal valido')
        break
}