function mostrarCaracteres(event) {
    event.preventDefault();
  
    const texto = document.getElementById("texto").value;
    let caracteres = "<table class='table table-bordered border-warning text-light text-center table-hover table-dark table-striped'>";
    let filaActual = 1;
  
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] !== ' ') { 
        caracteres += `<tr><td>${texto[i]}</td>`; 
        if (i + 1 < texto.length && texto[i + 1] !== ' ') {
          caracteres += `<td>${texto[i + 1]}</td></tr>`;  
        } else {
          caracteres += "<td></td></tr>";  
        }
      }
    }
  
    caracteres += "</table>";
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = caracteres;
  }
  
  