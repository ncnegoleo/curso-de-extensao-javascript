/**
 * index.js
 * Calculadora
 */

var visor = document.getElementById('visor');

function atribuir(val) {
	visor.value += val;
}

function calcular() {
	var res = eval(visor.value);
	visor.value = res;
	return res;
}

function potencia() {
	var res = calcular() ** 2;
	visor.value = res;
}

function raiz() {
	var res = Math.sqrt(calcular());
	visor.value = res;
}

function limpar() {
	visor.value = "";
}
