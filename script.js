var date = getColumn(url, 1);
var usAverage = getColumn(url, 2);
var Boston = getColumn(url, 3);
var Chicago = getColumn(url, 4);
var Cleveland = getColumn(url, 5);
var Denver = getColumn(url, 6);
var Houston = getColumn(url, 7);
var LosAngeles = getColumn(url, 8);
var Miami = getColumn(url, 9);
var NYC = getColumn(url, 10);
var SanFrancisco = getColumn(url, 11);
var Seattle = getColumn(url, 12);

function getPrice(City, usAverage, quote){
 document.getElementById("output").innerHTML = "";
 var matchingPrices = [];
 var chosenList;

if ("Boston" == City){
    chosenList = Boston;}  
else if ("Chicago" == City){
    chosenList = Chicago;}



 for (var i = 0; i < chosenList.length; i++){

 }
   

document.getElementById("output").innerHTML = "";

}



var uniqueDate = [];
for(var i = 0; i<.length; i++){
    if(uniqueDate.includes(date[i])){
        uniqueDate.push(date[i])
    }
}
console.log(uniqueDate)

//ticketText = "<b>day:</b>" + dayInput + "<br><b>age:</b>" + ageInput + "<br><b>price:</b> $" + price;
//document.getElementById()