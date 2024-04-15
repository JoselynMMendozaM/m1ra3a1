function indicarMayorMenorMedio() {
    const num_1 = parseFloat(document.getElementById('num_1').value);
    const num_2 = parseFloat(document.getElementById('num_2').value);
    const num_3 = parseFloat(document.getElementById('num_3').value);

    if (isNaN(num_1) || isNaN(num_2) || isNaN(num_3)) {
        alert('Por favor, complete todos los campos con valores numéricos.');
        return;
    }

    let mayor, menor, medio;

    if (num_1 >= num_2 && num_1 >= num_3) {
        mayor = num_1;
        if (num_2 >= num_3) {
            medio = num_2;
            menor = num_3;
        } else {
            medio = num_3;
            menor = num_2;
        }
    } else if (num_2 >= num_1 && num_2 >= num_3) {
        mayor = num_2;
        if (num_1 >= num_3) {
            medio = num_1;
            menor = num_3;
        } else {
            medio = num_3;
            menor = num_1;
        }
    } else {
        mayor = num_3;
        if (num_1 >= num_2) {
            medio = num_1;
            menor = num_2;
        } else {
            medio = num_2;
            menor = num_1;
        }
    }

    document.getElementById('resultado').innerHTML = `<h2>El número mayor es: ${mayor}  <br> <br>El número menor es: ${menor} <br><br>El número del medio es: ${medio} </h2>`;
}