let screen = document.getElementsByClassName("screen")[0];
let finishResult = null;
let value;
let operator;
let point;
let isNumber;
let saveNumberOne = null;
let saveNumberTwo = null;
let saveOperator = null;
let saveOperatorSend = null;
let calculation;

const typeOfResult = () => {
  if (finishResult === Infinity || isNaN(finishResult)) {
    screen.innerHTML = "Error";
    finishResult = "Error";
  } else {
    screen.innerHTML = parseFloat(finishResult);
  }
};

const resetSizeResult = () => {
  screen.classList.remove("screenTwo");
  screen.classList.remove("screenThree");
  screen.classList.remove("screenFour");
};

const getReset = () => {
  screen.innerHTML = "0";
  resetSizeResult();
  finishResult = null;
  saveNumberOne = null;
  saveNumberOne = null;
  saveOperator = null;
};

const deleteElement = () => {
  if (screen.innerHTML.length === 1) {
    screen.innerHTML = "0";
  } else {
    screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1);
  }
};

const typeOfClick = () => {
  if (
    (value === "+" || value === "-" || value === "*" || value === "/") &&
    saveOperator === null
  ) {
    operator = true;
    point = false;
    isNumber = false;
    screen.innerHTML = value;
    saveOperator = screen.innerHTML;
  } else if (
    (value === "+" || value === "-" || value === "*" || value === "/") &&
    saveOperator !== null
  ) {
    operator = true;
    point = false;
    isNumber = false;
    saveOperatorSend = value;
    equal();

    //  screen.innerHTML = finishResult;
  } else if (value === ".") {
    operator = false;
    point = true;
    isNumber = false;
  } else {
    operator = false;
    point = false;
    isNumber = true;
  }
};

// 3 + 5 - //

const hasComa = () => {
  return screen.innerHTML.includes(".") && point === true;
};

const setResult = () => {
  typeOfClick();
  if (finishResult) {
    resetSizeResult();
    saveNumberOne = finishResult;
  }
  if (screen.innerHTML === "0" && saveOperator === null && point === false) {
    screen.innerHTML = value;
    !finishResult
      ? (saveNumberOne = screen.innerHTML)
      : (saveNumberTwo = screen.innerHTML);
  } else if (
    screen.innerHTML === "0" &&
    saveOperator === null &&
    point === true
  ) {
    screen.innerHTML = "0" + value;
    !finishResult
      ? (saveNumberOne = screen.innerHTML)
      : (saveNumberTwo = screen.innerHTML);
  } else if (screen.innerHTML !== "0" && saveOperator === null) {
    if (!hasComa()) {
      screen.innerHTML += value;
      saveNumberOne = screen.innerHTML;
    }
  } else if (screen.innerHTML === "0" && saveOperator !== null) {
    screen.innerHTML = value;
    saveNumberTwo = screen.innerHTML;
  } else if (screen.innerHTML === saveOperator && point === true) {
    screen.innerHTML = "0" + value;
    saveNumberTwo = screen.innerHTML;
  } else if (screen.innerHTML !== "0" && saveOperator !== null) {
    screen.innerHTML = screen.innerHTML.replace(saveOperator, "");
    if (!hasComa()) {
      screen.innerHTML += value;
      saveNumberTwo = screen.innerHTML;
    }
  }
};

const sizeResult = (elem) => {
  value = elem.getAttribute("value");
  if (screen.innerHTML.length < 7) {
    setResult(elem);
  } else if (screen.innerHTML.length >= 7 && screen.innerHTML.length < 10) {
    screen.classList.add("screenTwo");
    setResult(elem);
  } else if (screen.innerHTML.length >= 10 && screen.innerHTML.length < 13) {
    screen.classList.add("screenThree");
    setResult(elem);
  } else if (screen.innerHTML.length >= 13 && screen.innerHTML.length <= 16) {
    screen.classList.add("screenFour");
    setResult(elem);
  } else {
    return null;
  }
};

const percentage = () => {
  if (saveNumberTwo === null) {
    screen.innerHTML = parseFloat(saveNumberOne) / 100;
    saveNumberOne = screen.innerHTML;
  } else {
    screen.innerHTML = "Error";
  }
};

const decimal = () => {
  if (calculation % 1 === 0) {
    screen.innerHTML = calculation;
  } else {
    screen.innerHTML = calculation.toFixed(6);
  }
};

const equal = () => {
  switch (saveOperator) {
    case "+":
      calculation = parseFloat(saveNumberOne) + parseFloat(saveNumberTwo);
      //  decimal();
      finishResult = calculation;
      break;
    case "-":
      calculation = parseFloat(saveNumberOne) - parseFloat(saveNumberTwo);
      //  decimal();
      finishResult = calculation;
      break;
    case "*":
      calculation = parseFloat(saveNumberOne) * parseFloat(saveNumberTwo);
      //decimal();
      finishResult = calculation;
      break;
    case "/":
      calculation = parseFloat(saveNumberOne) / parseFloat(saveNumberTwo);
      // decimal();
      finishResult = calculation;
      break;
  }
  saveOperator = saveOperatorSend;
};
