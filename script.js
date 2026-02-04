let cardsWrapper = document.getElementById("cards_wrapper");
const btnJeu = document.getElementById("btnJeu")
const gameSet = ["❤️", "💕", "🙌", "😘", " 🤣", " 🤷‍♂️", "✌️", "😎", "🍟", "👨"];


document.addEventListener("DOMContentLoaded", loadCards)
btnJeu.addEventListener("click", loadCards)

 function createCard(nbreCarte, data) {
    cardsWrapper.textContent = " ";
    for (i = 0; i < nbreCarte; i++) {
        const cardContainer = cardsWrapper.appendChild(document.createElement("div"))
        const cardFront = cardContainer.appendChild(document.createElement("div"));
        const cardBack = cardContainer.appendChild(document.createElement("div"));
        cardFront.textContent = data[i]
        cardFront.classList.add("card", "card_front" )
        cardBack.classList.add("card", "hide", "card_back")
    }

}

function loadCards() { 
    //pour le moment il charge juste les back cards vides
    createCard(gameSet.length * 2,  shuffleCards())
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function shuffleCards() {
    const setToShuffle = [...gameSet, ...gameSet] 
    const shuffledSet = []
    const randomNumbers = []
  
    for (i = 0; i < setToShuffle.length; i++) {
       let random = getRandomInt(setToShuffle.length)
        while (randomNumbers.includes(random)) {
            random = getRandomInt(setToShuffle.length)
        }
        randomNumbers.push(random)
        shuffledSet[random] = setToShuffle[i]
    }

    return shuffledSet
}



// function play() {
//     btnJeu.addEventListener("click", shuffleCards)
// }





