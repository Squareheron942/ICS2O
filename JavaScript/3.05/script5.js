const numTries = 5;
var scoreHist = [];
var color = "grey";
var numPlays = 1;
  

function play() {
  var score = 0;
  var lowGuess = 1;
  var highGuess = 10;
  var num = Math.floor(Math.random() * 10 + 1);
  var guess = prompt("Guess a number from 1 to 10!");
  aLoop:
  for (var i = 1; i + 1 <= numTries; i++) {
    if (isNaN(guess)) {
      alert("Invalid Answer");
    } else if (guess == num) {
      score = 100 - Math.round(Math.log10(i) * 100);
      alert("You Win! Score: " + score);
      scoreHist.push(score);
      break aLoop;
    } else if (guess > num) {
      alert("Too high!");
      highGuess = guess;
      guess = prompt("Guess a number from " + lowGuess +" to " + highGuess + "! Tries remaining: " + Math.round(numTries - i));
    } else if (guess < num) {
      alert("Too Low!");
      lowGuess = guess;
      guess = prompt("Guess a number from " + lowGuess +" to " + highGuess + "! Tries remaining: " + Math.round(numTries - i));
    }
  }
  
  if (i > numTries) {
    alert("Out of Tries! You lose!");
    score = 0;
  }
  

  if (i == 1) {
    color = "lime";
  } else if (i == 2) {
    color = "yellow";
  } else if (i == 3) {
    color = "gold";
  } else if (i == 4) {
    color = "orange";
  } else if (i == 5) {
    color = "red";
  } else if (i == 6) {
    color = "black";
  } else {
    color = "grey";
  }
  
  document.getElementById("scoreSpan").innerHTML = score;
  document.getElementById("hist").innerHTML += "<table><tr><td><hr id = 'newHr' align = 'left'></td><td> &nbsp;&nbsp;" + score + "</td></tr></table><br>";
  document.getElementById("newHr").style.width = (score * 2) + "px";
  document.getElementById("newHr").style.backgroundColor = color;
  document.getElementById("newHr").setAttribute("id", "oldHr");
  document.getElementById("numPlays").innerText = " " + numPlays;

  numPlays++;

  console.log(numTries);
  console.log(num);
  console.log(score);
  console.log(scoreHist);
  console.log(guess);
  console.log(100 - Math.round(Math.log10(6) * 100));
}