const cardsWrapper = document.getElementById("cards_wrapper");
const btnJeu = document.getElementById("btnJeu")
const gameSet = ["❤️", "💕", "🙌", "😘", " 🤣", " 🤷‍♂️", "✌️", "😎", "🍟", "👨"];


document.addEventListener("DOMContentLoaded", loadCards())
btnJeu.addEventListener("click", shuffleCards)

function createCard(nbreCarte) {
    for (i = 0; i < nbreCarte; i++) {
        const cardContainer = cardsWrapper.appendChild(document.createElement("div"))
        const cardFront = cardContainer.appendChild(document.createElement("div"));
        const cardBack = cardContainer.appendChild(document.createElement("div"));
        cardFront.classList.add("card", "hide")
        cardBack.classList.add("card")
    }

}

function loadCards() { 
    //pour le moment il charge juste les back cards vides
    createCard(gameSet.length * 2)
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function shuffleCards() {
    const setToShuffle = []
    const shuffledSet = []
    const sortedNumbers = []
    gameSet.forEach(item => setToShuffle.push(item, item))
    for (i = 0; i < setToShuffle.length; i++) {
        let random = getRandomInt(setToShuffle.length)
        while (sortedNumbers.includes(random)) {
            random = getRandomInt(setToShuffle.length)
        }
        sortedNumbers.push(random)
        shuffledSet[random] = setToShuffle[i]
    }



    console.log(`"setToShuffle: >> " ${setToShuffle}`);
    console.log(`"sortedNumbers: >> " ${sortedNumbers}`);
    console.log(`"shuffleSet: >> " ${shuffledSet}`);

}



function play() {
    btnJeu.addEventListener("click", shuffleCards)
}





