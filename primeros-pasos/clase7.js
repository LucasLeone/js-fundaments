var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 38
};

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}


function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
};

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
// imprimirNombreEnMayusculas({ nombre: 'Pepito' });
// imprimirNombreEnMayusculas({ apellido : 'Gomez' });


// RETO
function imprimirNombreYEdad(persona) {
    // Imprimir: Hola, me llamo Sacha y tengo 28 años
    // Imprimir: Hola, me llamo Dario y tengo 27 años
    var nombre = persona.nombre
    var edad = persona.edad
    console.log('Hola, me llamo ' + nombre + ' y tengo ' + edad)
}

imprimirNombreYEdad(sacha);
imprimirNombreYEdad(dario);