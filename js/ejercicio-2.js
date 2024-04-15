function calcularHipotenusa() {
              
    const catA = document.getElementById('catA').value;
    const catB = document.getElementById('catB').value;
    const unidadMedida = document.getElementById('unidadMedida').value;

    if (catA === '' || catB === ''|| unidadMedida === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    
    const hipotenusa = Math.sqrt(catA**2 + catB**2);

    alert(`La hipotenusa es: ${hipotenusa}${unidadMedida}`);

         
    console.log(`La hipotenusa es: ${hipotenusa}${unidadMedida}`);

    const resultHipotenusaDiv = document.getElementById('resultHipotenusa');
    resultHipotenusaDiv.innerHTML =
    `<h2 class="text-uppercase">La hipotenusa es: ${hipotenusa}${unidadMedida}</h2><br>

    <div class="triangulo">
        <div class="hipotenusa"><h4>h=${hipotenusa}${unidadMedida}</h4></div>
        <div class="catA"><h4>a=${catA}${unidadMedida}</h4></div>
        <div class="catB"><h3>b=${catB}${unidadMedida}</h3></div>
    </div>`;
  }
