// 17 de diciembre
// let sum = 2+3
// console.log(sum)

// sum1= sum+3
// console.log(sum1)

// let i=0
// for(i=4; i<10; i++){
//     console.log(i)
// }

// i=0
// for(i=4; i>=0; i--){
//     console.log(i)
// }

// misAmigos = ["Juan","Ana","Manuel","María"]

// let n = misAmigos.length

// console.log(n)

// i=0
// for(i=0; i<n; i++){
//     console.log("Hola " + misAmigos[i])
// }

// let precio = 200
// let iva = 0.21
// totalIva = precio * iva
// total1 = precio + totalIva
// console.log(total1)

// let lado = 40
// area = lado**2
// perimetro = lado*4
// console.log("El átrea es " + area)
// console.log("El perímetro es " + perimetro)

// nombre = prompt("Escribe tu nombre")
// console.log("Hola " + nombre)

// alert("Digita tres números enteros para calcular la media")
// let num1 = parseInt(prompt("Primer número"))
// let num2 = parseInt(prompt("Segundo número"))
// let num3 = parseInt(prompt("Tercer número"))
// media=(num1+num2+num3)/3
// alert("La media es " + media)

// let litros = parseFloat(prompt("Ingrese número de litros:"))
// let kilometros = parseFloat(prompt("Ingrese número de kilómetros:"))
// consumo = litros/kilometros
// alert("Has consumido " + consumo + " l/km")

// let horas = parseFloat(prompt("Digite las horas: "))
// let minutos = parseFloat(prompt("Digite los minutos: "))
// resultado = horas*60*60 + minutos * 60
// alert("El tiempo registrado en segundos es: " + resultado + " segundos")

// let num = parseInt(prompt("Digite un número de 2 dígitos: "))
// unidades=num%10
// decenas=Math.floor(num/10)
// alert("Son " + unidades + " unidades y " + decenas + " decenas.")

// let comensales = prompt("Cuántos comensales: ")
// papa = 0.2 * comensales
// kilos = Math.floor(papa)
// huevos = kilos * 5
// cebolla = kilos * 300
// alert(" Se requieren " + papa + " kg de papa, " + huevos + " huevos y " + cebolla + " gr de cebolla.")

// let valor1 = prompt("Ingrese valor 1: ")
// let valor2 = prompt("Ingrese valor 2: ")
// alert("El valor 1 es: " + valor1 + " y el valor 2 es: " + valor2)
// valor3= valor1
// valor1=valor2
// valor2=valor3
// alert("Ahora el valor 1 es: " + valor1 + " y el valor 2 es: " + valor2)

// let numero = prompt("Inserte un número: ")
// residuo = !Boolean(numero%2)
// alert("¿Es par? " + residuo)

// 18 de diciembre
// const form = document.getElementById('userForm');
// const addButton = document.getElementById('addField');
// var nombre, correo, telefono, direccion;

// array = [ 'nombre', 'correo', 'telefono', 'direccion'];
// largo = array.length;
// for(i=0; i<=largo;i++){
// addButton.addEventListener('click', ()=> {
//     const newField = document.createElement('input');
//     newField.type = 'text';
//     newField.name = 'extraField';
//     newField.placeholder = array[i];
//     form.appendChild(newField);
// });
// };
// i = 0;
// const usernameInput = document.getElementById('username');
// usernameInput.addEventListener('input', ()=> {
//     const errorMessage = document.getElementById('error');
//     if(!usernameInput.value.match(/^[a-zA-Z0-9]{3,}$/)){
//         errorMessage.textContent = "Username must be at least 3 characters long and alphanumeric";
//     }else{
//         errorMessage.textContent ='';
//     }
// });

// 19 de diciembre
let titulo = document.getElementById('titulo');
titulo.textContent = 'Nuevo Título desde JS';
titulo.style.color = 'blue';

let boton = document.getElementsByClassName('boton');
boton[0].style.color = 'blue';

let parrafo = document.querySelector('p');
parrafo.textContent = 'Nuevo texto';
parrafo.style.fontSize = '30px';

let boton1 = document.getElementById('boton1');
boton1.addEventListener('click', function(){
    alert("Hiciste clic");
});

function saludar (nombre){
    return("Hola " + nombre + "!")
}
let mensaje = saludar("Ana");
console.log(mensaje);