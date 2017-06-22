/**
 * Arquivo de JavaScript
 * app.js
 */

var check = document.getElementById('check');
var peso = document.getElementById('peso');
peso.style.display = "none";

check.onclick = function() {
    peso.style.display = check.checked ? "block" : "none";
}

function calcular() {
    var nome = document.getElementById('nome').value;
    var preco = document.getElementById('preco').value;
    var peso = document.getElementById('peso').value;

    peso = peso || 1;
    var total = preco * peso;
    
    document.write(
        "produto: " + nome + 
        " preço total: " + total
            .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
}