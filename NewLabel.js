// Función para agregar un nuevo campo (etiqueta y caja de texto) al formulario
var Col = '';
function agregarCampo() {
    const formulario = document.getElementById('miFormulario');
  
    // Crear un nueva div <div>
    const div = document.createElement('div');
    div.className += "Campo";
    div.id += "Campo" + (formulario.children.length + 1);
    formulario.appendChild(div);
  
    // Crear elementos dentro del div <label> y <textArea>
    const label = document.createElement('label');
    label.textContent = 'Etiqueta' + (formulario.children.length) + ': ';
    const textArea = document.createElement('textarea');
    textArea.placeholder = 'Campo de Texto' + (formulario.children.length);
  
    // Agregar la etiqueta y la caja de texto al formulario
    div.appendChild(label);
    div.innerHTML += '<br>';
    div.appendChild(textArea);
  }

function EliminarCampo() {
    const formulario = document.getElementById('miFormulario');
    const hijos = document.getElementById('Campo' + formulario.children.length);
    hijos.remove();
}

function CambiarColor() {
    const areastxt = document.getElementsByTagName('textarea');
    Col = RandomColor();
    for(i=0; i<areastxt.length; i++) {
      areastxt[i].style.backgroundColor = Col;
    }
}

function RandomColor() {
  const Hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    Col = '#';
    for(i=0; i<=5; i++) {
      Col += Hex[Math.floor(Math.random() * (15 + 1))];
    }
    return Col;
}
  // Obtener el botón de "Agregar Campo" y agregar un manejador de eventos
  const botonAgregarCampo = document.getElementById('agregarCampo');
  botonAgregarCampo.addEventListener('click', agregarCampo);

  const botonEliminarCampo = document.getElementById('EliminarCampo');
  botonEliminarCampo.addEventListener('click', EliminarCampo);

  const botonColor = document.getElementById('CambiarColor');
  botonColor.addEventListener('click', CambiarColor);
  
