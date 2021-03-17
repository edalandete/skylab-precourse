
/*  
    BOLAS EN EL BOMBO: DE 1 A 40, AMBOS NÚMEROS INCLUIDOS
    (se puede cambiar desde la función generateRandomNum())

*/
let users = [
    {name: 'John Doe', points: 4500},
    {name: 'Mike Smith', points: 3500},
    {name: 'Joe Biden', points: 3000},
    {name: 'Nansi Pelosi', points: 2900},
    {name: 'Melania Trump', points: 2500},
]

function bingo(name){
    
    let bingoCard;
    let playerName = name || prompt('Introduce nombre del jugador:', 'John Doe');
    let turnNumber = 0;
    let cardCompleted = false;
    let prevBalls = [];
    let line1 = line2 = line3 = 0;
    let alreadyLine = false;
    let puntos = 12000;
    let puntosPenalizacion = 100;

    console.clear();
    displayRules();
    if(!confirm('¿Empezamos?')) return console.log(`\nHasta la próxima.`); 
    
    do {
        bingoCard = createCard();
        console.clear();
        displayCard();
    } while(!confirm(`¿Te gusta este cartón, ${playerName}?`));
    
    while(!cardCompleted){
        console.clear();
        if(!newTurn()) return console.log('Hasta la próxima.');
        // newTurn() devuelve 'false' cuando el usuario decide que no quiere más bolas. 

    } 
    
    // En este punto, el cartón está completado:
    let newPuntuacion = puntos - (turnNumber * puntosPenalizacion);
    console.log(`¡¡B I N G O!!\nCartón completado en ${turnNumber} turnos.\n\nTu puntuación: ${newPuntuacion} puntos.`);
    
    // Update tabla de puntuaciones
    if(newPuntuacion > users[4].points){
        users.splice(-1, 1, {name: playerName, points: newPuntuacion});
        users.sort((a,b) => b.points - a.points);
    }
    confirm(`¿Otra partida, ${playerName}?`) ? bingo(playerName) : console.log('Hasta la próxima.');
   
    function newTurn(){
        turnNumber++;
        let ball;
        /* DO-WHILE Loop para asegurar que la bola generada
        no haya salido antes.*/ 
        do {    
            ball = generateRandomNum(40);
        } while (prevBalls.includes(ball));
        prevBalls.push(ball);
        console.clear();

        console.log(`Bola: ${ball}`)

        updateCard(ball);

        if(line1 === 5 && !alreadyLine || line2 === 5 && !alreadyLine || line3 === 5 && !alreadyLine){
            alreadyLine = true;
            console.log('¡¡L I N E A!!')
        }

        displayCard();
        
        if(bingoCard.every(num => num.matched)){
            cardCompleted = true;
            return true;   
        } else {
            return (confirm('¿Continuamos con una nueva bola?')) ? true : false;
        } 
    }

    function generateRandomNum(upTo){
        return Math.round(Math.random() * (upTo - 1)) + 1;
    }

    function displayCard(){
        
        console.log('');
        console.log(`\t\t\–––––––––––––––––––––––––––––––––`);
        
        for(let i = 0; i < bingoCard.length; i += 5){
            let box = '';
            for(let j = i; j < i+5; j++){
                box += `\t\t${bingoCard[j].number}`; 
            }
            console.log(box);
        }
        console.log(`\t\t\–––––––––––––––––––––––––––––––––`);
        console.log('');
    }

    function createCard(){
        const bingoCard = [];
        const cardLimit = 15;
        const prevNums = [];
        let num;
        for (let i = 0; i < cardLimit; i++){
            /* DO-WHILE Loop para asegurar que el número generado
            solo se incluya si no ha salido antes.*/ 
            do{         
                num = generateRandomNum(40);
            } while(prevNums.includes(num));
            bingoCard.push({ number: num, matched: false });
            prevNums.push(num);
        }
        return bingoCard;
    }  

    function updateCard(ballNum){

        for(let i = 0; i < bingoCard.length; i++){
            if(bingoCard[i].number === ballNum){
                bingoCard[i].number = String.fromCodePoint(parseInt('274c', 16)); //'X' SYMBOL UNICODE(hex)  
                bingoCard[i].matched = true;

                if(i < 5) line1++;
                if(i > 4 && i < 10) line2++;
                if(i > 9) line3++;
            }
        }
    }
    function displayRules(){
        console.log('\t==================== SISTEMA DE PUNTUACIÓN ====================');
        console.log(`\tLA PARTIDA SE EMPIEZA CON UN CRÉDITO DE 12.000 PUNTOS.\n\tCADA TURNO CONSUMIDO SE PENALIZA CON  -100 PUNTOS.\n\n\t¡BUENA SUERTE!`);
        console.log('');
        console.log('');
        console.log('\t==================== RÁNKING DE PUNTUACIÓN ====================');
        console.log(`\t1. ${users[0].name}................................ ${users[0].points}.`);
        console.log(`\t2. ${users[1].name}................................ ${users[1].points}.`);
        console.log(`\t3. ${users[2].name}................................ ${users[2].points}.`);
        console.log(`\t4. ${users[3].name}................................ ${users[3].points}.`);
        console.log(`\t5. ${users[4].name}................................ ${users[4].points}.`);
    }
}
