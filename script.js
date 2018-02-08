$(document).ready(function() {

// variables
var allCards = $(".card");
var cardDeck = $(".cardContainer");
var cardArray = [...allCards];
var startButton = $("#startButton");
var resetButton = $("#resetButton")
var counter = 0;
var openCards = $(".open");
var compareCards= [];
var clicked;

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
  allCards.removeClass("noClick");
  playStartSound();
})



resetButton.click(function(){
  allCards.css("visibility","visible");
  allCards.removeClass("flipped");
  cardShuffle();
  cardArray.forEach(function(card){
    cardDeck.append(card);
  })
})

 //on click flip card over to reveal image
allCards.click(function(){
  counter++;
  clicked = $(this);
  clicked.toggleClass("flipped");
  // $(this).toggleClass("open");
  checkCards();
})//card click

function checkCards(){
  compareCards.push(clicked);
  clicked.addClass("noClick");
  console.log(compareCards);
  if(compareCards.length === 2){
    if(compareCards[0].attr("data-type") === compareCards[1].attr("data-type")){
      allCards.addClass("noClick");
      setTimeout(function(){
        compareCards[0].css("visibility","hidden");
        compareCards[1].css("visibility","hidden");
        console.log("same");
        console.log(compareCards);
        allCards.removeClass("noClick");
        compareCards =[];
      }, 3000);
    } else{
      console.log("not the same");
      console.log(compareCards);
      allCards.removeClass("noClick");
      compareCards =[];
      allCards.addClass("noClick");
      setTimeout(function(){
        allCards.removeClass("flipped");
        allCards.removeClass("noClick");
      },3000);
      };//else

  };
};

function playStartSound() {
 var audio = new Audio("audio/welcome.mp3");
 audio.play();
}
function playFlipSound() {

}




  //if two images match, remove both cards if not flip back over

})
