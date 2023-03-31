//Variabili
const btnStart = document.querySelector('.btn');
const arrNumbers = [];
const numbersRow = document.querySelector('.numbersRow');
const btnGo = document.querySelector('.btn-go');
let userChoice = document.querySelector('#userChoice').value;
let simonSays = document.querySelector('h1');

btnStart.addEventListener('click', play);


//* Funzioni


function play(){


    // ciclo per creare 5 numeri random che verranno pushati in arrNumbers che è vuoto
    for (let i = 1; i <= 5; i++) {
        const randomNum = uniqueRandomNumber(arrNumbers, 1,20);
        arrNumbers.push(randomNum);
        const outputNum = document.createElement('h2');
        outputNum.innerHTML = randomNum;
        console.log(randomNum[uniqueRandomNumber(arrNumbers, 1, 20)]);
        numbersRow.append(outputNum);
    }
    
    // timing function per far sparire i numeri e il btnStart
    setTimeout(disappear, 2000);

    // timing function per far apparire input e btnGo
    setTimeout(appear, 2500);

    btnGo.addEventListener('click', userTurn);

    
    
    
    
}

function userTurn(){
    
    
    console.error(userChoice);
    let endGame = document.getElementById('endGame');
    console.log(userChoice, arrNumbers);
    for(let i = 1; i <= arrNumbers.length; i++) {
        // confronta il valore dell'elemento corrispondente dei due array
        if(arrNumbers[i] === userChoice[i]) {
          console.log("L'elemento " + i + " dei due array è uguale: " + arrNumbers[i]);
        } else {
          console.log("L'elemento " + i + " dei due array è diverso: " + arrNumbers[i] + " != " + userChoice[i]);
        }
      }
      
    return userChoice;
}




// generare numeri random
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// assicurarsi che il numero random sia unico
function uniqueRandomNumber(arrayNumbers, min, max){
    let isValid = false;    //flag
    let numRandom;

    while (!isValid) {
        numRandom = getRandomNumber(min, max);
        // se isValid non è false genera i numeri

        if (!arrayNumbers.includes(numRandom)) {
            isValid = true;
        }   // se arrayNumbers non include il numero random isValid è true e il ciclo termina
    }
    
    return numRandom;
}

function disappear(){
    btnStart.classList.add('d-none');
    numbersRow.classList.add('d-none');
    simonSays.innerHTML = '';
}

function appear(){
    const inputUser = document.querySelector('#userChoice');
    btnGo.classList.remove('d-none');
    inputUser.classList.remove('d-none');
    simonSays.innerHTML = '... and you?';
}