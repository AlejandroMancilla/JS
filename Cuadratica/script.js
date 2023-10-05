const NumA = document.getElementById('NumA');
const NumB = document.getElementById('NumB');
const NumC = document.getElementById('NumC');
const Decimales = document.getElementById('Decimales');
const BtnCalcular = document.getElementById('Calcular');
const MostrarRaices = document.getElementById('Raices');

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
