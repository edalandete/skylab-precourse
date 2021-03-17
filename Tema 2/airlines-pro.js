const MAX_FLIGHTS = 15;

const ROLES = {
  ROLE_ADMIN : "ADMIN",
  ROLE_USER : "USER"
} 

const ADMIN_OPERATIONS = {
	CREATE_FLIGHT : "0",
  DELETE_FLIGHT : "1",
  END_PROGRAM : "END"
}

const USER_OPERATIONS = {
  SEARCH_FLIGHT : "0",
  END_PROGRAM : "END"
}

const SEARCH_OPTIONS = {
  HIGH : "A",
  LOW : "B",
  EQUAL : "I"
}

let flights = [

  { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
  { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
  { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
  { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
  { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
  { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
  { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
  { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
  { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
  { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
  { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } 
];

function airlines() {
 let userName = prompt("Please, enter your name: ");
 console.log(`Bienvenido ${userName}`);

 let averagePrice = calculateAveragePrice();
 let scaleCount = countScaleFlights();
 let lastFlights = getLastFlights();

 showFlights(flights);
 console.log(`El precio medio de los vuelos es de: ${averagePrice}`);
 console.log(`El numero de vuelos que hacen escala es de: ${scaleCount}`);
 showLastFlightsDestiny(lastFlights);

 let userRole = getUserRole();
 console.log(`${userName} tiene el rol de ${userRole}`);

 executeOperations(userRole);
}

function showFlights(flightsToShow) {
  console.log(`--- MOSTRANDO LOS VUELOS DISPONINBLES ---`);
  for (i = 0; i < flightsToShow.length; i++) {
    showFlight(flightsToShow[i]);
   }
}

function showFlight(flight) {
  console.log(`El vuelo ${flight.id} con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost} y 
    ${(flight.scale) ? "realiza escalas" : "no realiza ninguna escala"}.`);
}

function calculateAveragePrice(){
  let price = 0;
  for (i = 0; i < flights.length; i++) {
    price += flights[i].cost;
  }

  return (price / flights.length).toFixed(2);
}

function countScaleFlights() {
  let scaleCount = 0;

  for (i = 0; i < flights.length; i++) {
    (flights[i].scale) ? scaleCount++ : "";
  }

  return scaleCount;
}

function getLastFlights() {
   return flights.slice(-5);
}

function showLastFlightsDestiny(lastFlights) {
  console.log("Los ultimos destinos del dia son: ");
  for (i = 0; i < lastFlights.length; i++) {
    console.log(`El vuelo numero ${lastFlights[i].id} con destino ${lastFlights[i].to}`);
   }
}

function getUserRole() {
  let userRole;
  do {
    userRole = prompt("Introduce tu rol ADMIN/USER: ");
  }while(!validUserRole(userRole));

  return userRole.toUpperCase();
}

function validUserRole(userRole) {
  if(userRole === null || (userRole.toUpperCase() !== ROLES.ROLE_ADMIN && userRole.toUpperCase() !== ROLES.ROLE_USER)) {
    alert("ROL incorrecto, vuelva a introducirlo.");
    return false;
  }else {
    return true;
  }
}

function executeOperations(userRole) {
  switch (userRole) {
    case ROLES.ROLE_ADMIN :
      executeAdminOperations();
      break;
     case ROLES.ROLE_USER : 
       executeUserOperations();
       break;
     default : 
       console.log(`${userRole} no definido.`);
  }
}

function executeAdminOperations() {
  let operationCode;
  do {
    operationCode = getOperationCode(ROLES.ROLE_ADMIN);
    switch(operationCode) {
      case ADMIN_OPERATIONS.CREATE_FLIGHT :
        createFlight();
        console.log(`Ha sido creado correctamente`);
        break;
      case ADMIN_OPERATIONS.DELETE_FLIGHT :
        deleteFlight();
        showFlights(flights);
        break;
      case ADMIN_OPERATIONS.END_PROGRAM :
        console.log("Finalizando programa, gracias.");
        break;
      default :
        console.log("La operacion indicada no existe");
    }
  }while(operationCode.toUpperCase() !== ADMIN_OPERATIONS.END_PROGRAM); 
}

function executeUserOperations() {
  let operationCode;
  do {
    operationCode = getOperationCode(ROLES.ROLE_USER);
    switch(operationCode) {
      case USER_OPERATIONS.SEARCH_FLIGHT :
        let price = getPriceFromUser();
        let flightsFound = searchFlightsByPrice(price);
        showFlights(flightsFound);
        console.log(`Gracias por su compra, vuelva pronto.`);
        break;
      case ADMIN_OPERATIONS.END_PROGRAM :
        console.log("Finalizando programa, gracias.");
        break;
      default :
        console.log("La operacion indicada no existe");
    }
  }while(operationCode.toUpperCase() !== ADMIN_OPERATIONS.END_PROGRAM); 
  
}

function getOperationCode(userRole) {
  let operationCode;
  if(userRole === ROLES.ROLE_ADMIN) {
    do {
      operationCode = prompt(`Las operaciones disponibles como admin son:
                        Pulse 0 para crear vuelos
                        Pulse 1 para eliminar vuelos
                        Escriba END para finalizar el programa`
                      );
    }while(!validOperationCode(userRole, operationCode));
  }else if (userRole === ROLES.ROLE_USER){
    do {
      operationCode = prompt(`Las operaciones disponibles como user son:
                        Pulse 0 para buscar vuelos
                        Escriba END para finalizar el programa`
                      );
    }while(!validOperationCode(userRole, operationCode));
  }

  return operationCode.toUpperCase();  
}

function validOperationCode(userRole, operationCode)  {
  let isValidOperationCode = false;
  if(operationCode !== null) {
   isValidOperationCode = checkOperationCodeByUserRole(userRole, operationCode);
  }
  if(!isValidOperationCode) {
    alert("No existe la operacion indicada, introduzca una correcta.");
  }
  return isValidOperationCode;
}

function checkOperationCodeByUserRole(userRole, operationCode) {
  let isValidOperationCode = false;
  if (userRole === ROLES.ROLE_ADMIN) {
    isValidOperationCode = Object.values(ADMIN_OPERATIONS).includes(operationCode.toUpperCase());
  }else if (userRole === ROLES.ROLE_USER) {
    isValidOperationCode = Object.values(USER_OPERATIONS).includes(operationCode.toUpperCase());
  }
  return isValidOperationCode;
}

function createFlight() {
  if(isMaxFlight()) {
    alert(`Ya tienes ${MAX_FLIGHTS} vuelos. No puedes cear otro vuelo.`);
  }else {
    let newFlight = getFlightFromAdmin();
    flights.push(newFlight);
    console.log(`Mostrando los datos del nuevo vuelo introducido:`);
    showFlight(newFlight);
  }
}

function isMaxFlight() {
  return flights.length >= MAX_FLIGHTS;
}

function getFlightFromAdmin() {
  //TODO: validar la información introducida por el usuario

  let flight = {};
  
  flight.id = generateId();
  flight.to = prompt("Introduzca el destino del vuelo");
  flight.from = prompt("Introduzca el origen del vuelo");
  flight.cost = getFlightCost();
  flight.scale = flightHasScale();

  return flight;
}

function generateId() {
  let lastFlightId = getLastFlightId();
  return lastFlightId+1;
}

function getLastFlightId() {
  let cloneFlights = [...flights];
  cloneFlights.sort(function (a, b) {
  return b.id - a.id;
  });

  return cloneFlights[0].id;
}

function getFlightCost() {
  let flightPrice = 0;
  while (flightPrice <= 0 || isNaN(flightPrice)) {
    flightPrice = prompt("Introduzca el precio del vuelo");
  }
  
  return flightPrice;
}

function flightHasScale() {
  let scale = -1;
  while(scale !== 'S' && scale !== 'N') {
    scale = prompt("El vuelo tiene escalas S/N");
  }

  return (scale === 'S') ? true : false; 
}

function deleteFlight() {
  showFlights(flights);
  let flightId = prompt("Introduzca el ID del vuelo que quiere eliminar");
  for (i = 0; i < flights.length; i++) {
    if (flights[i].id == flightId) {
      showFlight(flights[i]);
      flights.splice(i, 1);
      return console.log(`Ha sido eliminado correctamente`);
    }
  }

  console.log(`El vuelo introducido no existe`);
}

function getPriceFromUser() {
  let price = 0;
  do {
    price = prompt("Introduce el precio por el que quieres buscar");
    price = parseInt(price);
  }while (typeof price !== 'number');
  return price;
}

function searchFlightsByPrice(price) {
  let searchOption = getSearchOptionFromUser();
  let flights = searchFlights(price, searchOption);
  return flights;
}

function searchFlights(price, searchOption) {
  let flightsFound = [];
  switch(searchOption) {
    case SEARCH_OPTIONS.HIGH :
      flightsFound = getFlightsHigherThanPrice(price);
      break;
    case SEARCH_OPTIONS.LOW :
      flightsFound = getFlightsLowerThanPrice(price);
      break;
      case SEARCH_OPTIONS.EQUAL :
        flightsFound = getFlightsWithSamePrice(price);
        break;
      default:
        console.log(`La opcion de busqueda deseada no se encuentra`);
  }
  return flightsFound;
}

function getSearchOptionFromUser() {
  do {
    searchOption = prompt(`Que tipo de busqueda quieres realizar: 
                          Por precio mayor: [${SEARCH_OPTIONS.HIGH}]
                          Por precio menor: [${SEARCH_OPTIONS.LOW}]
                          Por precio igual: [${SEARCH_OPTIONS.EQUAL}]`);
  }while(!validSearchOption(searchOption))

  return searchOption.toUpperCase();
}

function validSearchOption(searchOption)  {
  let isValidSearchOption;
  
  isValidSearchOption = Object.values(SEARCH_OPTIONS).includes(searchOption.toUpperCase());

  if(!isValidSearchOption) {
    alert("No existe la opcion de busqueda, introduzca una correcta.");
  }

  return isValidSearchOption;
}

function getFlightsHigherThanPrice(price) {
  return flights.filter(x => x.cost > price);
}

function getFlightsLowerThanPrice(price) {
  return flights.filter(x => x.cost < price);
}

function getFlightsWithSamePrice(price) {
  return flights.filter(x => x.cost === price);
}