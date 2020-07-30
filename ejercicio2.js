var  a = 0;
var b = 0;
var c = 0;
var d = 0; 
var calculaPromedio = 0;
a = parseInt(prompt("Ingrese el primer número"));
b = parseInt(prompt("Ingrese el segundo número"));
c = parseInt(prompt("Ingrese el tercer número"));
d = parseInt(prompt("Ingrese el cuarto número"));

calcularPromedio = media (a,b,c,d);

function media (nA,nB,nC,nD){
    const resultado = (nA + nB + nC + nD)/4;
    console.log("Tu promedio es: "+ resultado);
}
