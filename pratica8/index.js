/**
 * Arquivo de JavaScript
 * app.js
 */

function comparar() {
    var texto1 = document.getElementById('texto1').value;
    var texto2 = document.getElementById('texto2').value;
    texto1 = texto1.toLowerCase().trim();
    texto2 = texto2.toLowerCase().trim();
    
    console.log(!!texto1.match(texto2));
}