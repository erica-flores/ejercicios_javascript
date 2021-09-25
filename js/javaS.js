alert( "hola curso");

function suma() {
    var num1= Number(document.getElementById(`n1`).value);
    var num2= Number(document.getElementById(`n2`).value);
    var res= num1+num2;
    document.getElementById(`res`).value=res;
}
 
function concatenar() {
    var nombre = document.getElementById(`nombre`).value;
    var apellido = document.getElementById(`apellido`).value;
    var concatenar= nombre + " " + apellido;
    document.getElementById(`concatenar`).value=concatenar;
}



function incrementar() {
    var valorinicial = document.getElementById(`valor`).value;
    var valorCambiado = Number.parseInt(valorinicial);
    
    if (valorCambiado == valorCambiado){
        valorCambiado += 1
    }
    document.getElementById(`valor`).value = valorCambiado;
}

