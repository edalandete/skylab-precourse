const questions = [
  {
    letter: "a",
    status: 0,
    questionList: [
      {
        answer: "abducir",
        question:
          "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
      },
      { answer: "asgard", question: "CON LA A. Mundo originario de Thor." },
      { answer: "amanecer", question: "CON LA A. Inicio de un dia" },
    ],
  },
  {
    letter: "b",
    status: 0,
    questionList: [
      {
        answer: "bingo",
        question:
          "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
      },
      { answer: "batman", question: "CON LA B. He is vengeance" },
      {
        answer: "bartomeu",
        question: "CON LA B. Peor presidente de la historia del FC Barcelona",
      },
    ],
  },
  {
    letter: "c",
    status: 0,
    questionList: [
      { answer: "churumbel", question: "CON LA C. Niño, crío, bebé" },
      {
        answer: "churros",
        question:
          "CON LA C. Desayuno típico cuando vuelves de fiesta de marina",
      },
      { answer: "calvo", question: "CON LA C. Sin pelo" },
    ],
  },
  {
    letter: "d",
    status: 0,
    questionList: [
      {
        answer: "diarrea",
        question:
          "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
      },
      {
        answer: "dardo",
        question: "CON LA D. Objeto que se lanza contra una diana",
      },
      {
        answer: "dado",
        question:
          "CON LA D. Suele tener 6 caras. Usado para jugar a juegos de mesa",
      },
    ],
  },
  {
    letter: "e",
    status: 0,
    questionList: [
      {
        answer: "ectoplasma",
        question:
          "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
      },
      { answer: "erudito", question: "CON LA E. Persona que tiene erudición" },
      {
        answer: "esparta",
        question: "CON LA E. Capital de Laconia ciudad de Leonidas",
      },
    ],
  },
  {
    letter: "f",
    status: 0,
    questionList: [
      {
        answer: "facil",
        question:
          "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
      },
      {
        answer: "figura",
        question: "CON LA F. Persona más importante de un equipo.",
      },
      { answer: "ficticio", question: "CON LA F. Que no es real" },
    ],
  },
  {
    letter: "g",
    status: 0,
    questionList: [
      {
        answer: "galaxia",
        question:
          "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
      },
      {
        answer: "gato",
        question: "CON LA G. Animal domésitico independiente e impredecible",
      },
      {
        answer: "guitarra",
        question: "CON LA G. Instrumento musical de 6 cuerdas",
      },
    ],
  },
  {
    letter: "h",
    status: 0,
    questionList: [
      {
        answer: "harakiri",
        question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
      },
      {
        answer: "heroe",
        question:
          "CON LA H. Dicese de aquella persona que comete una heroicidad",
      },
      {
        answer: "hacienda",
        question: "CON LA H. La pesadilla que cada año te pega un palo",
      },
    ],
  },
  {
    letter: "i",
    status: 0,
    questionList: [
      { answer: "iglesia", question: "CON LA I. Templo cristiano" },
      {
        answer: "irrisorio",
        question: "CON LA I. Que no importa nada. Poca cosa",
      },
      {
        answer: "invisible",
        question: "CON LA I. Aquello que no tiene visibilidad",
      },
    ],
  },
  {
    letter: "j",
    status: 0,
    questionList: [
      {
        answer: "jabali",
        question:
          "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
      },
      {
        answer: "jamon",
        question: "CON LA J. Embutido por el cual es famoso España",
      },
      { answer: "jamas", question: "CON LA J. Sinonimo de nunca" },
    ],
  },
  {
    letter: "l",
    status: 0,
    questionList: [
      { answer: "licantropo", question: "CON LA L. Hombre lobo" },
      {
        answer: "lugubre",
        question:
          "CON LA L. Que es oscuro o sombrío y recuerda lo relacionado con la muerte o el más allá.",
      },
      {
        answer: "lugarteniente",
        question:
          "CON LA L. Persona con autoridad y poder para sustituir a otro en algún cargo.",
      },
    ],
  },
  {
    letter: "m",
    status: 0,
    questionList: [
      {
        answer: "misantropo",
        question:
          "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
      },
      { answer: "mama", question: "CON LA M. Coloquial de madre" },
      {
        answer: "marisco",
        question:
          "CON LA M. Animal marino invertebrado, y especialmente los crustáceos y moluscos comestible",
      },
    ],
  },
  {
    letter: "n",
    status: 0,
    questionList: [
      {
        answer: "necedad",
        question: "CON LA N. Demostración de poca inteligencia",
      },
      {
        answer: "ninfa",
        question:
          "CON LA N. Cada una de las fabulosas deidades de las aguas, bosques, selvas, et",
      },
      {
        answer: "nectar",
        question:
          "CON LA N. Jugo azucarado, producido por los nectarios, que chupan las abejas y otros insectos",
      },
    ],
  },
  {
    letter: "ñ",
    status: 0,
    questionList: [
      {
        answer: "señal",
        question:
          "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
      },
      {
        answer: "pañal",
        question: "CONTIENE LA Ñ. Usado por bebes para hacer sus necesidades",
      },
      {
        answer: "ñu",
        question: "CON LA Ñ. Animal responsable de la muerte de Mufasa",
      },
    ],
  },
  {
    letter: "o",
    status: 0,
    questionList: [
      {
        answer: "orco",
        question:
          "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
      },
      {
        answer: "orbita",
        question:
          "CON LA O. Ámbito en que se percibe la influencia de algo o de alguien",
      },
      { answer: "oscuro", question: "CON LA O. No se ve" },
    ],
  },
  {
    letter: "p",
    status: 0,
    questionList: [
      {
        answer: "protoss",
        question:
          "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
      },
      { answer: "paseo", question: "CON LA P. Ación de pasear o pasearse." },
      { answer: "picante", question: "CON LA P. Que pica" },
    ],
  },
  {
    letter: "q",
    status: 0,
    questionList: [
      {
        answer: "queso",
        question:
          "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
      },
      {
        answer: "quad",
        question:
          "CON LA Q. Vehículo todoterreno de cuatro ruedas similar a una motocicleta.",
      },
      {
        answer: "quebrar",
        question: "CON LA Q. Romper, separar con violencia.",
      },
    ],
  },
  {
    letter: "r",
    status: 0,
    questionList: [
      { answer: "raton", question: "CON LA R. Roedor" },
      {
        answer: "rock",
        question:
          "CON LA R. Genero musical popularizado en los años 50 en Estados Unidos",
      },
      {
        answer: "robe",
        question: "CON LA R. Nombre del cantante y lider de Extremoduro",
      },
    ],
  },
  {
    letter: "s",
    status: 0,
    questionList: [
      {
        answer: "stackoverflow",
        question:
          "CON LA S. Comunidad salvadora de todo desarrollador informático",
      },
      {
        answer: "superar",
        question: "CON LA S. Vencer obstaculos o dificultades",
      },
      {
        answer: "skylab",
        question: "CON LA S. Academia de programacion donde lo vamos a petar",
      },
    ],
  },
  {
    letter: "t",
    status: 0,
    questionList: [
      {
        answer: "terminator",
        question:
          "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
      },
      { answer: "temor", question: "CON LA T. Recelo de un daño futuro." },
      {
        answer: "tarantino",
        question:
          "CON LA T. Director de Kill Bill o Reservoir Dogs entre otras películas.",
      },
    ],
  },
  {
    letter: "u",
    status: 0,
    questionList: [
      {
        answer: "unamuno",
        question:
          "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
      },
      { answer: "unico", question: "CON LA U. Que solo pasa una vez" },
      {
        answer: "uralita",
        question:
          "CON LA U. Material de construcción hecho a base de cemento y de fibras, generalmente de asbesto, usado sobre todo en cubiertas y tejados.",
      },
    ],
  },
  {
    letter: "v",
    status: 0,
    questionList: [
      {
        answer: "vikingos",
        question:
          "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
      },
      {
        answer: "vaca",
        question: "CON LA V. Animal del que se puede extraer leche.",
      },
      { answer: "variado", question: "CON LA V. Diferente" },
    ],
  },
  {
    letter: "x",
    status: 0,
    questionList: [
      {
        answer: "botox",
        question:
          "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
      },
      {
        answer: "xilofono",
        question:
          "CON LA X. Instrumento musical de percusión formado por láminas generalmente de madera, ordenadas horizontalmente según su tamaño y sonido, que se hacen sonar golpeándolas con dos baquetas.",
      },
      {
        answer: "expediente",
        question:
          "CONTIENE LA X. Conjunto de todos los papeles correspondientes a un asunto o negocio",
      },
    ],
  },
  {
    letter: "y",
    status: 0,
    questionList: [
      {
        answer: "peyote",
        question:
          "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos",
      },
      {
        answer: "popeye",
        question: "CONTIENE LA Y. Personaje de ficcion que adora las espinacas",
      },
      { answer: "yoda", question: "CON LA Y. Maestro jedi de color verde." },
    ],
  },
  {
    letter: "z",
    status: 0,
    questionList: [
      {
        answer: "zen",
        question:
          "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
      },
      {
        answer: "zoo",
        question:
          "CON LA Z. Lugar donde se pueden ver animales de diferentes paises",
      },
      {
        answer: "zinc",
        question: "CON LA Z. Elemento químico metálico, de núm. atóm. 30",
      },
    ],
  },
];
let ranking = [];
const SKIP_WORD = "pasapalabra";
const END_GAME = "end";
const WORD_ANSWER = {
  CORRECT: 1,
  UNANSWERD: 0,
  INCORRECT: -1,
  END: -2,
};
const TOTAL_WORDS = 25;
const TOTAL_TIME = 150;

let donut = [];
let answeredDonut = [];
let questionNumber = 0;
let timeleft = TOTAL_TIME;
let timer;

document.addEventListener("DOMContentLoaded", function () {
  document.body.onkeydown = function (event) {
    if (event.key === "Enter") {
      playPasapalabra();
    }
  };
});

//classList.toggle("show");

const show = (classToShow) =>
  (document.querySelector(classToShow).style.display = "block");
const flex = (classToShow) =>
  (document.querySelector(classToShow).style.display = "flex");
const hide = (classToShow) =>
  (document.querySelector(classToShow).style.display = "none");

const reset = () => {
  hide(".ranking");
  hide(".end-game-buttons");
  document.getElementById("answer").value = "";
  const donutContainer = document.getElementsByClassName("donut")[0];
  const letters = Array.from(donutContainer.children);
  letters.forEach(function (letter) {
    letter.classList.remove("correct");
    letter.classList.remove("incorrect");
    letter.classList.add("unanswered");
  });

  answeredDonut = [];
  donut = [];
  clearInterval(timer);
  timeleft = TOTAL_TIME;
};

const mainMenu = () => {
  reset();
  show(".main-menu");
  hide(".start-screen");
  document.getElementById("init-game").addEventListener("click", initGame);
};

const loadMainMenu = () => {
  document.getElementById("start-game").addEventListener("click", mainMenu);
};

const getRamdomQuestion = (questionList) =>
  questionList[Math.floor(Math.random() * questionList.length)];

const createQuestionObj = (question) => {
  const randomQuestion = getRamdomQuestion(question.questionList);
  return {
    letter: question.letter,
    status: question.status,
    answer: randomQuestion.answer,
    question: randomQuestion.question,
  };
};

const getPlayerName = () => document.getElementById("player-name").value;

const createDonut = () => {
  questions.forEach((question) => {
    donut.push(createQuestionObj(question));
  });
};

const showGame = () => {
  show(".donut");
  flex(".timer");
  show(".player-space");
  hide(".main-menu");
};

const showQuestion = () => {
  const question = donut[questionNumber];
  document.getElementById("question").innerHTML = question.question;
};

let updateTimer = () => {
  timeleft <= 0
    ? endGame()
    : (document.querySelector(".timer").innerHTML = timeleft--);
};

let createTimer = () => (timer = setInterval(() => updateTimer(), 1000));

const initGame = () => {
  createDonut();
  showGame();
  showQuestion();
  createTimer();
  document
    .getElementById("send-answer")
    .addEventListener("click", playPasapalabra);
  document.getElementById("next-question").addEventListener("click", skipWord);
  document.getElementById("end-game").addEventListener("click", endGame);
};

const getPlayerAnswer = () => {
  const playerAnswer = document.getElementById("answer").value;
  return playerAnswer === null || playerAnswer === ""
    ? SKIP_WORD
    : playerAnswer.toLowerCase();
};

const checkAnswer = (playerAnswer, answer) => {
  let answerStatus = WORD_ANSWER.UNANSWERD;
  if (playerAnswer === answer) {
    answerStatus = WORD_ANSWER.CORRECT;
  } else {
    switch (playerAnswer) {
      case SKIP_WORD:
        answerStatus = WORD_ANSWER.UNANSWERD;
        break;
      case END_GAME:
        answerStatus = WORD_ANSWER.END;
        break;
      default:
        answerStatus = WORD_ANSWER.INCORRECT;
    }
  }
  return answerStatus;
};

const updateColor = (letterContainer, answerStatus) => {
  letterContainer.classList.remove("unanswered");
  if (answerStatus === WORD_ANSWER.CORRECT) {
    letterContainer.classList.add("correct");
  } else {
    letterContainer.classList.add("incorrect");
  }
};

const updateAnswer = (donut, question, answerStatus) => {
  const letterContainer = document.getElementById(donut[question].letter);
  if (answerStatus !== WORD_ANSWER.UNANSWERD) {
    donut[question].status = answerStatus;
    updateColor(letterContainer, answerStatus);
  }
};

const processAnswer = () => {
  const playerAnswer = getPlayerAnswer();
  const answerStatus = checkAnswer(playerAnswer, donut[questionNumber].answer);
  updateAnswer(donut, questionNumber, answerStatus);
  return answerStatus;
};

const updateDonuts = (donut, answeredDonut) => {
  donut.forEach((word) => {
    if (word.status !== WORD_ANSWER.UNANSWERD) {
      answeredDonut.push(word);
    }
  });

  return donut.filter((e) => e.status === WORD_ANSWER.UNANSWERD);
};

const finishRound = () => {
  donut = updateDonuts(donut, answeredDonut);
  questionNumber = 0;
};

const continuePlaying = (answerStatus) => {
  return answerStatus === WORD_ANSWER.END ||
    answeredDonut.length === TOTAL_WORDS
    ? endPasapalabra(getPlayerName(), answeredDonut)
    : nextQuestion();
};

const getAnswers = (answeredDonut, answerType) => {
  return answeredDonut.reduce(function (n, word) {
    return n + (word.status === answerType);
  }, 0);
};

const getPlayerResults = (answeredDonut) => {
  const correctAnswers = getAnswers(answeredDonut, WORD_ANSWER.CORRECT);
  const incorrectAnswers = getAnswers(answeredDonut, WORD_ANSWER.INCORRECT);

  return { correct: correctAnswers, incorrect: incorrectAnswers };
};

const showPlayerResults = (playerResults) => {
  document.getElementById(
    "current-player-result"
  ).innerHTML = `Tus resultados son: 
  ACIERTOS: ${playerResults.correct} FALLOS: ${playerResults.incorrect}`;
  flex(".player-results");
};

const createPlayerObj = (playerName, playerResults) => {
  return {
    name: playerName,
    results: playerResults,
  };
};

const addPlayerToRanking = (playerName, playerResults) => {
  if (playerResults.correct + playerResults.incorrect === TOTAL_WORDS) {
    ranking.push(createPlayerObj(playerName, playerResults));
  }
};

const sortRanking = () =>
  ranking.sort((a, b) => b.results.correct - a.results.correct);

const clearTableRanking = () => {
  const table = document.querySelector("table");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
};

const createTd = (row, value) => {
  const td = row.insertCell();
  td.appendChild(document.createTextNode(value));
};

const createTableRanking = () => {
  const rankingTable = document.getElementById("ranking-table");
  if (ranking.length < 1) {
    const row = rankingTable.insertRow();
    createTd(row, "NO HAY JUGADORES EN EL RANKING");
  } else {
    ranking.forEach((player) => {
      const playerRow = rankingTable.insertRow();
      createTd(playerRow, player.name);
      createTd(playerRow, player.results.correct);
      createTd(playerRow, player.results.incorrect);
    });
  }
};

const showRanking = () => {
  hide(".donut");
  hide(".player-space");
  hide(".timer");
  hide(".player-results");
  show(".ranking");
  show(".end-game-buttons");
};

const updateRanking = () => {
  sortRanking();
  clearTableRanking();
  createTableRanking();
  showRanking();
  document.getElementById("replay").addEventListener("click", replay);
  document.getElementById("back-to-menu").addEventListener("click", mainMenu);
};

const endPasapalabra = (playerName, answeredDonut) => {
  const playerResults = getPlayerResults(answeredDonut);
  showPlayerResults(playerResults);
  addPlayerToRanking(playerName, playerResults);
  document
    .getElementById("show-ranking")
    .addEventListener("click", updateRanking);
};

const nextQuestion = () => {
  showQuestion();
  document.getElementById("answer").value = "";
};

const playPasapalabra = () => {
  const answerStatus = processAnswer();
  questionNumber++;
  if (questionNumber === donut.length || answerStatus === WORD_ANSWER.END) {
    finishRound();
  }
  continuePlaying(answerStatus);
};

const skipWord = () => {
  questionNumber++;
  return questionNumber === donut.length ? finishRound() : nextQuestion();
};

const endGame = () => {
  clearInterval(timer);
  finishRound();
  continuePlaying(WORD_ANSWER.END);
};

const replay = () => {
  reset();
  initGame();
};

document.addEventListener("DOMContentLoaded", loadMainMenu);
