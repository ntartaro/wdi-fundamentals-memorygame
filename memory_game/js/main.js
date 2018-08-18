console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
}

function flipcard(cardId) {

 if (cardsInPlay.length === 2) {
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
	} 

	else {
		alert("Sorry, try again.")
	}

 }
console.log("User flipped "+ cards[cardId])
cardsInPlay.push(cards[cardId])
checkForMatch()
};

flipcard(0);
flipcard(2);