let resultArr = [];

function calculatorPro() {
  let arrayArg;

  do {
    arrayArg = message();
  } while (!arrayArg || arrayArg.length === 0);

  if (arrayArg === "Bye!") {
    console.log("Thank you!");
  } else {
    squareRootFunc(arrayArg);
    if (arrayArg.length > 1) {
      sum(arrayArg);
      rest(arrayArg);
      div(arrayArg);
      mult(arrayArg);
      for (let iResult = 0; iResult < resultArr.length; iResult++) {
        console.log(resultArr[iResult]);
      }
    }
  }
  check(arrayArg);
}

function message() {
  let message = prompt("New numbers? y/n");
  switch (message) {
    case "n":
      let stop = "Bye!";
      console.log(stop);
      return stop;

    case "y":
      let numbers = prompt("Introduce numbers separated by commas");
      let numberList = numbers.split(",");
      for (let i = 0; i < numberList.length; i++) {
        if (isNaN(+numberList[i])) {
          console.log("Wrong character, try again with a number");
          return null;
        }
      }
      return numberList;
  }
}

function check(arrayArg) {
  if (arrayArg != "Bye!") {
    calculatorPro();
  }
}

function squareRootFunc(arrayArg) {
  if (arrayArg.length === 1) {
    let squareRoot = Math.sqrt(arrayArg[0]);
    console.log(`the square root of ${arrayIsInt} is ${squareRoot}`);
  }
}

function sum(arrayArg) {
  const reducerSum = (accumulator, currentValue) =>
    +accumulator + +currentValue;
  let resultSum = arrayArg.reduce(reducerSum);
  if (!(resultSum % 1 === 0)) {
    resultSum = resultSum.toFixed(3);
  }
  
  resultArr.push(`sum(${arrayArg}) = ${resultSum}`);
}

function rest(arrayArg) {
  const reducerRest = (accumulator, currentValue) =>
    +accumulator - +currentValue;
  let resultRest = arrayArg.reduce(reducerRest);
  if (!(resultRest % 1 === 0)) {
    resultRest = resultRest.toFixed(3);
    resultArr.push(`rest(${arrayArg}) = ${resultRest}`);
  } else {
    resultArr.push(`rest(${arrayArg}) = ${resultRest}`);
  }
}

function div(arrayArg) {
  const reducerDiv = (accumulator, currentValue) =>
    +accumulator / +currentValue;
  let resultDiv = arrayArg.reduce(reducerDiv);
  if (!(resultDiv % 1 === 0)) {
    resultDiv = resultDiv.toFixed(3);
    resultArr.push(`division(${arrayArg}) = ${resultDiv}`);
  } else {
    resultArr.push(`division(${arrayArg}) = ${resultDiv}`);
  }
}

function mult(arrayArg) {
  const reducerMult = (accumulator, currentValue) =>
    +accumulator * +currentValue;
  let resultMult = arrayArg.reduce(reducerMult);
  if (!(resultMult % 1 === 0)) {
    resultMult = resultMult.toFixed(3);
    resultArr.push(`multiplication(${arrayArg}) = ${resultMult}`);
  } else {
    resultArr.push(`multiplication(${arrayArg}) = ${resultMult}`);
  }
}
