/* callbacks (también llamadas funciones callback o retrollamadas). A grandes rasgos, un callback (llamada hacia atrás) 
es pasar una función B por parámetro a una función A, de modo que la función A puede ejecutar esa función B de 
forma genérica desde su código, y nosotros podemos definirlas desde fuera de dicha función: */

// FB = Funcion B
const fa = function (params) {
  console.log("Funcion B ejecutada");
};

// FA = Funcion A
const fb = function (callback) {
  callback();
};

fb(fa);
