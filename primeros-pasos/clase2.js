var nombre = 'Sacha'; var apellido = 'Lifszyc';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLocaleLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;

var nombreCompleto = nombre + ' ' + apellido
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)

// DESAFIO ULTIMA LETRA DE SU NOMBRE
var nombre_user = 'Lucas'
var lastLetter = nombre_user.substr(-1, 1)