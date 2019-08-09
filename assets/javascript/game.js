$(document).ready(function() {

var magicNumber;

magicNumber= Math.floor(Math.random()* (120 - 19)) + 19;

$("#magicNum").text(magicNumber);
/////////////////////////////////////

//4 ran integers
var crystalValue= [];
for (var i = 0; i < 4; i++) {
crystalValue.push(Math.floor(Math.random() * 13)+1);
}
console.log(crystalValue)

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

$(".crystal-image").on("click",function(){
    var crystalValue = ($(this).attr("data-crystal-val"));
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue)

})
});

