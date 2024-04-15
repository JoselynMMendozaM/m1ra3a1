function mostrarNumeros(event) {
    event.preventDefault();

    const num = parseInt(document.getElementById("num").value);

    if (isNaN(num) || num <= 0) {
        alert("Ingrese un número positivo mayor a cero.");
        return;
    }

    
    let numeros = "";
    for (let i = 1; i <= num; i++) {
        numeros += `${i} `;
    }

    const resultado_num = document.getElementById("resultado_num");
    resultado_num.innerHTML =`<h2>los números del 1 al ${num} son: <br> ${numeros}</h2>`;
}
