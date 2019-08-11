$(document).ready(function () {
    //variables
    var magicNumber;
    var totalScore = 0;
    var crystalValue = [];
    var wins = 0;
    var losses = 0;
    
    //number to guess 19-12
    //Math.floor(Math.random()* (120 - 19)+1)+19;
    
    magicNumber = Math.floor(Math.random() * (101 + 19));
    $("#magicNum").text(magicNumber);

    // crystal array b/w 1-12
    var crystalValue = [];
    for (var i = 0; i < 4; i++) {
        crystalValue.push(Math.floor(Math.random() * 13) + 1);
    }
    console.log(crystalValue)

    //crystal integer assignments and dynamic images
    var crystalOne = $("<img>");
    crystalOne.addClass("crystal-image");
    crystalOne.attr("src", "assets/images/gem-transparent-tumblr.png");
    crystalOne.attr("data-crystal-val", crystalValue[0]);
    $("#crystals").append(crystalOne);
    console.log(crystalValue)

    var crystalTwo = $("<img>");
    crystalTwo.addClass("crystal-image");
    crystalTwo.attr("src", "assets/images/transparent-mineral-5.png");
    crystalTwo.attr("data-crystal-val", crystalValue[1])
    $("#crystals").append(crystalTwo);

    var crystalThree = $("<img>");
    crystalThree.addClass("crystal-image");
    crystalThree.attr("src", "assets/images/gem-transparent-tumblr-1.png");
    crystalThree.attr("data-crystal-val", crystalValue[2])
    $("#crystals").append(crystalThree);

    var crystalFour = $("<img>");
    crystalFour.addClass("crystal-image");
    crystalFour.attr("src", "assets/images/drawing-gemstones-mineral-4.png");
    crystalFour.attr("data-crystal-val", crystalValue[3]);
    $("#crystals").append(crystalFour);

 
    //on click
    $(".crystal-image").on("click", function () {
      
        var crystalValue = ($(this).attr("data-crystal-val"));
        crystalValue = parseInt(crystalValue);
      
        

        totalScore += crystalValue;
        $(".totalScore").text(totalScore);
     
        if (totalScore === magicNumber) {
            wins++;
            $("#wins").text(wins);
            alert("you win");
            reset();
        }
      
        else if (totalScore > magicNumber) {
            losses++;
            $("#losses").text(losses);
            alert("you lose");
            reset();
        }
    
    })
    function reset() {
        totalScore = 0;
        magicNumber = Math.floor(Math.random() * (101 + 19)-1);
        var crystalValue = [];
        for (var i = 0; i < 4; i++) {
        crystalValue.push(Math.floor(Math.random() * 13) + 1)-1;
    }
    $('.totalScore').text(totalScore);
    $("#magicNum").text(magicNumber);
    console.log(crystalValue)
    }
    
});

