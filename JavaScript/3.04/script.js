let money;
let moneyleft;
let nquart;
let ndime;
let nnickel;
let npennies;
if (confirm("Do you want me to calculate some money?") == true) {
  let money;
  money = prompt("How much money do you have (less than one dollar please)? Enter it in cents and I will calculate how much more you need to get a dollar.");
  moneyleft = Number(100 - money);
  nquart = Math.floor(moneyleft/25);
  ndime = Number(Math.floor((moneyleft % 25) / 10));
  nnickel = Number(Math.floor(((moneyleft % 25) % 10) / 5)); 
  npennies = Number(Math.floor(((moneyleft % 25) % 10) % 5)); 
  document.write("You have " + money + " cents. You need " + nquart + " quarters, " + ndime + " dimes, " + nnickel + " nickels, and " + npennies + " pennies to have 1 dollar.");
}