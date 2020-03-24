var nr1;
var nr2;
console.log("Ejercicio 1");
nr1=prompt("Ejercicio 1. Ingrese un numero del cual quiera saber la tabla de multiplicar")
console.log("Imprimiendo tabla del " +nr1 )
for (var i = 0; i <= 10; i++) {
  console.log(nr1 + " x "+i +" = " +nr1*i );
}
console.log("Ejercicio 2");
nr1=prompt("Ejercicio 2. Ingrese un numero del cual quiera saber la tabla de multiplicar")
for (var i = 0; i <= 10; i++) {
  console.log(nr1 + " x "+i +" = " +nr1*i );
}
nr2=prompt("Ejercicio 2. Ingrese otro numero menor al anterior")
if (nr2>nr1) {
  alert("No se puede procesar la peticion")
  console.log("No se puede procesar la peticion")
}
else {
  for (var i = 0; i <= 10; i++) {
    console.log(nr2 + " x "+i +" = " +nr1*i );
  }
}
//alert("Atención");
//console.log(" Atención");
//var nro1=5;
//console.log(nro1);
//var resultado;
//var nr2="hola";
//resultado=nro1+5;
//console.log(resultado);
//resultado=nro1-5;
//console.log(resultado);
//resultado=nro1*5;
//console.log(resultado);
//resultado=nro1/5;
//console.log(resultado);
//resultado=nro1+ " - " +nr2;
//console.log(resultado);
//var numerico=2;
//var cadena='hola';
//var logico=true;
//if (numerico>3) {
//  console.log("es verdadero");
//}
//else {
//  console.log("Es falso");
//}
//if (numerico>3 && cadena=="hola") {
//  console.log("es verdadero");
//else {
//  console.log("Es falso");
//}
//if (numerico>3 || logico==true) {
//  console.log("es verdadero");
//}
//else {
//  console.log("Es falso");
//}
//if (logico) {
//  console.log("es verdadero");
//}
//else {
//  console.log("Es falso");
//}
//for (var i = 0; i < 6; i++) {
//  console.log(i)
//}
//var i=0;
//while (i<5) {
//  console.log(i)
//  i++;
//}
//do {

//} while (true);
