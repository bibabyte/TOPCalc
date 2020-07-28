function add(array) {
//	return a + b;
	return array.reduce((total, current) => total + current);
}
function subtract(array) {
//	return a - b;
	return array.reduce((total, current) => total - current);
}

function multiply(array) {
//	return a * b;
	return array.reduce((total, current) => total * current);
}

function divide(array) {
//	return a / b;
	return array.reduce((total, current) => total / current);
}

/*---------------------------------------------------------*/

const operators = [add, subtract, multiply, divide];

function operate(index, array){
	if (index > 3) return null;
	return operators[index](array);
}
		
		let test = [2, 2, 3];
		let a = 3;
		let b = 4;
		console.log(add(test));
		console.log(subtract(test));
		console.log(multiply(test));
		console.log(divide(test));
		
/*-------------------------------------------------------*/		

let numArray = [];
let opArray = [];


//let displayValue = 678;
//displayValue = 45
//displayValue = 73;


// divs
const container = document.querySelector('.container');
const display = document.querySelector('#display');
//buttons
const allBtns = document.querySelectorAll('button');
const numBtn = document.querySelectorAll('.num');
const opBtn = document.querySelectorAll('.operator');
const clearBtn = document.querySelectorAll('.clear');
const equalsBrn = document.querySelector('#equals');

display.textContent = 0;


allBtns.forEach((button) => {
	button.addEventListener('click', () => getNum(button));
});

function getNum(element) {     
	let el = element.textContent;
	let elID = element.get
	if (!isNaN(el)){
		if (display.textContent == '0' || isNaN(display.textContent)) {
			display.textContent = el;
		}
		else {
			display.textContent += el;		
		}
	}
	else {
		let num1 = display.textContent;
		numArray.push(num1);
		console.log(numArray);
		opArray.push();
		console.log(opArray);
		
		if (el == 'e'/*'='*/) {
			operate(index, array);
		}
		
		else if (el == 'clear') {
			display.textContent = 0;
		}
		else {
			
			display.textContent = el;
		}
	}	
};

//console.log(displayValue);		
//display.textContent = displayValue;





/*
push numbers to array
push operators to array
for number 0, 1, use operator 0
for number 2, 3 use operator 1
for number 4, 5 use operator 2
for number 6, 7 use operator 3
for number 8, 9 use operator 4
*/

