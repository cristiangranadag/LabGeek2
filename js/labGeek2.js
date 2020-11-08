document.getElementById('OrdenP').style.display="none"

let credito;
const matricula = 900000;
const unCredito = 200000;
let descuento;
let precioCred;
let descuento10;
let total;

function Calcular(){
    document.getElementById('Credito').style.display="none"
    document.getElementById('OrdenP').style.display="block"

    credito = Number(document.getElementById('Cantidad').value);

    descuento = Condicional(credito);
    precioCred = Condicional(credito);
    descuento10 = Total(descuento, precioCred);

    document.getElementById('ValorMatricula').value = matricula;
    document.getElementById('PrecioCred').value = precioCred;
    document.getElementById('ValorDescuento').value = descuento;
    document.getElementById('ValorDescuento10').value = descuento10;
    document.getElementById('Total').value = total;
}

var Condicional = function(credito) {

    if (credito < 6) {
        descuento = matricula * 0.5;
        precioCred = credito * unCredito;
        return descuento, precioCred;

    } else if (credito >= 6 && credito <10) {
        descuento = matricula * 0.25;
        precioCred = credito * unCredito;
        return descuento, precioCred;

    } else {
        descuento = 0;
        precioCred = credito * unCredito;
        return descuento, precioCred;
    }
}

function Total(descuento, precioCred) {
    descuento10 = matricula * 0.1;
    total = matricula + precioCred - descuento - descuento10;
    alert('El precio de # Credito: '+ precioCred)
    alert('El descuento de 10%: '+descuento10) 
    alert('El descuento del # credito: '+ descuento)
    alert('Total del matricular: '+total) 
    return descuento10;  
}