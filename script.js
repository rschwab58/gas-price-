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
// This function is calculating the average price for each city, month, and year. 
function getPrice(City, Month, Year){
    console.log(City)
    console.log(Month)
    console.log(Year)

    if(City == "City" || Month == "Month"){
        document.getElementById("output").innerHTML = "Please enter all information.";
        return;
    }
//  document.getElementById("output").innerHTML = "";
 var matchingPrices = [];
 var chosenList;
// These if statements are going and finding the certain city and giving it a chosenlist
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

//This loop is finding the year and month that was put in and finding those price numbers that correspond with the information
    for (var i = 0; i < date.length; i++){
        if(date[i].includes(Year) && (date[i].substring(0,3) == Month || date[i].substring(0,2) == Month)){
            console.log(date[i]);
            matchingPrices.push(parseFloat(chosenList[i]));
        }
    }

    console.log(matchingPrices);
var total = 0;
 for (var i = 0; i < matchingPrices.length; i++){
    total += matchingPrices[i];
 }
   

//This says that if that month has no prices for that year then it outputs "No Information For That Month"
if (total == 0){
    document.getElementById("output").innerHTML = "No Information For That Month"
}
else {
    document.getElementById("output").innerHTML = total/matchingPrices.length;
}


}


