var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Economics/US%20Gas%20Prices.csv"
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
function getPrice(City, Month, Year){
//  document.getElementById("output").innerHTML = "";
 var matchingPrices = [];
 var chosenList;

if ("Boston" == City){
    chosenList = Boston;}  
else if ("Chicago" == City){
    chosenList = Chicago;}
else if ("Cleveland" == City){
    chosenList = Cleveland;}
else if ("Denver" == City){
        chosenList = Denver;}
else if ("Houston" == City){
    chosenList = Houston;}
else if ("Los Angeles" == City){
    chosenList = LosAngeles;}
else if ("Miami" == City){
    chosenList = Miami;}
else if ("NYC" == City){
    chosenList = NYC;}
else if ("San Francisco" == City){
    chosenList = SanFrancisco;}
else if ("Seattle" == City){
    chosenList = Seattle;}


    for (var i = 0; i < date.length; i++){
        if(date[i].includes(Year) && (Month)){
            matchingPrices.push(parseFloat(chosenList[i]));
        }
    }

    console.log(matchingPrices);
var total = 0;
 for (var i = 0; i < matchingPrices.length; i++){
//
 }
   

document.getElementById("output").innerHTML = total/matchingPrices.length;

}

//ticketText = "<b>day:</b>" + dayInput + "<br><b>age:</b>" + ageInput + "<br><b>price:</b> $" + price;
//document.getElementById()
