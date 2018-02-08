$(document).ready(function() {

// variables
var card = $(".card");
var cardDeck = $(".cardContainer");
var cardArray = [...card];
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
  card.removeClass("noClick");
})

resetButton.click(function(){
  location.reload();
  cardShuffle();
  cardArray.forEach(function(card){
    cardDeck.append(card);
  })
})

 //on click flip card over to reveal image
card.click(function(){
  counter++;
  clicked = $(this);
  // console.log(counter);
  $(".top",this).toggle();
  $(".bottom",this).toggle();
  $(this).toggleClass("open");
  // console.log(clicked);
  checkCards();
})//card click

function checkCards(){
compareCards.push(clicked);
clicked.addClass("noClick");
console.log(compareCards);
if(compareCards.length === 2){
  if(compareCards[0].attr("data-type") === compareCards[1].attr("data-type")){
      compareCards[0].css("visibility","hidden");
      compareCards[1].css("visibility","hidden");
      console.log("same");
      console.log(compareCards);
      card.removeClass("noClick");
      compareCards =[];
  } else{
    console.log("not the same");
    console.log(compareCards);
    card.removeClass("noClick");
    compareCards =[];
  }

}

};


// function checkCards(){
//   compareCards.push(clicked);
//   console.log(compareCards);
// if (compareCards.length === 2){
//   if (compareCards[0].attr("type") === compareCards[0].attr("type"){
//
    compareCards =[];
//     console.log(compareCards);
//   }
// }
//
// }//checkCards



  //if two images match, remove both cards if not flip back over

})
