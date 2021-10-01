/**
Running calculator in javascript that takes an operator and a number and continues to update the total until the user quits the program. 

@author Rebecca Trapp 
@version 10-1-2021
*/

//importing readline so that we can get input and output functions. 

const readline = require('readline')
const rl = readline.createInterface( process.stdin, process.stdout);
//sets a global variable to 0.0. 
let result = 0.0;

//Code block that starts the program
console.log("Welcome to running-calc.js");
console.log("Current total: " + result);
question();

/*A function with no parameters that is recursive unless the user inputs q for the operator. It uses 2 different functions to get the operator and the value and then 
calls an outside function that is down below called operation, passing the operator and value gathered earlier in the program. 
*/
function question(){
	let b = false;
	rl.question("Enter an operation (+-*/, q to quit):", (operator) => {
		if (operator == 'q'){
			process.exit();
		}
		if (operator != 'q'){
			b = true;
		}
		rl.question("Enter value:", (value) => {
			result = operation(operator, value);
			console.log("Current Total: " + result);
		if(b == true){
			question();
		}
		});
	});
}

/* A function that takes 2 parameters and checks to see what operation the user wants and then return the result of that operation. Also ensures there are no weird errors like 
dividing by zero and an invalid operator. 
@param operator char
@param value double
*/
function operation(operator, value){
	if(operator == '+'){
		return result + value;
	} else if (operator == '-'){
		return result - value;
	} else if (operator == '*'){
		return result * value;
	} else if (operator == '/'){
		if (value == 0){
			console.log("Cannot divide by zero try again");
			return result;
		} else {
			return result / value;
		}
	} else {
		console.log("Not a valid operator");
	}
}

