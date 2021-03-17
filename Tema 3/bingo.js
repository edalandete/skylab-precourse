const MAX_NUMBERS = 99;
const BINGO_CARD_NUMBERS = 15;
const LINE_NUMBERS = 5;

let playerName = "";
let bingoCard = {};
let totalTurns = 0;
let matchedNumbers = 0;
let lineCalled = false;
let ranking = [];

function bingo() {
  initGame();
  let isGameFinished = play();
  endGame(isGameFinished);
  numbers();
}

function initGame() {
  playerName = prompt("Introduce tu nombre");
  showPointsSystem();
  do {
    let playerNumbers = getBingoCardNumbers(numbers()).slice(0,BINGO_CARD_NUMBERS);
    bingoCard = createBingoCard(playerNumbers);
    showBingoCard();
  }while(!window.confirm(`Quieres este carton?`));
  
}

function showPointsSystem() {
  console.log(`El sistema de puntos es muy sencillo. Hay un total de ${MAX_NUMBERS} en el bombo. Una vez hayas finalizado el juego, 
                se restaran el numero de turnos totales a los numeros del bombo para obtener tu punuacion final`);
}

let getBingoCardNumbers = (numbers) => {
  var copy = [], n = numbers.length, i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    copy.push(numbers.splice(i, 1)[0]);
  }

  return copy;
}

let numbers = () => {
  let bingoNumbers = [];
  for (let i = 1; i <= MAX_NUMBERS; i++) {
    bingoNumbers.push(i);
  }
  return bingoNumbers;
}

let createBingoCard = (playerNumbers) => {
  let card = [];
  
  for(let x = 0; x < playerNumbers.length; x++) {
    let line = [];
    for (let i = 0; i < LINE_NUMBERS; i++) {
      line.push(createNumberObj(playerNumbers[i]));
    }
    playerNumbers.splice(0, LINE_NUMBERS);
    card.push(createLineObj(line));
  }
  return card;
}

let createNumberObj = (number) => {
  return {
    number : number,
    matched : false
  }
}

let createLineObj = (line) => {
  return {
    line : line,
    lineMatches : 0
  }
}

function showBingoCard() {
  console.log(`--------- Los numeros con los que juega el jugador son: ---------`);
  for (let i = 0; i < bingoCard.length; i++) {
    console.log(`--------- Linea ${i+1}: --------- `);
    for (let x = 0; x < LINE_NUMBERS; x++) {
      console.log(`Numero: ${bingoCard[i].line[x].number}. Encontrado: ${bingoCard[i].line[x].matched}`);
    }
  } 
}

function play() {
  let numbersToPlay = numbers();
  let isGameFinished = false;
  let continuePlaying = true;

  while(!isGameFinished && continuePlaying) {
    let extractedNumber = initTurn(numbersToPlay);
    let isNumberUpdated = processTurn(extractedNumber);
    isGameFinished = endTurn(extractedNumber, isNumberUpdated);
    numbersToPlay = numbersToPlay.filter(e => e !== extractedNumber);
    continuePlaying = window.confirm(`Quieres seguir jugando?`);
  }

  return isGameFinished;
}

function initTurn(numbersToPlay) {
  if(totalTurns === 0) {
    alert("Bienvenido al bingaso, vamos a darle!");
  }
  let number = getRandomNumber(numbersToPlay);
  alert(`Numero extraido: ${number}`);
  return number;
}

let getRandomNumber = (numbersToPlay) => numbersToPlay[Math.floor(Math.random() * numbersToPlay.length)];

function processTurn(numberOfTurn) {
  return updateNumber(numberOfTurn);
}

function updateNumber(number) {
  let isNumberUpdated = false;
  for(let i = 0; i < bingoCard.length; i++) {
    bingoCard[i].line.forEach(
      function(num) {
        if (num.number === number) {
          num.number = 'X';
          num.matched = true;
          isNumberUpdated = true;
          bingoCard[i].lineMatches++;
        }
      } 
    )
  }

  return isNumberUpdated;
}

function endTurn(extractedNumber, isNumberUpdated) {
  if(isNumberUpdated) {
    matchedNumbers++;
    console.log(`Se ha encontrado el numero ${extractedNumber} en el carton`);
    showBingoCard();
    if(matchedNumbers >= LINE_NUMBERS && !lineCalled) {
      checkLinea();
    }
  } 
  totalTurns++;
  return matchedNumbers === BINGO_CARD_NUMBERS;
}

function checkLinea() {
  bingoCard.forEach(function(line) {
    if(line.lineMatches === LINE_NUMBERS) {
      alert("LINEASA!!!");
      lineCalled = true;
    }
  })
}

function endGame(isGameFinished) {
  if(isGameFinished) {
    alert(`JUEGO FINALIZADO EN ${totalTurns} TURNOS.`);
    ranking.push(createPlayerObj());
    //TODO: SORT RANKING
    showRanking();
  }else {
    console.log(`No has finalizado el juego por lo que no entras en el ranking ${playerName}`);
  }

  if(window.confirm("Quieres jugar de nuevo?")) {
    restoreDefaults();
    bingo();
  }else {
    console.log(`Gracias por jugar ${playerName}`);
  }
}

function showRanking() {
  console.log(`--------------------- THIS IS THE RANKING MY DUDES --------------------- `);
  for(player in ranking) {
    console.log(`Nombre: ----------- ${ranking[player].name} ----------- Puntos: ----------- ${ranking[player].points} -----------`);
  }
}

function restoreDefaults () {
  playerName = "";
  bingoCard = {};
  totalTurns = 0;
  lineCalled = false;
  matchedNumbers = 0;
}

let createPlayerObj = () => {
  return {
    name : playerName,
    points : MAX_NUMBERS - totalTurns
  }
}
