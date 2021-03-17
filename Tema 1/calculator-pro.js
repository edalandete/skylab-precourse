function calculator() {
  let anotherOperation = "N"
  do {
    let numbers = introduceNumbers();
    let squareRoot = isSquareRoot(numbers);

    if(numbers.length > 0) {
      let results = calculate(numbers, squareRoot);
      printResults(results, squareRoot);
    }else {
      console.log("No hemos podido realizar los cálculos debido a que se han introducido datos incorrectos.");
    }

    anotherOperation = prompt("Do you want to introduce more numbers Y/N:");
  }while(anotherOperation !== null && anotherOperation.toUpperCase() === "Y");
  console.log("Bye");
}

function printResults(results, squareRoot) {
  if(squareRoot) {
    console.log("Square Root = " + results[0]);
  } else {
    console.log("El resultado de la suma es: " + results[0]);
    console.log("El resultado de la resta es: " + results[1]);
    console.log("El resultado de la multiplicacion es de: " + results[2]);
    console.log("El resultado de la division es de: " + results[3]);
  }
}

function calculate(numbers, squareRoot) {
  let results = [];
  if(squareRoot) {
    results[0] = calculateSquareRoot(numbers[0]);
  } else {
    results[0] = sum(numbers);
    results[1] = minus(numbers);
    results[2] = multiply(numbers);
    results[3] = divide(numbers);
  }

  return results;
}

function sum(numbers) {
  let result = parseInt(numbers[0]);
  for (i = 1; i < numbers.length; i++) {
    result += parseInt(numbers[i]);
  }
  return result.toFixed(3);
}

function minus(numbers) {
  let result = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    result -= numbers[i];
  }
  return result.toFixed(3);

}

function multiply(numbers) {
  let result = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result.toFixed(3);
}

function divide(numbers) { let result = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    result /= numbers[i];
  }
  return result.toFixed(3);
}

function calculateSquareRoot(number) {
  return Math.sqrt(number).toFixed(3);
}

function isSquareRoot (numbers) {
  return numbers.length === 1;
}

function isInvalidNumber(number) {
  return isNaN(number);
}

function introduceNumbers() {

  let number = '';
  let numbers = [];
  do {
    number = prompt("Introduce numbers or type END to finish the introduction: ");
    
    if (isInvalidNumber(number) && number.toUpperCase() !== "END") {
      console.log("You have to introduce a valid number. This is not a number"); 
    }else {
      numbers.push(number);
    }

  }while(number !== null && number.toUpperCase() !== "END");

  numbers.pop();

  return numbers;
}

