function add(array) {
	// The Number() function converts the array strings to add-able numbers
	return array.reduce((total, current) => Number(total) + Number(current));
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
		case 'add':
			return add(array);
			break;
		case 'subtract':
			return subtract(array);
			break;
		case 'multiply':
			return multiply(array);
			break;
		case 'divide':
			return divide(array);
			break;		
	}
	
}
				
/*-------------------------------------------------------*/		

let numArray = [];
let opArray = [];
let result;


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
inputDisplay.textContent = 0;


allBtns.forEach((button) => {
	button.addEventListener('click', () => getNum(button));
});

function getNum(element) {     
	let el = element.textContent;
	let elID = element.getAttribute('id');
	if (!isNaN(el)) {
		if (display.textContent == '0' || isNaN(display.textContent)) {
			display.textContent = el;
			if (inputDisplay.textContent == 0) {
				inputDisplay.textContent = display.textContent;
			}
			else {
				inputDisplay.textContent = inputDisplay.textContent + " " + display.textContent;
			}
		}
		else {
			display.textContent += el;
			inputDisplay.textContent += el;		
		}
		
	}
	else if (el === '.') {
		display.textContent += el;
		inputDisplay.textContent += el;
	}
	else {
		numArray.push(display.textContent);
		//console.log(numArray);
		//console.log(opArray);
		if (elID == 'equals') {
			//display.textContent = operate(opArray[0], numArray);
			while(numArray.length > 1) {
				let multiArray = [];
				multiArray.push(numArray[0], numArray[1]);
				display.textContent = operate(opArray[0], multiArray);
				opArray.shift();
				numArray.splice(0, 2, display.textContent);
			}
			numArray = [];
			opArray = [];
			//inputDisplay.textContent = ''; would like it to clear when next button is pushed, not before
		}
		else if (el == 'clear') {
			display.textContent = 0;
			inputDisplay.textContent = 0;
			numArray.length = 0;
			opArray.length = 0;
		}
		else {
			opArray.push(element.getAttribute('id'));
			inputDisplay.textContent = `${display.textContent} ` + el;
			display.textContent = el; //would like to remove this, but need a way to clear the memory before the next button is pushed.
		}
	}	
};



/*///////=========ONE STEP CALCULATIONS WORK -	EXCEPT FOR SUBSTITUTION		
			\,-3107 	FIX SUBTRACTION
			\,-0208 	FIX ADDITION
			REMOVE OPERATOR FROM 'display'
					currently the operator works to distinguish the first number from the next
			\,-0308     GET DISPLAY TO BE BETTER
					space reserved before using calculator (no jump when text displayed in inputDisplay)
			\,-01082    CLEAR PREV CALCS ON =
			MULTI-STEP CALCULATIONS
					\,-0408 basic (no PEMDAS)
					NEEDS TO HAVE CORRECT DISPLAY - see 'REMOVE OPERATOR...' above
						e.g.: [9 + 40 - 2 * 10] = 470
					then PEMDAS
					e.g.: [9 + 40 - 2 * 10] = 29
			ROUND ANSWERS WITH LONG DECIMALS (MAX DIGITS: 10)
			ERROR IF DIVIDING BY 0
			DECIMAL INPUTS BUT DOESN'T CALCULATE CORRECTLY
				also, set conditions so it can only be used once 
					(disable if used once)
			BACKSPACE
			KEYBOARD SUPPORT
			






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

