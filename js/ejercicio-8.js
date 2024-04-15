function mostrarMCD(event) {
    event.preventDefault();

    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);


    const mcd = calcularMCD(num1, num2);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h2>El MCD de ${num1} y ${num2} es: ${mcd}</h2>`;

    alert(`El MCD de ${num1} y ${num2} es: ${mcd}`);


    console.log(`El MCD de ${num1} y ${num2} es: ${mcd}`);
}

function calcularMCD(a, b) {
    while (b !== 0) {
        let t = a % b;
        a = b;
        b = t;
    }
    return a;
}