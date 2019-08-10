$(document).ready(function() {
//variables
var magicNumber;
var totalScore= 0;
var crystalValue=[];
var wins=0;
var losses= 0;

//number to guess 19-12
//Math.floor(Math.random()* (120 - 19)+1)+19;
magicNumber= Math.floor(Math.random()* (101 + 19));
$("#magicNum").text(magicNumber);




// crystal array b/w 1-12
var crystalValue= [];
for (var i = 0; i < 4; i++) {
crystalValue.push(Math.floor(Math.random() * 13)+1);
}
console.log(crystalValue)

//crystal integer assignments and dynamic images
var crystalOne= $("<img>");
crystalOne.addClass("crystal-image");
crystalOne.attr("src", "assets/images/gem-transparent-tumblr.png");
crystalOne.attr("data-crystal-val", crystalValue[0]);
$("#crystals").append(crystalOne);
console.log(crystalValue)

var crystalTwo=$("<img>");
crystalTwo.addClass("crystal-image");
crystalTwo.attr("src","assets/images/transparent-mineral-5.png");
crystalTwo.attr("data-crystal-val", crystalValue[1])
$("#crystals").append(crystalTwo);

var crystalThree=$("<img>");
crystalThree.addClass("crystal-image");
crystalThree.attr("src","assets/images/gem-transparent-tumblr-1.png");
crystalThree.attr("data-crystal-val", crystalValue[2])
$("#crystals").append(crystalThree);

var crystalFour=$("<img>");
crystalFour.addClass("crystal-image");
crystalFour.attr("src","assets/images/drawing-gemstones-mineral-4.png");
crystalFour.attr("data-crystal-val", crystalValue[3]);
$("#crystals").append(crystalFour);

//game score win
function gameWin(){
    $("#userWin").text("win");
    wins++;
    $("#wins").text(wins);
}
//game score lose
function gameLoss(){
    $("#userLoss").text("lose");
    losses++;
    $("#losses").text(losses);
    
}
//on click
$(".crystal-image").on("click",function(){
    var crystalValue = ($(this).attr("data-crystal-val"));
    crystalValue = parseInt(crystalValue);
    alert(crystalValue);

    
    totalScore += crystalValue

    alert("your score is " + totalScore);

    if (totalScore === magicNumber){
       console.log("win")
    }
    else if(totalScore >+ totalScore){
console.log("lose");
    }
})
});

