const min = 0;
const max = 99999;
var intentosEncontrar = 0;
var encontrado = false;


var cantidad = prompt("número de décimos aleatorios que quieres generar");

    while (isNaN.cantidad || cantidad <= 0 || cantidad > 99999){

        cantidad = prompt("Introduzca un número valido");
    }


var decimos = generaNAleatorios(cantidad, min, max);

while (!encontrado && intentosEncontrar < 99999) {

    let numero = generaAleatorio(0, 99999);
    intentosEncontrar++;
}

if (decimos.includes(numero)) {

    encontrado = true;
}



function generaAleatorio(min, max) { 

    return Math.round(Math.random() * (max - min + 1) + min); 
}

function generaNAleatorios(cantidad, min, max) {

    let resultado = [];

    for (i = 0; i < cantidad; i++) {

        resultado[i] = generaAleatorio(min, max);
    }

    console.log(resultado);
    return resultado;
}