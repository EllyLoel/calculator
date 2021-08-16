let num1 = Number(document.getElementById('num1-el').value);
let num2 = Number(document.getElementById('num2-el').value);
let num3;

let sum = document.getElementById('sum-el');

function add() {
	num3 = num1 + num2;
	sum.textContent = 'Sum: ' + num3;
}

function subtract() {
	num3 = num1 - num2;
	sum.textContent = 'Sum: ' + num3;
}

function divide() {
	num3 = num1 / num2;
	sum.textContent = 'Sum: ' + num3;
}

function multiply() {
	num3 = num1 * num2;
	sum.textContent = 'Sum: ' + num3;
}
