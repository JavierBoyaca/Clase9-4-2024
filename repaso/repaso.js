// //**
// // calcular el salario de un empleado que gana 1.300.000 o menos  el 4% salud y 5% en pension
// // si gana entre 1.300.000 a 2.000.000 se le descuebta en salud 5% y en pension el 6%
// // si gana 2.000.000 o mas se le descuenta en salud el 6% y 7% en pension

// // datos de entrada
// let salario = prompt("digite el salario del empleado")
// //calculos
// let salud;
// let pension;
// let salarioNeto;

// if(salario <= 1300000){
//      salud = salario* 4/100 // salario * 0.4
//      pension = salario * 5/100
//      salarioNeto = salario - (salud + pension);
// }
// else if(salario > 130000 && salario <= 2000000){
//      salud = salario* 5/100 // salario * 0.4
//      pension = salario * 6/100
//      salarioNeto = salario - (salud + pension);
// }
// else{
//      salud = salario* 6/100 // salario * 0.4
//      pension = salario * 7/100
//      salarioNeto = salario - (salud + pension);
// }
// //Datos de salida
// document.write(
//     `El salario del empleado es: ${salario} <br> 
//     Dto en salud es: ${salud}<br>
//     Dto en pension es: ${pension} <hr>
//     Salario Neto a pagar: ${salarioNeto}
//     `
// )
// calcular si un numero es psitivo o negativo, o si es par o inpar

// let numero = Number(prompt("digite el numero"))

// if (numero < 0 && numero % 2 == 0 ){
//     document.write(`El numero es negativo y par ${numero}`)

// }else if (numero > 0 && numero % 2 == 0){
//     document.write(`El numero es positivo y par ${numero}`)

// }
// else if ( numero <0 && numero % 2 !=0){
//     document.write(`El numero es negativo y es inpar ${numero}`)

// }
// else if (numero > 0 && numero % 2 !=0){
//     document.write(`El numero es positivo e inpar ${numero}`)

// }
// else{
//     document.write(`El numero es neutro ${numero}`)
// }
//CICLOS+++++

// let numero = Number(prompt("Digite el numero inicial de ciclo"));
// let fin = Number(prompt("Digite el numero final del ciclo"));
// let intervalos = Number(prompt("Digite intervalos del ciclo"));

// while (numero <= fin){
//     document.write(numero+ "<br>");
//     numero += intervalos
// }
// for(let numero = 10; numero >= 10; numero--){

//     document.write(numero+ "<br>");
// }

// califica a un estudiante pidiendole 3 notas
// el promedio si gana debe ser mayor a 3

// let numNotas = Number(prompt("Digite el numero de notas"));
// let sumaNotas = 0;
// for(let num = 1; num <= numNotas; num++){
//     let notas = Number(prompt("Digite nota #" + num));
//     sumaNotas = sumaNotas + notas
// }
// let promedio = sumaNotas / numNotas;
// if (promedio >=3){
//     document.write ("El estudiante gano la nota" + promedio);

// }
// else{
//     document.write("El estudiante Perdio la nota" + promedio)
// }

// let fin = prompt("¿deseas parar el ciclo? si/no");
// let suma = 0;
// let con = 0;
// for(let num = 1; fin == "no"; num++){
//     let numero = Number(prompt("Digite un numero"));
//     document.write(numero +",");
//     suma += numero;
//     con++
//     fin = prompt("Desea parar el siclo si/no")
// }
// document.write("Numeros Digitos:"+con+"<br>");
// document.write("Total numeros Digitados"+suma+"<br>");

