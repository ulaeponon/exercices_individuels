 //let askedNumber = prompt("Joueur1: Saisissez un nombre entre 0 et 50 ")
// // console.log (typeof askedNumber);
// let userNumber = Number(askedNumber);
//console.log (typeof givenNumber)
//console.log (typeof askedNumber);

// function didIWin(givenNumber) {
//     if (givenNumber===22) { alert ("Bravo !")
//          }
//         else if (givenNumber<22) { alert("Donne un nombre plus grand")
        
//        } else { alert("Donne un nombre plus petit")
        
//        }
//     };
// didIWin(userNumber)

 /*function guessedNumber() {
    let playerNumber;
    do {
        let input = prompt("Joueur 1: Saisissez un nombre entre 0 et 50");
        playerNumber = Number(input);
        if (isNaN(playerNumber) || playerNumber < 0 || playerNumber > 50) {
            alert("Nombre invalide. Réessaye !");
        }
    } while (isNaN(playerNumber) || playerNumber < 0 || playerNumber > 50);
    return playerNumber;
}

function didIWin(targetNumber, playerGuess) {
    if (playerGuess === targetNumber) {
        alert("Bravo ! Vous avez deviné le nombre");
        return true;
    } else if (playerGuess < targetNumber) {
        alert("Plus grand");
        return false;
    } else {
        alert("Plus petit");
        return false;
    }
}

function gamePlay() {
    const targetNumber = guessedNumber();
    let youWon = false;
    while (!youWon) {
        let guess = prompt("Joueur 2: Devinez le nombre entre 0 et 50");
        let playerGuess = Number(guess);
        if (isNaN(playerGuess) || playerGuess < 0 || playerGuess > 50) {
            alert("Entrée invalide. Saisis un nombre entre 0 et 50.");
            continue;
        }
        youWon = didIWin(targetNumber, playerGuess);
    }
}

gamePlay();*/

const targetNumber = Math.floor(Math.random() * 51);
const input = document.getElementById("guessInput");
const button = document.getElementById("submitBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

let attempts = 0;

button.addEventListener("click", () => {
    const playerGuess = Number(input.value);
 if (isNaN(playerGuess) || playerGuess < 0 || playerGuess > 50) {
        alert("Veuillez entrer un nombre entre 0 et 50.");
        return;
    } 
    attempts++;
    attemptsDisplay.textContent = "Nombre de tentatives : " + attempts;
    if (playerGuess === targetNumber)
     { document.body.innerHTML = `
            <h1>Bravo ! Vous avez deviné le bon nombre ${targetNumber} en ${attempts} tentatives.</h1>`;
    } else if (playerGuess < targetNumber) {
        message.textContent = "C'est plus grand";
    } else {
        message.textContent = "C'est plus petit";
    }
    input.value = "";
    input.focus();
});


   