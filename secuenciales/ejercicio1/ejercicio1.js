//  1.	Un alumno desea saber cuál será su calificación final en la materia de lógica y programación. 
//  Dicha calificación se compone de los siguientes porcentajes.
//  55% del promedio de sus tres calificaciones parciales.
//  30% de la calificación del examen final.
//  15% de la calificación de un trabajo final.

let nota1;
let nota2;
let nota3;
let media;
let examen;
let trabajo;
let resultado=0;

nota1 = Number(prompt('Ingrese la primera nota de parcial: '));
nota2 = Number(prompt('Ingrese la segunda nota de parcial: '));
nota3 = Number(prompt('Ingrese la tercera nota de parcial: '));
examen = Number(prompt('Ingrese la nota del examen final: '));
trabajo = Number(prompt('Ingrese la nota del trabajo final: '));

media=(nota1+nota2+nota3)/3;
resultado = media*.55+examen*.3+trabajo*.15;

console.log('El alumno, su calificacion final: '+ resultado );
alert('El alumno, su calificacion final: '+ resultado );
document.write('El alumno, su calificacion final: '+ resultado );
