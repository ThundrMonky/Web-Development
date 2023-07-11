"use strict mode";
// Voter number 1 is currently voting
// for(let voter = 1; voter <= 50; voter++){
//     console.log(`Voter number ${voter} is voting`)
// }

/*
1. Store this array of arrays into a variable called 'listOfNeighbours' [['Canada', 
'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire arrays. 
Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if 
it's too difficult for you! But you can still try to figure this out anyway 😉
*/

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

// for(i = 0; i < listOfNeighbours.length; i++){
//     for(x = 0; x < listOfNeighbours[i].length; x++){
//         console.log(listOfNeighbours[i][x]);
//     }
// }

// let dice = Math.trunc(Math.random() *6) + 1;
// while(dice !== 6){
//     console.log(dice);
//     dice = Math.trunc(Math.random() *6) + 1;
//     if(dice===6) console.log("Success!");
// }

function calcTip(billValue) {
  if (billValue > 50 && billValue < 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

// console.log(bills, tips, totals);

function calcAverage(arr) {
  let sumArray = 0;
  for (i = 0; i < arr.length; i++) {
    sumArray += arr[i];
  }
  return sumArray / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));

const x = "23";

console.log("");
