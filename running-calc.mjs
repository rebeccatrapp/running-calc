const readline = require('readline')
const rl = readline.createInterface( process.stdin, process.stdout);

let result = 0.0;

console.log("Welcome to running-calc.js");
console.log("Current total: " + result);
question();


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

