var numCorrect = 0;
var numQ = 0;
for (var i = 1; i <= 5; i++) {
  var num1 = Math.floor(1 + Math.random() * 15);
  var num2 = Math.floor(1 + Math.random() * 15);
  var operation = Math.floor(Math.random() * 5);
  var questionNum = 'q' + i;
  var ansNum = 'ans' + i;
  var correct = "correct";

  
  if (operation == 0) {
    var add = prompt("What is " + num1 + " + " + num2 + "?");
    if (add == num1 + num2) {
      numCorrect++;
      alert("Correct! " + numCorrect + "/" + i);
      document.getElementById(ansNum).insertAdjacentHTML('beforeend', " " + add + " <e id = 'correct'>Correct</e>");
      document.getElementById(questionNum).insertAdjacentHTML('beforeend', "What is " + num1 + " + " + num2 + "?");
    } else {
      alert("Incorrect! " + numCorrect + "/" + i);
      document.getElementById(ansNum).insertAdjacentHTML('beforeend', " " + add + " <e id = 'incorrect'>Incorrect</e>");
      document.getElementById(questionNum).insertAdjacentHTML('beforeend', "What is " + num1 + " + " + num2 + "?");
    }
  } else if (operation == 1) {
    var sub = prompt("What is " + num1 + " - " + num2 + "?");
    if (sub == num1 - num2) {
      numCorrect++;
      alert("Correct! " + numCorrect + "/" + i);
      document.getElementById(ansNum).insertAdjacentHTML('beforeend', " " + sub + " <e id = 'correct'>Correct</e>");
      document.getElementById(questionNum).insertAdjacentHTML('beforeend', "What is " + num1 + " - " + num2 + "?");
    } else {
      alert("Incorrect! " + numCorrect + "/" + i);
      document.getElementById(ansNum).insertAdjacentHTML('beforeend', " " + sub + " <e id = 'incorrect'>Incorrect</e>");
      document.getElementById(questionNum).insertAdjacentHTML('beforeend', "What is " + num1 + " - " + num2 + "?");
    }
  } else if (operation == 2) {
    var prod = prompt("What is " + num1 + " * " + num2 + "?");
    if (prod == num1 * num2) {
      numCorrect++;
      alert("Correct! " + numCorrect + "/" + i);
      document.getElementById(ansNum).insertAdjacentHTML('beforeend', " " + prod + " <e id = 'correct'>Correct</e>");
      document.getElementById(questionNum).insertAdjacentHTML('beforeend', "What is " + num1 + " * " + num2 + "?");
    } else {
      alert("Incorrect! " + numCorrect + "/" + i);
      document.getElementById(ansNum).insertAdjacentHTML('beforeend', " " + prod + " <e id = 'incorrect'>Incorrect</e>");
      document.getElementById(questionNum).insertAdjacentHTML('beforeend', "What is " + num1 + " * " + num2 + "?");
    }
  } else if (operation == 3) {
    var div = prompt("What is " + num1 + " / " + num2 + "?");
    if (div == num1 / num2) {
      numCorrect++;
      alert("Correct! " + numCorrect + "/" + i);
      document.getElementById(ansNum).insertAdjacentHTML('beforeend', " " + div + " <e id = 'correct'>Correct</e>");
      document.getElementById(questionNum).insertAdjacentHTML('beforeend', "What is " + num1 + " / " + num2 + "?");
    } else {
      alert("Incorrect! " + numCorrect + "/" + i);
      document.getElementById(ansNum).insertAdjacentHTML('beforeend', " " + div + " <e id = 'incorrect'>Incorrect</e>");
      document.getElementById(questionNum).insertAdjacentHTML('beforeend', " " + "What is " + num1 + " / " + num2 + "?");
    }
  } else {
    var mod = prompt("What is " + num1 + " % " + num2 + "?");
    if (mod == num1 % num2) {
      numCorrect++;
      alert("Correct! " + numCorrect + "/" + i);
      document.getElementById(ansNum).insertAdjacentHTML('beforeend', " " + mod + " <e id = 'correct'>Correct</e>");
      document.getElementById(questionNum).insertAdjacentHTML('beforeend', "What is " + num1 + " % " + num2 + "?");
    } else {
      alert("Incorrect! " + numCorrect + "/" + i);
      document.getElementById(ansNum).insertAdjacentHTML('beforeend'," " + mod + " <e id = 'incorrect'>Incorrect</e>");
      document.getElementById(questionNum).insertAdjacentHTML('beforeend', "What is " + num1 + " % " + num2 + "?");
    }
  }
  numQ = i;
}

document.getElementById('p').innerText = "Score: " + (numCorrect/numQ)*100 + "%";
