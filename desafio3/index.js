
var msgUser = document.getElementById('msgUser');
var msgSenha = document.getElementById('msgSenha');
var btn = document.getElementById('btn');

msgUser.style.display = "none";
msgSenha.style.display = "none";

btn.onclick = function () {
	var user = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;

	msgUser.style.display = user ? "none" : "block";
	msgSenha.style.display = pass ? "none" : "block";
}