/**
 * Arquivo de JavaScript
 * app.js
 */

var reais = document.getElementById('reais');

function converter() {
    var dolar = parseInt(reais.value) * 3.31;
    var frmDolar = dolar.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    document.write("O valor em reais é de " + frmDolar);
}