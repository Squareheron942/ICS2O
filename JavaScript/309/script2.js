function sum() {
  var i = Number(document.getElementById('startNum').value);
  var maxVal = document.getElementById('maxVal').value;
  var numbers = [];
  var sum = 0;
  for (i; i <= maxVal; i++) {
    numbers.push(i);
  }

  
  for (var a = 0; a < numbers.length; a++) {
    sum += Number(numbers[a]);
  }
  
  
  document.getElementById('sumOut').innerHTML = sum;
}