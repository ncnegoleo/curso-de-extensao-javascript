/**
 * Arquivo de JavaScript
 * app.js
 */

function comparar() {
    var palavra1 = document.getElementById('palavra1').value;
    var palavra2 = document.getElementById('palavra2').value;

    var maior = palavra1 > palavra2 ? palavra1 : palavra2;
    var menor = palavra1 < palavra2 ? palavra1 : palavra2;

    document.write(menor + ", " +  maior);
}