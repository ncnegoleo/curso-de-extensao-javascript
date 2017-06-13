/**
 * Arquivo de JavaScript
 * app.js
 */

var numero = document.getElementById('tel');

function converter() {
    numero = numero.value;
    document.write(numero.slice(0, 4) + '9' + numero.slice(4));
}