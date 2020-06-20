let playerDeck = document.getElementsByClassName("pc-card");
let playerAvailableCards = document.getElementsByClassName("player-cards");
let playerPlayedCards = document.getElementsByClassName("player-cards-revealed");
let playerCounterScore = document.querySelector(".player-counter");


//----------- GAME FLOW --------
let computerScore = 0;
let userScore = 0;

// while(computerScore < 101 || userScore < 101)
// {
    
    let turn = "userTurn";
    if(turn === "userTurn"){
        //user actions here
        let deckLetters = shuffleCards();
        DisplayCardsInHand(deckLetters);
        
        turn = "computerTurn";

    } else {
        //Computer Actions here
        turn = "UserTurn";
    }
// }
//----------- END GAME FLOW ----------

//------- FUNCTIONS ---------

// function for getting random letters from the array letters


function shuffleCards() {
    let deckLetters = []
    for (let i=0; i<(playerAvailableCards.length); i++) {
        deckLetters.push(lettersArray[Math.floor(Math.random()*lettersArray.length)])
    }
    return deckLetters;
}

function DisplayCardsInHand(deckLetters)
{
    
    let scoreCounter = 0;
    for (let i = 0; i < deckLetters.length; i++) 
    {
        playerAvailableCards[i].innerHTML = `<img class="img-avatar" src=${deckLetters[i].img} alt="cannot load image" height="130px">`;
        scoreCounter += deckLetters[i].number; 
    }
    playerCounterScore.innerHTML = scoreCounter;
}


//Push cards from one div to another is next