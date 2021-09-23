const suma = {
    x: 15,
    y: 15,
}

// Sin destructuracion
function sumarNumero(suma) {
   return console.log(suma.x + suma.y);
}

sumarNumero(suma)


// Con destructuracion

function sumarNumero2({x, y}) {
    console.log(x + y);
}

sumarNumero2(suma)