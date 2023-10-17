
var texto = prompt("Escribe un texto:");
texto = separaPalabras(texto);
console.log(giraPalabras(texto));

    while (texto != "ESC" && texto != "esc") {
        var texto = prompt("Escribe un texto:");
        if (texto === "ESC" || texto === "esc");
        else {
            texto = separaPalabras(texto);
            console.log(giraPalabras(texto));
        }
    }

    function separaPalabras(texto) {

        texto = texto.split(" ");
        return texto;
    }

    function giraPalabras(texto) {

        let textoFinal = "";

        for (let i = 0; i < texto.length; i++) {
            let textoSeparado = texto[i].split("");
            let textoInvertido = textoSeparado.reverse();
            let textoJunto = textoInvertido.join("");
            textoFinal += textoJunto + " ";
        }

        return textoFinal;
    }