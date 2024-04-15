function indicarSigno() {
    const numero = parseFloat(document.getElementById('numero').value);

    if (isNaN(numero)) {
        alert('Por favor, complete el campo.');        return;
    }

    if (numero > 0) {
        document.getElementById('resultado').innerHTML = '<h5>El número es positivo.</h5>';
    } else if (numero < 0) {
        document.getElementById('resultado').innerHTML = '<h5>El número es negativo.</h5>';
    } else {
        document.getElementById('resultado').innerHTML = '<h5>El número es neutro.</h5>';
    }
}