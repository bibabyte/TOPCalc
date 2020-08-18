function add(array) {
	// The Number() function converts the array strings to add-able numbers
	return array.reduce((total, current) => Number(total) + Number(current));
}
function subtract(array) {
	return array.reduce((total, current) => total - current);
}

function multiply(array) {
	return array.reduce((total, current) => total * current);
}

function divide(array) {
	return array.reduce((total, current) => total / current);
}

/*---------------------------------------------------------*/

//const operators = [add, subtract, multiply, divide];

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
			if (array[1] == 0) return 'Error';
			else return divide(array);
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
		else if (opArray[0] === 'equals') {
			display.textContent = el;
			inputDisplay.textContent = el;
			opArray = [];
		}
		
		else {
			display.textContent += el;
			inputDisplay.textContent += el;		
		}
		//when equals is hit - populate it in opArray, if opArray[0] === 'equals' display = el.
	}
	else if (elID == 'decimal') {
		if (!display.textContent.includes('.')) {
			display.textContent += el;
			inputDisplay.textContent += el;	
		}
		if (isNaN(display.textContent)) {
			display.textContent = '0' + el;
			inputDisplay.textContent = inputDisplay.textContent.replace('.', ' ') + '0' + el;
		}
	}
	else {
		numArray.push(display.textContent);
		////console.log(numArray);
		//console.log(opArray);
		// //console.log(elID);
		if (elID == 'equals') {
			//display.textContent = operate(opArray[0], numArray);
			while(numArray.length > 1) {
				let multiArray = [];
				multiArray.push(numArray[0], numArray[1]);
				display.textContent = round(operate(opArray[0], multiArray), 10);
				opArray.shift();
				numArray.splice(0, 2, display.textContent);
			}
			numArray = [];
			opArray = [];
			opArray.push(elID);
			//console.log(numArray, opArray);
			//console.log(opArray);
			//inputDisplay.textContent = ''; would like it to clear when next button is pushed, not before
		}
		else if (elID == 'clear') {
			display.textContent = 0;
			inputDisplay.textContent = 0;
			numArray.length = 0;
			opArray.length = 0;
		}
		else if (elID == 'back') {
				//	.slice: returns a new string from the previous string.
				//	0 starting index of the slice, it removes nothing (new string contains all)
				// 	-1 index of last character, this parameter indicates where to end the extraction
				//	the new string will contain everything from the very beginning of the string
				//	to the next-to-last character. Last character is left out.
			display.textContent = display.textContent.slice(0, -1);
			inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
			el = el.slice(0, -1);
			numArray.pop();
			if (display.textContent == '') {
				display.textContent = '_';
			}
		}

		else {
			if (opArray[0] === 'equals') {
				opArray = [];
			}
			opArray.push(elID);
			inputDisplay.textContent = display.textContent + ' '  + el;
			display.textContent = el; //would like to remove this, but need a way to clear the memory before the next button is pushed.
		}
	}	
};

function round(number, decimalPlaces) {
	const factorOfTen = Math.pow(10, decimalPlaces);
	return Math.round(number * factorOfTen) / factorOfTen;
}


/*///////====================================================
			DISPLAY
				REMOVE OPERATOR FROM 'display'
					currently the operator works to distinguish the first number from the next
			MULTI-STEP CALCULATIONS
					\,-0408 	basic (no PEMDAS)
					NEEDS TO HAVE CORRECT DISPLAY - see 'REMOVE OPERATOR...' above
						e.g.: [9 + 40 - 2 * 10] = 470
					then PEMDAS
					e.g.: [9 + 40 - 2 * 10] = 29
			KEYBOARD SUPPORT
			IF NEW OPERATOR IS PRESSED REPLACE (don't add) in array
			NEGATIVE NUMBERS
			BACKSPACE
			    \,-0508 works for numbers, button publishes
				needs: work for operators OR doesn't work on operatn
			ADD DIFFERENT CSS FOR SKINS!


			\,-0408 	ERROR IF DIVIDING BY 0
			\,-3107 	FIX SUBTRACTION
			\,-0208 	FIX ADDITION
			\,-0308     GET DISPLAY TO BE BETTER
			\,-0108    CLEAR PREV CALCS ON =
			\,-1808 	ROUND ANSWERS WITH LONG DECIMALS (MAX DIGITS: 10)
			\,-1808		when starting a new calculation display's do not reset
			\,-1808	DECIMAL


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
////console.log(displayValue);		
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

