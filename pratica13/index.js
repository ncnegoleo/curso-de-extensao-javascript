/**
 * Login
 */

var meuUsuario = "leonardo";
var minhaSenha = 1234;

var btnLogar = document.getElementById('btnLogar');

btnLogar.onclick = function () {
    usuario = document.getElementById('user').value;
    senha = document.getElementById('pass').value;
    var isValid = meuUsuario === usuario && minhaSenha == senha;
    var mensagem = isValid ? 'Login realizado com sucesso!' : 'Usuário ou senha inválidos!';
    document.getElementById('msg').innerHTML = mensagem;
}