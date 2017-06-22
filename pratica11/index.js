/**
 * Arquivo de JavaScript
 * app.js
 */

function verificar() {
    var ano = document.getElementById('ano').value;
    var idade = 2017 - ano;

    var msg = idade >= 16 ? "acesso liberado" : "você não possui idade para acessar o conteúdo deste site";

    document.write(msg);
}