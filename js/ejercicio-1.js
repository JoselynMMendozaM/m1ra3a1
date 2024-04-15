function mostrarDatos(event) {
    event.preventDefault();
    
    const carnet = document.getElementById('carnet').value.trim();
    const nombre = document.getElementById('nombre').value.trim();

    if (carnet === '' || nombre === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }


    alert(`Su carnet es: ${carnet}\nSu nombre es: ${nombre}`);
   
    console.log(`Su carnet es: ${carnet}`);
    console.log(`Su nombre es: ${nombre}`);

    const datosDiv = document.getElementById('datos');
    datosDiv.innerHTML = `<h2>Datos</h2><h4>Su carnet es: ${carnet}</h4><h4>Su nombre es: ${nombre}</h4>`;
}
