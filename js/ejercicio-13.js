function contarCaracteres(){
    const text1 = document.getElementById('text-1').value;
    const text2 = document.getElementById('text-2').value;
    const totalCaracteres = text1.length + text2.length;

    const contarCaracteres = `<h3 class="text-uppercase">La cantidad total de caracteres es: ${totalCaracteres}</h3>`;
    document.getElementById('resultado').innerHTML = contarCaracteres;
}

function contarS() {
    const text1 = document.getElementById('text-1').value;
    const text2 = document.getElementById('text-2').value;
    let contadorS1 = 0;
    let contadorS2 = 0;
    let totalS = 0;

    for (let i = 0; i < text1.length; i++) {
        if (text1[i].toLowerCase() === "s") {
        contadorS1++;
        }
    }

    for (let i = 0; i < text2.length; i++) {
        if (text2[i].toLowerCase() === "s") {
        contadorS2++;
        }
    }

    totalS = contadorS1 + contadorS2;

    const textos = ["No. 1", "No. 2", "Total"];
    const cantidades = [contadorS1, contadorS2, totalS];

    const tabla = `
        <table class="table table-bordered border-warning p-4 text-light text-center table-hover table-dark table-striped">
        <tr><th>TEXTO</th><th>CANTIDAD</th></tr>
        ${textos.map((texto, i) => `<tr><td class="px-4 ">${texto}</td><td>${cantidades[i]}</td></tr>`).join('')}
        </table>
    `;

    const resultado = document.getElementById("resultado").innerHTML = `<h3 class="text-uppercase">Cantidad de letras s</h3> ${tabla}`;
    
}

function contarNumPares() {
const text1 = document.getElementById('text-1').value;
const text2 = document.getElementById('text-2').value;
const concatenatedText = text1 + text2;
const lettersInEvenPosition = getLettersInEvenPosition(concatenatedText);
const tableHTML = generateTable(lettersInEvenPosition);
document.getElementById('resultado').innerHTML = `<h3 class="text-uppercase">Letras en Posición Par</h3><br>${tableHTML}`;
}

function getLettersInEvenPosition(text) {
let resultado = '';
for (let i = 1; i < text.length; i += 2) {
resultado += text[i];
}
return resultado;
}

function generateTable(letters) {
let table = '<table class="table table-bordered border-warning p-4 text-light text-center table-hover table-dark table-striped"><tr><th>Número</th><th>Letra</th></tr>';
for (let i = 0; i < letters.length; i++) {
table += `<tr><td>${i + 1}</td><td>${letters[i]}</td></tr>`;
}
table += `<tr><td>Total :</td><td>${letters.length}</td></tr>`; 
return table;
}

