const NumA = document.getElementById('NumA');
const NumB = document.getElementById('NumB');
const NumC = document.getElementById('NumC');
const Decimales = document.getElementById('Decimales');
const BtnCalcular = document.getElementById('Calcular');
const MostrarRaices = document.getElementById('Raices');
const CambiarTema = document.getElementById('CambiarTema');

var A=0; B=0; C=0; Con1=0; x1=0; x2=0;

BtnCalcular.addEventListener('click', function(){
    A = NumA.value;
    B = NumB.value;
    C = NumC.value;
    Con1 = Math.pow(B,2)-(4*A*C);
    if(A == null || A == 0){
        alert('Valor de a no valido');
    }else{
        if(Con1 < 0){
            MostrarRaices.innerHTML = 'X1 = --' + '<br>' +'X2 = --';
            alert('Los valores ingresados corresponden a raices imaginarias');
        }else{
            x1 = (((-1)*B) + Math.sqrt(Con1))/(2*A);
            x2 = (((-1)*B) - Math.sqrt(Con1))/(2*A);
            x1 = x1.toFixed(Decimales.value);
            x2 = x2.toFixed(Decimales.value);
            console.log(x1,x2);
            MostrarRaices.innerHTML = 'X1 = ' + x1 + '<br>' +'X2 = ' + x2;
        }
    }
});


function filtro()
{
var tecla = event.key;
if (['.','e'].includes(tecla))
   event.preventDefault()
}

var Tema = 0;
CambiarTema.addEventListener('click', function() {
    Tema++;
    if(Tema == 3){
        Tema = 0;
    };
    localStorage.setItem('Tema', Tema);
    switch(Tema){
        case 0:
            document.documentElement.setAttribute('data-theme', 'blue');
            break;
        case 1:
            document.documentElement.setAttribute('data-theme', 'orange');
            break;
        case 2:
            document.documentElement.setAttribute('data-theme', 'green');
            break;
    }
    
})

function UpdateTema() {
    Tema = localStorage.getItem('Tema');
    console.log(Tema);
    switch(Tema){
        case '0':
            document.documentElement.setAttribute('data-theme', 'blue');
            break;
        case '1':
            document.documentElement.setAttribute('data-theme', 'orange');
            break;
        case '2':
            document.documentElement.setAttribute('data-theme', 'green');
            break;
    }
};