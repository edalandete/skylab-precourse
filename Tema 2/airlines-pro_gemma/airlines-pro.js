let flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const user = "user";
const admin = "admin";
const maxVuelos = 15;

function airlines() {
  nameAndWelcoming();
  displayFlights();
  flightsWithScale();
  mediumCost();
  lastFlights();
  askRole();
}

function nameAndWelcoming() {
  let name = prompt("Hola, por favor introduzca su nombre");
  checkName(name);
}

function checkName(name) {
  if (!name || !name.match(/[a-z]/i)) {
    alert("Nombre no valido. Introduzca su nombre otra vez, por favor.");
    console.log("Nombre no valido. Introduzca su nombre otra vez, por favor.");
    nameAndWelcoming();
  } else {
    alert("Hola " + name + ", Bienvenid@ a SkylabAirlines.");
  }
}

function displayFlights() {
  console.log(
    "**************************************   SKYLAB AIRLINES   **********************************************"
  );
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === false) {
      console.log(
        `El vuelo con origen -> ${flights[i].from}, y destino -> ${flights[i].to} tiene un coste de ${flights[i].cost} $ y no realiza ninguna escala.`
      );
    } else {
      console.log(
        `El vuelo con origen -> ${flights[i].from}, y destino -> ${flights[i].to} tiene un coste de ${flights[i].cost} $ y si que realiza escala.`
      );
    }
  }
  console.log(
    "**************************************   SKYLAB AIRLINES   **********************************************"
  );
}

function mediumCost() {
  console.log(
    "****************************************   MEDIUM COST   ************************************************"
  );

  mediumCostCalculation();

  console.log(
    "****************************************   MEDIUM COST   ************************************************"
  );
}

function mediumCostCalculation() {
  let arrayPrice = 0;
  for (let i = 0; i < flights.length; i++) {
    arrayPrice += flights[i].cost;
  }

  let resultMediumCost = arrayPrice / flights.length;
  console.log("El coste medio de los vuelos es " + resultMediumCost.toFixed(3));
}

function flightsWithScale() {
  console.log(
    "******************************************   SCALES   ***************************************************"
  );
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) {
      console.log(
        `El vuelo con origen -> ${flights[i].from}, y destino -> ${flights[i].to} tiene un coste de ${flights[i].cost} $ y realizara escala.`
      );
    }
  }
  console.log(
    "******************************************   SCALES   ***************************************************"
  );
}

function lastFlights() {
  console.log(
    "***************************************   LAST FLIGHTS   ************************************************"
  );
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].id > 5 && flights[i].scale === true) {
      console.log(
        `El vuelo con origen -> ${flights[i].from}, y destino -> ${flights[i].to} tiene un coste de ${flights[i].cost} $ y si que realiza escala.`
      );
    } else if (flights[i].id > 5 && flights[i].scale === false) {
      console.log(
        `El vuelo con origen -> ${flights[i].from}, y destino -> ${flights[i].to} tiene un coste de ${flights[i].cost} $ y no realiza escala.`
      );
    }
  }
  console.log(
    "***************************************   LAST FLIGHTS   ************************************************"
  );
}

function askRole() {
  let role = prompt("Indica si eres USER o ADMIN:");
  checkRole(role);
}

function checkRole(role) {
  if (role === user || role === user.toUpperCase) {
    questionUser();
  } else if (role === admin || role === admin.toUpperCase) {
    isAdmin();
  } else {
    alert("Role no valido. Introduzca su nombre otra vez, por favor.");
    console.log("Nombre no valido. Introduzca su nombre otra vez, por favor.");
    askRole();
  }
}

function isAdmin() {
  let respuestaCrearVuelos = prompt("Desea crear un vuelo? y/n");
  checkRespuestaCrearVuelos(respuestaCrearVuelos);
}

function checkRespuestaCrearVuelos(respuestaCrearVuelos) {
  if (respuestaCrearVuelos === "y") {
    crearVuelos();
  } else if (respuestaCrearVuelos === "n") {
    let respuestaEliminarVuelos = prompt("Desea eliminar vuelos? y/n");
    checkRespuestaEliminarVuelos(respuestaEliminarVuelos);
  } else {
    alert("Responda y o n, por favor.");
    isAdmin();
  }
}

function checkRespuestaEliminarVuelos(respuestaEliminarVuelos) {
  if (respuestaEliminarVuelos === "y") {
    eliminarVuelos();
  } else if (respuestaEliminarVuelos === "n") {
    newDisplayFlights();
  } else {
    alert("Responda y o n, por favor.");
    isAdmin();
  }
}

function crearVuelos() {
  if (flights.length >= maxVuelos) {
    alert("Demasiados vuelos");
  } else {
    let destinoNewVuelo = prompt("Cual es el destino del nuevo vuelo?");
    checkAnswerAreLetters(destinoNewVuelo);
    let origenNewVuelo = prompt("Cual sera el origen del nuevo vuelo?");
    checkAnswerAreLetters(origenNewVuelo);
    let priceNewVuelo = getPriceFromAdmin();
    let escalaNewVuelo = prompt("Este vuelo realizara escala? y/n");
    checkAnswerAreLetters(escalaNewVuelo);

    let newInfoOfFlight = {
      to: destinoNewVuelo,
      from: origenNewVuelo,
      cost: priceNewVuelo,
      scale: escalaNewVuelo,
    };
    flights.push(newInfoOfFlight);
  }
  isAdmin();
}

function getPriceFromAdmin() {
  let isPriceCorrect = false;
  let priceNewVuelo = 0;
  while (!isPriceCorrect) {
    priceNewVuelo = prompt("Que precio tendra el vuelo?");
    isPriceCorrect = checkRespuestaPrice(priceNewVuelo);
  }

  return priceNewVuelo;
}

function checkAnswerAreLetters(answer) {
  if (!answer || !answer.match(/[a-z]/i)) {
    alert("Info no valida. Introduzca los datos otra vez, por favor.");
    console.log("Info no valida. Introduzca los datos otra vez, por favor.");
    crearVuelos();
  }
}

function checkRespuestaPrice(priceNewVuelo) {
  let isPriceCorrect = true;
  if (!priceNewVuelo || priceNewVuelo.match(/[a-z]/i)) {
    alert("Info no valida. Introduzca los datos otra vez, por favor.");
    console.log("Info no valida. Introduzca los datos otra vez, por favor.");
    isPriceCorrect = false;
  }

  return isPriceCorrect;
}

function newDisplayFlights() {
  console.log(
    "**************************************   NEW FLIGHTS   ************************************************"
  );
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === false || flights[i].scale === "n") {
      console.log(
        `El vuelo ${flights[i].id} con origen -> ${flights[i].from}, y destino -> ${flights[i].to} tiene un coste de ${flights[i].cost} $ y no realiza ninguna escala.`
      );
    } else {
      console.log(
        `El vuelo ${flights[i].id} con origen -> ${flights[i].from}, y destino -> ${flights[i].to} tiene un coste de ${flights[i].cost} $ y si que realiza escala.`
      );
    }
  }
  console.log(
    "**************************************   NEW FLIGHTS   ************************************************"
  );
}

function eliminarVuelos() {
  newDisplayFlights();
  let respuestaNumeroIdEliminar = prompt(
    "Actualmente hay " + flights.length + " vuelos. Cual desea eliminar?"
  );
  respuestaNumeroIdEliminar *= 1;
  flights.splice(respuestaNumeroIdEliminar, 1);
  newDisplayFlights();
}
function questionUser() {
  let questionUserPrice = prompt("Quiere buscar por precio? y/n");
  if (questionUserPrice === "y") {
    isUser();
  } else if (questionUserPrice === "n") {
    bye();
  } else {
    alert("Try again with please");
    questionUser();
  }
}
function isUser() {
  let searchPriceFrom = prompt("Introduce un precio");

  let searchCondition = prompt(
    "- Quieres ver los vuelos mas caros que " +
      searchPriceFrom +
      " $ -> PRESIONE 1 \n- Mas baratos que " +
      searchPriceFrom +
      " $ -> PRESIONE 2 \n- Igual a " +
      searchPriceFrom +
      " $ -> PRESIONE 3 ?"
  );

  if (searchCondition === "1") {
    priceGreaterThan(searchPriceFrom);
  } else if (searchCondition === "2") {
    priceLowerThan(searchPriceFrom);
  } else if (searchCondition === "3") {
    priceEqualThan(searchPriceFrom);
  } else {
    alert("Wrong number, try again please");
    isUser();
  }
}

function checkAnswerPriceUser(priceNewVuelo) {
  if (!priceNewVuelo || priceNewVuelo.match(/[a-z]/i)) {
    alert("Info no válida. Introduzca los datos otra vez, por favor.");
    console.log("Info no válida. Introduzca los datos otra vez, por favor.");
    isUser();
  }
}

function priceGreaterThan(searchPriceFrom) {
  let greaterThan = flights.filter((flights) => flights.cost > searchPriceFrom);

  console.log(
    "**************************************   GREATER THAN " +
      searchPriceFrom +
      " $ **********************************************"
  );

  for (let i = 0; i < greaterThan.length; i++) {
    if (greaterThan[i].scale === false || greaterThan[i].scale === "n") {
      console.log(
        `El vuelo con origen -> ${greaterThan[i].from}, y destino -> ${greaterThan[i].to} tiene un coste de ${greaterThan[i].cost} $ y no realiza ninguna escala.`
      );
    } else {
      console.log(
        `El vuelo con origen -> ${greaterThan[i].from}, y destino -> ${greaterThan[i].to} tiene un coste de ${greaterThan[i].cost} $ y si que realiza escala.`
      );
    }
  }
  console.log(
    "**************************************   GREATER THAN " +
      searchPriceFrom +
      " $ **********************************************"
  );

  console.log("Gracias por su compra, que tenga un buen dia! :)");
}

function priceLowerThan(searchPriceFrom) {
  let lowerThan = flights.filter((flights) => flights.cost < searchPriceFrom);
  console.log(
    "**************************************   LOWER THAN " +
      searchPriceFrom +
      " $ **********************************************"
  );
  for (let i = 0; i < lowerThan.length; i++) {
    if (lowerThan[i].scale === false || lowerThan[i].scale === "n") {
      console.log(
        `El vuelo con origen -> ${lowerThan[i].from}, y destino -> ${lowerThan[i].to} tiene un coste de ${lowerThan[i].cost} $ y no realiza ninguna escala.`
      );
    } else {
      console.log(
        `El vuelo con origen -> ${lowerThan[i].from}, y destino -> ${lowerThan[i].to} tiene un coste de ${lowerThan[i].cost} $ y si que realiza escala.`
      );
    }
  }
  console.log(
    "**************************************   LOWER THAN " +
      searchPriceFrom +
      " $ **********************************************"
  );
  console.log("Gracias por su compra, que tenga un buen dia! :)");
}

function priceEqualThan(searchPriceFrom) {
  let equalThan = flights.filter((flights) => flights.cost == searchPriceFrom);
  console.log(
    "**************************************   EQUAL THAN " +
      searchPriceFrom +
      " $ **********************************************"
  );
  for (let i = 0; i < equalThan.length; i++) {
    if (equalThan[i].scale === false || equalThan[i].scale === "n") {
      console.log(
        `El vuelo con origen -> ${equalThan[i].from}, y destino -> ${equalThan[i].to} tiene un coste de ${equalThan[i].cost} $ y no realiza ninguna escala.`
      );
    } else {
      console.log(
        `El vuelo con origen -> ${equalThan[i].from}, y destino -> ${equalThan[i].to} tiene un coste de ${equalThan[i].cost} $ y si que realiza escala.`
      );
    }
  }
  console.log(
    "**************************************   EQUAL THAN " +
      searchPriceFrom +
      " $ **********************************************"
  );
  console.log("Gracias por su compra, que tenga un buen dia! :)");
}

function bye() {
  console.log("Gracias por su compra, que tenga un buen dia! :)");
}
