function mathQ() {
  var i = 1;
  var num1 = Math.floor(1 + Math.random() * 15);
  var num2 = Math.floor(1 + Math.random() * 15);
  var operation = Math.floor(Math.random() * 5);
  var questionNum = 'q' + i;
  var ansNum = 'ans' + i;
  var correct = "correct";
  var numCorrect = 0;

  
  if (operation == 0) {
    var add = prompt("What is " + num1 + " + " + num2 + "?");
    if (add == num1 + num2) {
      numCorrect++;
      alert("Correct! " + numCorrect + "/" + i);
      return  " " + add + " <e id = 'correct'>Correct</e>" + "What is " + num1 + " + " + num2 + "?";
      return  ;
    } else {
      alert("Incorrect! " + numCorrect + "/" + i);
      return  ` ${add} <e id = 'incorrect'>Incorrect</e> What is  ${num1} + ${num2} ?`;
    }
  } else if (operation == 1) {
    var sub = prompt("What is " + num1 + " - " + num2 + "?");
    if (sub == num1 - num2) {
      numCorrect++;
      alert("Correct! " + numCorrect + "/" + i);
      return  " " + sub + " <e id = 'correct'>Correct</e>"+"What is " + num1 + " - " + num2 + "?";
    } else {
      alert("Incorrect! " + numCorrect + "/" + i);
      return  " " + sub + " <e id = 'incorrect'>Incorrect</e>"+"What is " + num1 + " - " + num2 + "?";
    }
  } else if (operation == 2) {
    var prod = prompt("What is " + num1 + " * " + num2 + "?");
    if (prod == num1 * num2) {
      numCorrect++;
      alert("Correct! " + numCorrect + "/" + i);
      return  " " + prod + " <e id = 'correct'>Correct</e>"+"What is " + num1 + " * " + num2 + "?";
    } else {
      alert("Incorrect! " + numCorrect + "/" + i);
      return  " " + prod + " <e id = 'incorrect'>Incorrect</e>"+"What is " + num1 + " * " + num2 + "?";
    }
  } else if (operation == 3) {
    var div = prompt("What is " + num1 + " / " + num2 + "?");
    if (div == num1 / num2) {
      numCorrect++;
      alert("Correct! " + numCorrect + "/" + i);
      return  " " + div + " <e id = 'correct'>Correct</e>"+"What is " + num1 + " / " + num2 + "?";
    } else {
      alert("Incorrect! " + numCorrect + "/" + i);
      return  " " + div + " <e id = 'incorrect'>Incorrect</e>"+" " + "What is " + num1 + " / " + num2 + "?";
    }
  } else {
    var mod = prompt("What is " + num1 + " % " + num2 + "?");
    if (mod == num1 % num2) {
      numCorrect++;
      alert("Correct! " + numCorrect + "/" + i);
      return  +"What is " + num1 + " % " + num2 + "?"+" " + mod + " <e id = 'correct'>Correct</e>";
    } else {
      alert("Incorrect! " + numCorrect + "/" + i);
      return "What is " + num1 + " % " + num2 + "?"+" " + mod + " <e id = 'incorrect'>Incorrect</e>";
    }
  }
  numQ = i;

  return "Score: " + (numCorrect/numQ)*100 + "%";
}

document.write(mathQ());