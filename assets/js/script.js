//Variabili
const btn = document.querySelector('.btn');
const arrNumbers = [];

btn.addEventListener('click', play);





//* Funzioni


function play(){

    for (let i = 1; i <= 5; i++) {
        
        const randomNum = arrNumbers.push(uniqueRandomNumber(arrNumbers, 1,20));
    }
    console.log('array', arrNumbers);
    



}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function uniqueRandomNumber(arrayNumbers, min, max){
    let isValid = false;
    let numRandom;

    while (!isValid) {
        numRandom = getRandomNumber(min, max);
        

        if (!arrayNumbers.includes(numRandom)) {
            isValid = true;
        }
    }
    
    return numRandom;
}