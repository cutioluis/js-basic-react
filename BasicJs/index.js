// Creacion de funciones

//Funciones por declaraciom - Probablemente, la forma mas popular
function saludar(params) {
  return "Hola";
}

// Funciones por expresion -
const saludar = function (params) {};

// Funciones anonimas - Las funciones anonimas son funciones que se declaran sin nombre de funcion y se alojan en el  interior de una variable y haciendo referencia a ella cada vez que queramos utilizarla

const saludo = function (params) {
}

// Arrow functions son funciones que se declaran en una arrow o linea de

const name = () => {}

// Functions Autoejecutables

(function (n1,n2) {
  return console.log(n1 + n2);
})(4,5)


