const MAX_COLUMNS = 7;
const MAX_ROWS = 6;
const MAX_CELLS = MAX_COLUMNS * MAX_ROWS;
const EMPTY_CELL = " ";
const PLAYER_1 = "o";
const PLAYER_2 = "x";
const PLAYER_CPU = PLAYER_2;
const CONNECT = 4;

const AXIS_DIRECTION = {
  LEFT: "left",
  RIGHT: "right",
  UP: "up",
  DOWN: "down",
};

let domBoard = [];
let game = {};
let domRows = [];

const goodBye = () => {
  hide(".game-results");
  playSound("mrBlueSky.mp3");
  show(".special-thanks");
};

const clearBoard = () => {
  domBoard.forEach((column, colIndex) => {
    column.forEach((_, rowIndex) => {
      const cell = domBoard[colIndex][rowIndex];
      cell.classList.remove("player1-cell");
      cell.classList.remove("player2-cell");
      cell.classList.add("empty-cell");
      game.board[colIndex][rowIndex].piece = EMPTY_CELL;
    });
  });
};

const restart = () => {
  clearBoard();
  game.turns = 1;
  game.playerTurn = PLAYER_1;
  hide(".game-results");
};

const setEndGameMesage = (isWinner) => {
  const results = document.querySelector(".results");
  if (isWinner) {
    results.innerHTML = `El ganador es el jugador ${
      game.playerTurn === PLAYER_1 ? "rojo" : "azul"
    }.`;
  } else {
    results.innerHTML = `La partida ha finalizado en empate.`;
  }
};

const updateStatics = () => {
  if (game.playerTurn === PLAYER_1) {
    game.statics.playerOneWins++;
    game.statics.playerTwoLoses++;
  } else {
    game.statics.playerTwoWins++;
    game.statics.playerOneLoses++;
  }
};

const endGame = (isWinner) => {
  updateStatics();
  setEndGameMesage(isWinner);
  show(".game-results");
  document.getElementById("play-again").addEventListener("click", restart);
  document.getElementById("stop").addEventListener("click", goodBye);
};

const nextPlayer = () => {
  game.turns++;
  if (game.playerTurn === PLAYER_1) {
    game.playerTurn = PLAYER_2;
  } else {
    game.playerTurn = PLAYER_1;
  }
};

const isTie = () => {
  return game.turns === MAX_CELLS;
};

const updatePositionY = (yDirection, isEndX, isEndY, positionY) => {
  if (yDirection === AXIS_DIRECTION.UP && !isEndX && !isEndY) {
    positionY++;
  } else if (yDirection === AXIS_DIRECTION.DOWN && !isEndX && !isEndY) {
    positionY--;
  }
  return positionY;
};

const updatePositionX = (xDirection, isEndX, isEndY, positionX) => {
  if (xDirection === AXIS_DIRECTION.RIGHT && !isEndX && !isEndY) {
    positionX++;
  } else if (xDirection === AXIS_DIRECTION.LEFT && !isEndX && !isEndY) {
    positionX--;
  }
  return positionX;
};

const getEndY = (positionY, yDirection) => {
  return (
    (positionY === MAX_ROWS - 1 && yDirection === AXIS_DIRECTION.UP) ||
    (positionY === 0 && yDirection === AXIS_DIRECTION.DOWN)
  );
};

const getEndX = (positionX, xDirection) => {
  return (
    (positionX === MAX_COLUMNS - 1 && xDirection === AXIS_DIRECTION.RIGHT) ||
    (positionX === 0 && xDirection === AXIS_DIRECTION.LEFT)
  );
};

const getDiagonal = (startCell, xDirection, yDirection) => {
  let isEnd = false;
  let diagonal = [startCell];
  let positionX = startCell.positionX;
  let positionY = startCell.positionY;
  while (!isEnd) {
    let isEndX = getEndX(positionX, xDirection);
    let isEndY = getEndY(positionY, yDirection);

    positionX = updatePositionX(xDirection, isEndX, isEndY, positionX);
    positionY = updatePositionY(yDirection, isEndX, isEndY, positionY);

    diagonal.push(game.board[positionX][positionY]);

    isEnd = getEndX(positionX, xDirection) || getEndY(positionY, yDirection);
  }

  return diagonal;
};

const getDiagonalEnd = (cell, diagonalDirection) => {
  const diagonal = getDiagonal(cell, diagonalDirection, AXIS_DIRECTION.DOWN);
  return diagonal.pop();
};
const isDiagonalWin = (cell, playerTurn) => {
  const leftDiagonalEnd = getDiagonalEnd(cell, AXIS_DIRECTION.LEFT);
  const rightDiagonalEnd = getDiagonalEnd(cell, AXIS_DIRECTION.RIGHT);

  const leftDiagonal = getDiagonal(
    leftDiagonalEnd,
    AXIS_DIRECTION.RIGHT,
    AXIS_DIRECTION.UP
  );
  const rightDiagonal = getDiagonal(
    rightDiagonalEnd,
    AXIS_DIRECTION.LEFT,
    AXIS_DIRECTION.UP
  );

  return (
    isLineWin(leftDiagonal, playerTurn) || isLineWin(rightDiagonal, playerTurn)
  );
};

const isHorizontalWin = (row, playerTurn) => {
  return isLineWin(row, playerTurn);
};

const isLineWin = (line, playerTurn) => {
  let piecesInLine = 0;
  let isWinner = false;
  line.forEach((cell) => {
    if (cell.piece === playerTurn) {
      piecesInLine++;
      if (piecesInLine === CONNECT) {
        isWinner = true;
      }
    } else {
      piecesInLine = 0;
    }
  });
  return isWinner;
};

const isVerticalWin = (column, playerTurn) => {
  return isLineWin(column, playerTurn);
};

const checkWin = (column, row, cell) => {
  let isWinner = false;
  if (isVerticalWin(column, game.playerTurn)) {
    isWinner = true;
  } else if (isHorizontalWin(row, game.playerTurn)) {
    isWinner = true;
  } else if (isDiagonalWin(cell, game.playerTurn)) {
    isWinner = true;
  }

  return isWinner;
};

const getRowByCell = (cell) => {
  let row = [];
  for (let i = 0; i < MAX_COLUMNS; i++) {
    row.push(game.board[i][cell.positionY]);
  }
  return row;
};

const updateCell = (cell) => {
  domBoard[cell.positionX][cell.positionY].classList.remove("empty-cell");
  if (game.playerTurn === PLAYER_1) {
    domBoard[cell.positionX][cell.positionY].classList.add("player1-cell");
    cell.piece = PLAYER_1;
  } else {
    domBoard[cell.positionX][cell.positionY].classList.add("player2-cell");
    cell.piece = PLAYER_2;
  }
};

const isColumnFull = (column) => {
  return column.every((cell) => cell.piece !== EMPTY_CELL);
};

const insertPiece = (column, cell) => {
  let isCellUpdated = false;
  if (isColumnFull(column)) {
    show(".full-column");
  } else {
    playSound("beep.mp3");
    updateCell(cell);
    isCellUpdated = true;
  }

  return isCellUpdated;
};

const play = (colIndex) => {
  const column = game.board[colIndex];
  const cell = column.find((cell) => cell.piece === EMPTY_CELL);
  let isWinner = false;
  let isCellUpdated = insertPiece(column, cell);
  if (game.turns >= 7 && isCellUpdated) {
    const row = getRowByCell(cell);
    isWinner = checkWin(column, row, cell);
  }

  if (isCellUpdated && !isWinner && !isTie()) {
    nextPlayer();
  } else if (isWinner || isTie()) {
    endGame(isWinner);
  }
};

const createCell = (rows, cols) => {
  return {
    positionX: rows,
    positionY: cols,
    piece: EMPTY_CELL,
  };
};

const createBoardGame = () => {
  const boardGame = [];
  domBoard.forEach((column, colIndex) => {
    const row = [];
    column.forEach((_, rowIndex) => {
      row.push(createCell(colIndex, rowIndex));
    });
    boardGame.push(row);
  });
  return {
    board: boardGame,
    turns: 1,
    playerTurn: PLAYER_1,
    statics: {
      playerOneWins: 0,
      playerOneLoses: 0,
      playerTwoWins: 0,
      playerTwoLoses: 0,
    },
  };
};

const getDOMCol = (domRows, colNumber) => {
  const col = [];
  domRows.forEach((row) => {
    col.push(row.children[colNumber]);
  });

  return col;
};

const getDomBoard = (domRows) => {
  const domBoard = [];
  for (let i = 0; i < MAX_COLUMNS; i++) {
    domBoard.push(getDOMCol(domRows, i));
  }
  return domBoard;
};

const getDOMRows = () => {
  const rows = document.getElementsByClassName("row");
  return Array.from(rows).reverse();
};

const playSound = (soundName) => {
  const tmpStartSound = new Audio(`sounds/${soundName}`);
  tmpStartSound.play();
};

const show = (elementToHide) => {
  const element = document.querySelector(elementToHide);
  element.classList.remove("hidden");
};

const hide = (elementToHide) => {
  const element = document.querySelector(elementToHide);
  element.classList.add("hidden");
};

const loadGame = () => {
  hide(".user-interaction-warning");
  domRows = getDOMRows();
  domBoard = getDomBoard(domRows);
  game = createBoardGame();

  for (let i = 0; i < MAX_COLUMNS; i++) {
    document.getElementById("col" + i).addEventListener("click", () => play(i));
  }

  document
    .getElementById("close-full-column-modal")
    .addEventListener("click", () => hide(".full-column"));
};

const acceptSound = (number) => {
  document.getElementById("play-game").addEventListener("click", loadGame);
};

document.addEventListener("DOMContentLoaded", acceptSound);
