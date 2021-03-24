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

const insertRandomPiece = (possibleCells) => {
  const cell = possibleCells[Math.floor(Math.random() * possibleCells.length)];
  const column = game.board[cell.positionX];
  return insertPiece(column, cell);
};

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
  setPlayerColor(true);
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

const changeCell = (cell, pieceType) => {
  cell.piece = pieceType;
};
const canWin = (cell, player) => {
  const column = game.board[cell.positionX];
  const row = getRowByCell(cell);
  changeCell(cell, player);
  return checkWin(column, row, cell, player);
};

const insertPieceCPU = (possibleCells, player) => {
  let isPieceInserted = false;
  try {
    possibleCells.forEach((cell) => {
      if (canWin(cell, player)) {
        const column = game.board[cell.positionX];
        isPieceInserted = insertPiece(column, cell);
        throw new Error("Exit forEach, inserted piece");
      } else {
        changeCell(cell, EMPTY_CELL);
      }
    });
  } catch (error) {
    console.error(error.message);
  }
  return isPieceInserted;
};

const getAllPossibleCells = () => {
  const possibleCells = [];
  game.board.forEach((column) => {
    if (!isColumnFull(column)) {
      const cell = column.find((cell) => cell.piece === EMPTY_CELL);
      possibleCells.push(cell);
    }
  });
  return possibleCells;
};

const autoPlay = () => {
  let isPieceInserted = false;
  const possibleCells = getAllPossibleCells();
  isPieceInserted = insertPieceCPU(possibleCells, PLAYER_CPU);
  if (!isPieceInserted) {
    isPieceInserted = insertPieceCPU(possibleCells, PLAYER_1);
  } else {
    endGame(true);
  }

  if (!isPieceInserted) {
    isPieceInserted = insertRandomPiece(possibleCells);
    if (isPieceInserted) {
      nextPlayer();
    }
  } else {
    nextPlayer();
  }
};

const nextPlayer = () => {
  game.turns++;
  if (game.playerTurn === PLAYER_1) {
    game.playerTurn = PLAYER_2;
  } else {
    game.playerTurn = PLAYER_1;
  }
  setPlayerColor(true);
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

const checkWin = (column, row, cell, playerToCheck) => {
  let isWinner = false;
  if (isVerticalWin(column, playerToCheck)) {
    isWinner = true;
  } else if (isHorizontalWin(row, playerToCheck)) {
    isWinner = true;
  } else if (isDiagonalWin(cell, playerToCheck)) {
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

const playSound = (soundName) => {
  const tmpStartSound = new Audio(`sounds/${soundName}`);
  tmpStartSound.play();
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

const getWinner = (column, isCellUpdated, cell) => {
  let isWinner = false;

  if (game.turns >= 7 && isCellUpdated) {
    const row = getRowByCell(cell);
    isWinner = checkWin(column, row, cell, game.playerTurn);
  }
  return isWinner;
};

const play = (colIndex) => {
  const column = game.board[colIndex];
  const cell = column.find((cell) => cell.piece === EMPTY_CELL);
  let isWinner = false;
  let isCellUpdated = insertPiece(column, cell);

  isWinner = getWinner(column, isCellUpdated, cell);

  if (isCellUpdated && !isWinner && !isTie()) {
    nextPlayer();
  } else if (isWinner || isTie()) {
    endGame(isWinner);
  }
  if (game.playerTurn === PLAYER_CPU && game.isCpu) {
    setTimeout(autoPlay, 1000);
  }
};

const setPlayerColor = (isLoadedGame) => {
  const playerTurn = document.getElementById("player-turn");
  if (!isLoadedGame) {
    playerTurn.classList.remove("empty-cell");
  }
  if (game.playerTurn === PLAYER_1) {
    playerTurn.classList.remove("player2-cell");
    playerTurn.classList.add("player1-cell");
  } else {
    playerTurn.classList.remove("player1-cell");
    playerTurn.classList.add("player2-cell");
  }
};

const createCell = (rows, cols) => {
  return {
    positionX: rows,
    positionY: cols,
    piece: EMPTY_CELL,
  };
};

const createBoardGame = (isCpu) => {
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
    isCpu: isCpu,
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

const loadGame = (isCpu) => {
  hide(".game-mode");
  domRows = getDOMRows();
  domBoard = getDomBoard(domRows);
  game = createBoardGame(isCpu);
  setPlayerColor(false);
  for (let i = 0; i < MAX_COLUMNS; i++) {
    document.getElementById("col" + i).addEventListener("click", () => play(i));
  }

  document
    .getElementById("close-full-column-modal")
    .addEventListener("click", () => hide(".full-column"));
};

const show = (elementToHide) => {
  const element = document.querySelector(elementToHide);
  element.classList.remove("hidden");
};

const hide = (elementToHide) => {
  const element = document.querySelector(elementToHide);
  element.classList.add("hidden");
};

const selectGameMode = () => {
  hide(".user-interaction-warning");
  show(".game-mode");
  document
    .getElementById("one-player")
    .addEventListener("click", () => loadGame(true));
  document
    .getElementById("two-players")
    .addEventListener("click", () => loadGame(false));
};

const acceptSound = () => {
  document
    .getElementById("play-game")
    .addEventListener("click", selectGameMode);
};

document.addEventListener("DOMContentLoaded", acceptSound);
