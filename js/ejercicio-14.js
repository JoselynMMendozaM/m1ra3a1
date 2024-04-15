function contarVocales(event) {
    event.preventDefault();

    const texto = document.getElementById("texto").value.toLowerCase();

    const vocales = ["a", "e", "i", "o", "u"];
    let conteoVocales = {};
    for (const vocal of vocales) {
        conteoVocales[vocal] = 0;
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === vocal) {
                conteoVocales[vocal]++;
            }
        }
    }

    let tabla = `<table class="table table-bordered border-warning p-4 text-light text-center table-hover table-dark table-striped">`;
    tabla += `<tr><th>Vocal</th><th>Cantidad</th></tr>`;
    for (const vocal in conteoVocales) {
        tabla += `<tr><td class="px-4 ">${vocal}</td><td>${conteoVocales[vocal]}</td></tr>`;
    }
    tabla += `</table>`;

    const resultado = document.getElementById("resultado-vocales");
    resultado.innerHTML = tabla;
}

