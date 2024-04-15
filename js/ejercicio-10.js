 function contarRepeticiones(event) {
    event.preventDefault();

    const texto = document.getElementById("texto").value;
    const palabra = document.getElementById("palabra").value.toLowerCase();
    const textoMinusculas = texto.toLowerCase();

    let repeticiones = 0;
    let indice = textoMinusculas.indexOf(palabra);
    while (indice !== -1) {
        repeticiones++;
        indice = textoMinusculas.indexOf(palabra, indice + palabra.length);
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h2 class="text-center">La palabra "${palabra}" se repite **${repeticiones}** veces en el texto.</h2>`;
}
            