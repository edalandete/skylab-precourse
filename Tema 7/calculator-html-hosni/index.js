let totalNum1 = "";
let totalNum2 = "";
let getFullNum;
let getFullNumConsole;
let simbolOperate = "";
let equalTo = "";

function addNumber(numInput) {//entrada numeros
    if(isNaN(totalNum1)){
        getFullNum = getTotalNum();
        setTotalNum(parseFloat(getFullNum + numInput));
        setTotalNumInputConsole(parseFloat(getFullNum + numInput));
    }else{
        getFullNumConsole = getTotalInputConsole();
        setTotalNumInputConsole(parseFloat(getFullNumConsole + numInput));
        setTotalNum(totalNum1 + simbolOperate + parseFloat(getFullNumConsole + numInput));
    }
}

function addSimbol(simbolInput) {//entrada simbolos
    if(totalNum1 === "") {//primera entrada de simbolo(cuando totalNum1 no esta asignado)
        simbolOperate = simbolInput;
        totalNum1 = document.getElementById("inputConsole").innerHTML;
        setTotalNumInputConsole(0);
        setTotalNum(totalNum1 + simbolOperate);
    }else if(!isNaN(totalNum1) && totalNum2 === "" && equalTo == "") {//cuando sigo operando sin darle a equal.
        totalNum2 = document.getElementById("inputConsole").innerHTML;
        calculate();
        simbolOperate = simbolInput;
        setTotalNumInputConsole(0);
        setTotalNum(totalNum1 + simbolOperate);
    }else{//cuando clicas addEqual.(sino totalNum1 se calcula por (totalNum2 = 0))
        simbolOperate = simbolInput;
        equalTo = document.getElementById("inputConsole").innerHTML;
        setTotalNumInputConsole(0);
        setTotalNum(totalNum1 + simbolOperate);
    }
}

function addEqual() {
    totalNum2 = document.getElementById("inputConsole").innerHTML;
    calculate();
    equalTo = totalNum1;
    setTotalNum(equalTo);
    setTotalNumInputConsole(equalTo);    
}

function addComma(comma) {
    getFullNum = getTotalNum();
    getFullNumConsole = getTotalInputConsole();
    if(getFullNumConsole % 1 === 0) {
        setTotalNum(getFullNum + comma);
        setTotalNumInputConsole(getFullNumConsole + comma);
    }
}

function calculate() {
    let compare = totalNum1 + simbolOperate + totalNum2;
    let parseNum1 = parseFloat(totalNum1);
    let parseNum2 = parseFloat(totalNum2);
    switch(compare){
        case parseNum1 + " + " + parseNum2:
            totalNum1 = parseNum1 + parseNum2;
            totalNum2 = "";
            break;
        case parseNum1 + " - " + parseNum2:
            totalNum1 = parseNum1 - parseNum2;
            totalNum2 = "";
            break;
        case parseNum1 + " x " + parseNum2:
            totalNum1 = parseNum1 * parseNum2;
            totalNum2 = "";
            break;
        case parseNum1 + ' / ' + parseNum2:
            totalNum1 = parseNum1 / parseNum2;
            totalNum2 = "";
            break;
    }
}

function clearNum() {
    setTotalNumInputConsole(0);
}

function allClear() {
    setTotalNumInputConsole(0);
    setTotalNum(0);
    totalNum1 = "";
    simbolOperate = "";
}

function getTotalInputConsole() {
    return document.getElementById("inputConsole").innerHTML;
}
function getTotalNum() {
    return document.getElementById("resultado").innerHTML;    
}
function setTotalNumInputConsole(value) {
    document.getElementById("inputConsole").innerHTML = value;
}
function setTotalNum(value) {
    document.getElementById("resultado").innerHTML = value;
}
function opera (value) {
    document.getElementById("resultado").innerHTML = value;    
}