// 3. A la mamá de juan le preguntan su edad y contesta, tengo 3 hijos, pregúntele a juan su edad, 
// Alberto tiene 2/3 de la de juan, Ana tiene 4/3 y mi edad es la suma de las 3 edades de mis hijos, 
// hacer un programa que muestre la edad de los 4 (mamá y los 3 hijos).

let juan;
let albe;
let ana;
let mama;

juan = Number(prompt('Ingrese edad de Juan? '))

albe = (2/3)*juan;
ana = (4/3)*juan;
mama = juan + albe + ana;

alert("Edad de la madre: "+mama);
alert("Edad de Alberto: "+albe);
alert("Edad de Ana: "+ana);
alert("Edad de Juan: "+juan);

document.write("Edad de la madre: "+mama+", ");
document.write("Edad de Alberto: "+albe+", ");
document.write("Edad de Ana: "+ana+", ");
document.write("Edad de Juan: "+juan);

console.log("Edad de la madre: "+mama);
console.log("Edad de Alberto: "+albe);
console.log("Edad de Ana: "+ana);
console.log("Edad de Juan: "+juan);