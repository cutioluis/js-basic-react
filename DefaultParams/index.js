
function sumarNumero2(num0, num1) {
    if (num0 === undefined || num1 === undefined) {
        console.log('Imgresa valores');
    }
    return console.log(num0 + num1);
}


// Puedes agregar valores por defecto para que no den errores
function sumarNumero(num0 = 0, num1 = 0) {
    return console.log(num0 + num1);
}

sumarNumero(2)