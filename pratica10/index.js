/**
 * Arquivo de JavaScript
 * app.js
 */

function mostrar() {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;

    document.write(
        numero1 + " > " + numero2 + " : " + (numero1 > numero2) + "; " +
        numero1 + " >= " + numero2 + " : " + (numero1 >= numero2) + "; " +
        numero1 + " < " + numero2 + " : " + (numero1 < numero2) + "; " +
        numero1 + " <= " + numero2 + " : " + (numero1 <= numero2) + "; " + 
        numero1 + " == " + numero2 + " : " + (numero1 == numero2) + "; " + 
        numero1 + " != " + numero2 + " : " + (numero1 != numero2) + "; "
    );
}