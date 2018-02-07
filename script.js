$(document).ready(function() {


var card = $(".card");
var cardDeck = $(".cardContainer");
var cardArray = [...card];

function cardShuffle(){
var input = cardArray;

for (i = input.length -1; i >=0; i--) {

  var randomIndex = Math.floor(Math.random() * (i+1));
  var itemAtIndex = input[randomIndex];

  input[randomIndex] = input[i];
  input[i] = itemAtIndex;
}
console.log(input);
return input;
}

cardShuffle();
console.log(cardArray);

cardArray.forEach(function(card){
  cardDeck.append(card);
  console.log("s");
})

  //randomly shuffle cards



  //on click flip card over to reveal image

  //if two images match, remove both cards if not flip back over

})
