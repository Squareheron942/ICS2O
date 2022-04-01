// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

var num1;
var num2;
var currentNum;
var _2nd = false;

var signChoice = "";
var canDecim = true;

function fn2() {
  var func1 = document.getElementsByClassName("func1");
  var func2 = document.getElementsByClassName("func2");
  if (_2nd) {
    for (var i=0; i<func1.length; i++) {
      func1[i].style.display = "block";
    }
    
    for (var i=0; i<func2.length; i++) {
      func2[i].style.display = "none";
    }
    
    _2nd = false;
  } else {
    for (var i=0; i<func1.length; i++) {
      func1[i].style.display = "none";
    }
    
    for (var i=0; i<func2.length; i++) {
      func2[i].style.display = "block";
    }
    _2nd = true;
    /*document.getElementById("fn2").style.bgcolor = "rgba(255, 255, 255, 0.4)";*/
  }
}


function erase() {
  document.getElementById("screen").value ="";
  num1 = '';
  num2 = '';
}
function addDecim() {
  if (canDecim) {
    document.getElementById("screen").value += '.';
    canDecim = false;
  }
}

function negate() {
  currentNum = document.getElementById('screen').value;
  if (currentNum.charAt(0) == '-') {
    document.getElementById('screen').value = currentNum.replace('-', '');
  } else if (currentNum != 0) {
    document.getElementById('screen').value = '-' + currentNum;
  }
}

function square() {
  document.getElementById('screen').value = +(document.getElementById('screen').value * document.getElementById('screen').value).toPrecision(9);
}

function sqrt() {
  document.getElementById('screen').value = +Math.sqrt(document.getElementById('screen').value).toPrecision(8);
}

function addNum(num){
  if (document.getElementById('screen').value.length < 9) {
    document.getElementById("screen").value += num;
  }
}
function setSign(sign){
  canDecim = true;
  signChoice = sign;
  num1 = document.getElementById("screen").value;
  document.getElementById("screen").value ="";
}
function equalPressed() {
  num2 = document.getElementById("screen").value;
  canDecim = true;
  if (signChoice =="+") {
    document.getElementById("screen").value = +(Number(num1) + Number(num2)).toPrecision(8);
  } else if (signChoice == "-") {
    document.getElementById("screen").value = +(Number(num1) - Number(num2)).toPrecision(8);
  } else if (signChoice == "/") {
    document.getElementById("screen").value = +(Number(num1) / Number(num2)).toPrecision(8);
  } else if (signChoice == "*") {
    document.getElementById("screen").value = +(Number(num1) * Number(num2)).toPrecision(8);
  } else if (signChoice == "%") {
    document.getElementById("screen").value = +(Number(num1) % Number(num2)).toPrecision(8);
  } else if (signChoice == 'x to y') {
    document.getElementById("screen").value = Math.pow(Number(num1), Number(num2));
  } else if (signChoice == 'y root x') {
    document.getElementById("screen").value = Math.pow(Number(num1), +(1/Number(num2)));
  }
  num1 = '';
  num2 = '';
  
}

function cos() {
  document.getElementById('screen').value = +Math.PI/180(Math.cos(document.getElementById('screen').value)).toPrecision(8);
}

function sin() {
  document.getElementById('screen').value = +Math.sin(document.getElementById('screen').value * Math.PI / 180).toPrecision(8);
}

function tan() {
  document.getElementById('screen').value = +Math.tan(document.getElementById('screen').value * Math.PI / 180).toPrecision(8);
}

function del() {
  currentNum = document.getElementById('screen').value;
  document.getElementById('screen').value = currentNum.replace(currentNum[currentNum.length - 1], '');
}


/*ඞ*/