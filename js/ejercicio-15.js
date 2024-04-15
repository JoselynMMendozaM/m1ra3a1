function crearTabla(event) {
    event.preventDefault();
  
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);
  
    if (isNaN(filas) || filas <= 0) {
      alert("Ingrese un número positivo mayor a cero para las filas.");
      return;
    }
  
    if (isNaN(columnas) || columnas <= 0) {
      alert("Ingrese un número positivo mayor a cero para las columnas.");
      return;
    }
  
    let tabla = `<table class="table table-bordered border-warning p-4 text-light text-center table-hover table-dark table-striped">`;
    for (let i = 0; i < filas; i++) {
      tabla += `<tr>`;
      for (let j = 0; j < columnas; j++) {
        // Empty cells by default
        tabla += `<td></td>`;
      }
      tabla += `</tr>`;
    }
    tabla += `</table>`;
  
    const resultado = document.getElementById("tb-resultado");
    resultado.innerHTML = tabla;
  }
  