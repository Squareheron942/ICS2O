var arr = [];
for (var i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arr);
document.getElementById('arrOut').innerHTML = arr;

var num1 = arr[0];
var num2 = arr[1];
var num3 = arr[2];
var num4 = arr[3];
var num5 = arr[4];
var num6 = arr[5];
var num7 = arr[6];
var num8 = arr[8];
var num9 = arr[8];
var num10 = arr[9];

console.log((num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10) / 10);
document.getElementById('averageOut').innerHTML = (num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10) / 10;

var highestNum = 0;

for (var k = 0; k < arr.length; k++) {
  var currentNum = arr[k];
  if (currentNum > highestNum) {
    highestNum = currentNum;
  } else {
    continue;
  }
}

console.log(highestNum);
document.getElementById('highestOut').innerHTML = highestNum;