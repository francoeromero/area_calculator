// Obtener los elementos del DOM
const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const unitSelect = document.getElementById('unit');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');
const terrenoDiv = document.getElementById('terreno');

// Función para calcular el área
function calculateArea() {
  const length = parseFloat(lengthInput.value);
  const width = parseFloat(widthInput.value);
  const unit = unitSelect.value;
  
  // Realizar el cálculo del área
  let area;
  if(isNaN(length) && isNaN(width)){
    area = 0;
  }
  else{
    area = length * width;
  }

  // si se pasa en cm
  let area_convert;

  if(unit == 'cm²'){
    area_convert = area * 100;
  } else {
    area_convert = area;
  }
  
  // Mostrar el resultado
  resultDiv.textContent = `El área del terreno es: ${area_convert} ${unit}`;

  // planta del terreno
  terrenoDiv.style.width = length + 'rem';
  terrenoDiv.style.height = width + 'rem';
}

// Agregar el evento click al botón de cálculo
calculateButton.addEventListener('click', calculateArea);