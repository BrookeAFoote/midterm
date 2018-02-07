$(document).ready(function() {

// variables
var card = $(".card");
var cardDeck = $(".cardContainer");
var cardArray = [...card];
var startButton = $("#startButton");
var counter = 0;
var openCards = $(".open");

//randomly shuffle cards
function cardShuffle(){
var input = cardArray;
for (i = input.length -1; i >=0; i--) {
  var randomIndex = Math.floor(Math.random() * (i+1));
  var itemAtIndex = input[randomIndex];
  input[randomIndex] = input[i];
  input[i] = itemAtIndex;
}
return input;
}

startButton.click(function(){
  cardShuffle();
  cardArray.forEach(function(card){
    cardDeck.append(card);
  })
})


 //on click flip card over to reveal image
card.click(function(){
  counter++;
  // console.log(counter);
  $(".top",this).toggle();
  $(".bottom",this).toggle();
  $(this).toggleClass("open");
  // console.log(openCards);
  checkCards();
})

function checkCards(){
  if(openCards.type("img")){
  consle.log("test");
}
}



  //if two images match, remove both cards if not flip back over

})
