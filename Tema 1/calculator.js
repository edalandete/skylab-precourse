/*
 * Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola 
 * la suma, resta, multiplicación y división entre ambos números. El resultado debería ser mostrado con 3 decimales 
 * como mucho (En caso de que hubieran). 
 * El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier cosa que no sean números.
 *  Si el usuario introduce un solo número, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, 
    volverá a mostrar las 4 operaciones de siempre.
 *  Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
*/

function calculator() {
  let firstNumber = introduceNumber();
  let secondNumber = introduceNumber();
  let squareRoot = isSquareRoot(firstNumber, secondNumber);

  if (isInvalidNumber(firstNumber) || isInvalidNumber(secondNumber)) {
    console.log("No se han podido realizar los cálculos");
  } else {
    let results = calculate(firstNumber, secondNumber, squareRoot);
    printResults(results, squareRoot);
  }
}

function printResults(results, squareRoot) {
  if (squareRoot) {
    console.log("Square Root = " + results[0]);
  } else {
    console.log("El resultado de la suma es: " + results[0]);
    console.log("El resultado de la resta es: " + results[1]);
    console.log("El resultado de la multiplicación es de: " + results[2]);
    console.log("El resultado de la división es de: " + results[3]);
  }
}

function calculate(firstNumber, secondNumber, squareRoot) {
  let results = [];
  if (squareRoot) {
    results[0] = calculateSquareRoot(firstNumber, secondNumber);
  } else {
    results[0] = sum(firstNumber, secondNumber);
    results[1] = minus(firstNumber, secondNumber);
    results[2] = multiply(firstNumber, secondNumber);
    results[3] = divide(firstNumber, secondNumber);
  }

  return results;
}

function sum(firstNumber, secondNumber) {
  return parseInt(firstNumber) + parseInt(secondNumber);
}

function minus(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return (firstNumber / secondNumber).toFixed(3);
}

function calculateSquareRoot(firstNumber, secondNumber) {
  let result;
  if (firstNumber === "") {
    result = Math.sqrt(secondNumber);
  } else {
    result = Math.sqrt(firstNumber);
  }

  return result;
}

function isSquareRoot(firstNumber, secondNumber) {
  return (
    (firstNumber === "" && secondNumber !== "") ||
    (secondNumber === "" && firstNumber !== "")
  );
}

function isInvalidNumber(number) {
  return isNaN(number);
}

function introduceNumber() {
  let number = prompt("Number: ");
  if (isInvalidNumber(number)) {
    console.log("You have to introduce a valid number. This is not a number");
  } else {
    return number;
  }
}
