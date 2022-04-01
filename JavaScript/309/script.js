function countAll() {
  for (var i = 1; i <= document.getElementById('numInEvery').value; i++) {
    document.getElementById('outAll').innerHTML += i + '<br>';
  }
}

function countOdd() {
  for(var i = 1; i < document.getElementById('numInOdd').value; i += 2) {
    document.getElementById('outOdd').innerHTML += i + '<br>';
  }
}
function countRev() {
  for (var i = document.getElementById('numInRev').value; i > 0; i--) {
    document.getElementById('outRev').innerHTML += i + '<br>';
  }
}
