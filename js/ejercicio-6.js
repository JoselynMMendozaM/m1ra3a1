function mostrarTabla() {
    const num = parseFloat(document.getElementById('num').value);

    if (isNaN(num)) {
        alert('Por favor, complete el campo.');
        return;
    }

    let tabla = `<h2>La tabla de multiplicar de ${num}:</h2><h4><br>`;

    for (let i = 0; i <= 10; i++) {
        tabla += `${num} * ${i} = ${num * i}.<br>`;
    }

    tabla += `</h4>`;
    document.getElementById('tabla').innerHTML = tabla;
}
