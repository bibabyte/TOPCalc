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

function operate(operator, array){
	switch(operator) {
		case '+':
			return add(array);
			break;
		case 'subtract':
			return subtract(array);
			break;
		case 'x':
			return multiply(array);
			break;
		case 'divide':
			return divide(array);
			break;		
	}
	/*
	if (index > 3) return null;
	else if (index == 'add') {
		return add(array)
	}
	return operators[index](array);*/
}
		
		let testNum = [2, 2, 3, 7, 9];
		let testOp = [add, subtract, multiply, divide];
		let a = 3;
		let b = 4;
		console.log(add(testNum));
		console.log(subtract(testNum));
		console.log(multiply(testNum));
		console.log(divide(testNum));
		let num2 = testNum.splice(2, 0, 4);
		console.log(num2);
		console.log(testNum.splice(2, 0, '4'));
		//console.log(operate(testOp[1], testNum));
		
/* ====== trying to get xplice to work =======
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
*/
		
/*-------------------------------------------------------*/		

let numArray = [];
let opArray = [];
let result;


//let displayValue = 678;
//displayValue = 45
//displayValue = 73;


// divs
const container = document.querySelector('.container');
const display = document.querySelector('#display');
const inputDisplay = document.querySelector('#inputDisplay');
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
	let elID = element.getAttribute('id');
	if (!isNaN(el)) {
		if (display.textContent == '0' || isNaN(display.textContent)) {
			display.textContent = elID;
		}
		else {
			display.textContent += elID;		
		}
	}
	else {
		let num1 = display.textContent;
		numArray.push(num1);
		console.log(numArray);
		console.log(opArray);
		
		if (elID == 'equals'/*'='*/) {
			inputDisplay.textContent = `${numArray[0]} ${opArray[0]} ${numArray[1]}`
			display.textContent = operate(opArray[0], numArray);
		}
		
		else if (el == 'clear') {
			display.textContent = 0;
			inputDisplay.textContent = '';
			numArray.length = 0;
			opArray.length = 0;
		}
		else {
			opArray.push(el);
			inputDisplay.textContent = num1 + ' ' + el;
			display.textContent = el;
		}
	}	
};


//////I'M GETTING AHEAD OF MYSELF
/////MAKE A BASIC CALC THAT CAN DO OPERATIONS IN ORDER OF ENTERING FIRST


//running the calculations
//====how to determine if the operator is
//let multiply =. opArray.find(function(operator) {
	//opArray === 'multiply';


/*for (let i = 0, i < opArray.length; i++) {
	let calcArray = [numArray[i], numArray[i+1]];
	let toDoArray = [];
	if (opArray[i] == 'subtract' || opArray[i] == 'add') {
		i++;
	}	
	else {	
		if (opArray[i] == 'multiply') {
			numArray.slice(i, i+1).push
			multiply(calcArray);
			opArray = opArray.slice(i);
		else if (opArray[i] == 'divide') divide(calcArray;)

	}
		else if (opArray[i] == 'subtract') {
		subtract(calcArray);
	}	
	else if (opArray[i] == 'add') {
		add(calcArray);
	}
}
*/
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

