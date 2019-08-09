$(document).ready(function() {

var magicNumber;

magicNumber= Math.floor(Math.random()* (120 - 19)) + 19;

$("#magicNum").text(magicNumber);
/////////////////////////////////////


var value= [];
for (var i = 0; i < 4; i++) {
value.push(Math.floor(Math.random() * 13)+1);
}
var str = "";
for (var i = 0; i < 5; i++)
{
  str += "," + value[i];
}


console.log(value)


}


 


)

