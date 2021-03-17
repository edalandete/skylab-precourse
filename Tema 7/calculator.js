const ERASE = "Backspace";
const AC = "AC";
const DOT = ".";

const OPERATORS = {
  PLUS: "+",
  MINUS: "-",
  MULTI: "*",
  DIV: "/",
  EQUAL: "=",
  ENTER: "Enter",
};

const MAX_DIGITS = 10;

let isFirstNumber = true;
let isFirstOperation = true;
let operator = "";
let result = "";

const isOperator = (keyPressed) => {
  return Object.values(OPERATORS).includes(keyPressed);
};

document.addEventListener("DOMContentLoaded", function () {
  document.body.onkeydown = function (event) {
    if (!isNaN(event.key)) {
      sendValueToScreen(event.key);
    } else if (isOperator(event.key)) {
      calculate(event.key);
    } else if (event.key === ERASE) {
      deleteLastNumber();
    } else if (
      event.key === DOT ||
      (event.key === "Delete" && event.code === "NumpadDecimal")
    ) {
      sendComaToScreen();
    }
  };
});

const sendComaToScreen = () => {
  if (!getScreen().innerHTML.includes(".")) {
    if (isFirstNumber || getScreen().innerHTML === "0") {
      sendValueToScreen("0.");
    } else {
      sendValueToScreen(".");
    }
  }
};

const deleteLastNumber = () => {
  getScreen().innerHTML = getScreen().innerHTML.replace(/(\s+)?.$/, "");
};

const sum = (firstNumber, secondNumber) => {
  return parseFloat(firstNumber) + parseFloat(secondNumber);
};

const minus = (firstNumber, secondNumber) => {
  return firstNumber - secondNumber;
};

const multiply = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};

const divide = (firstNumber, secondNumber) => {
  return firstNumber / secondNumber;
};

const restoreCalculator = (isEnableOperators) => {
  isFirstNumber = true;
  isFirstOperation = true;
  operator = "";
  result = "";
  getScreen().innerHTML = 0;
  enableOperators(isEnableOperators);
};

const checkDivisionResult = () => {
  if (result === "Infinity") {
    restoreCalculator(false);
    result = "No se puede dividir entre cero.";
  }
};

const calculateSquareRoot = (number) => {
  return Math.sqrt(number);
};

const calculateByOperator = (operator, number) => {
  switch (operator) {
    case OPERATORS.PLUS:
      result = sum(result, number);
      break;
    case OPERATORS.MINUS:
      result = minus(result, number);
      break;
    case OPERATORS.MULTI:
      result = multiply(result, number);
      break;
    case OPERATORS.DIV:
      result = divide(result, number);
      checkDivisionResult(getScreen());
      break;
  }
};

const calculate = (operatorSent) => {
  let number = "";
  if (isFirstOperation) {
    result = getScreen().innerHTML;
    isFirstOperation = false;
  } else {
    number = getScreen().innerHTML;
    calculateByOperator(operator, number);
    getScreen().innerHTML = result;
  }
  operator = operatorSent;
  isFirstNumber = true;
};

const enableOperators = (isEnableOperators) => {
  const operators = document.getElementsByClassName("operatorButton");
  if (isEnableOperators) {
    for (let operator of operators) {
      operator.removeAttribute("disabled");
    }
  } else {
    for (let operator of operators) {
      operator.setAttribute("disabled", "disabled");
    }
  }
};
const getScreen = () => {
  return document.getElementById("screen");
};

const sendValueToScreen = (value) => {
  if (isFirstNumber || getScreen().innerHTML === "0") {
    enableOperators(true);
    getScreen().innerHTML = value;
    isFirstNumber = false;
  } else if (getScreen().innerHTML.length < MAX_DIGITS) {
    getScreen().innerHTML = getScreen().innerHTML + value;
  }
};

const loadCalculator = () => {
  for (let i = 0; i < 10; i++) {
    document
      .getElementById(i)
      .addEventListener("click", () => sendValueToScreen(i));
  }
  document
    .getElementById("division")
    .addEventListener("click", () => calculate(OPERATORS.DIV));
  document
    .getElementById("mult")
    .addEventListener("click", () => calculate(OPERATORS.MULTI));
  document
    .getElementById("plus")
    .addEventListener("click", () => calculate(OPERATORS.PLUS));
  document
    .getElementById("minus")
    .addEventListener("click", () => calculate(OPERATORS.MINUS));
  document
    .getElementById("equal")
    .addEventListener("click", () => calculate(OPERATORS.EQUAL));

  document
    .getElementById("ac")
    .addEventListener("click", () => restoreCalculator(true));
  document.getElementById("erase").addEventListener("click", deleteLastNumber);
  document.getElementById("dot").addEventListener("click", sendComaToScreen);
};
document.addEventListener("DOMContentLoaded", loadCalculator);
