function calcularPromedio() {
      
    const name = document.getElementById('name').value;
    const curso = document.getElementById('curso').value;
    const nota1 = document.getElementById('nota-1').value;
    const nota2 = document.getElementById('nota-2').value;
    const nota3 = document.getElementById('nota-3').value;
    const nota4 = document.getElementById('nota-4').value;
    const nota5 = document.getElementById('nota-5').value;

    if (name === '' || curso === ''|| nota1 === ''|| nota2 === ''|| nota3 === ''|| nota4 === ''|| nota5 === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

  
    const promedio = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4) + Number(nota5)) / 5;

    
    alert(`Curso: ${curso}\nNombre: ${name}\nPromedio: ${promedio}`);
}