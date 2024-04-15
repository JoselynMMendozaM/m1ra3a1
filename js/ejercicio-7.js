function mostrarPares(){
            
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, complete el campo.');
        return;
    }

    if (num1 > num2) {
        alert("El primer número debe ser menor o igual al segundo");
        return;
    }

    const resultado = document.getElementById("resultado");

    let num_pares = "";
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            num_pares += `${i} `;
        }
    }

    document.getElementById('resultado').innerHTML =  `<h4 class="p-4">Los número pares encontrados en el rango de ${num1} a ${num2} son: <br><br> ${num_pares}</h4>`;
        

}
