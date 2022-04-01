function recArea() {
  var length = document.getElementById('length').value;
  var width = document.getElementById('width').value;
  document.getElementById('areaParagraph').innerHTML = length * width;  
}
function recPeri() {
  var length = document.getElementById('length').value;
  var width = document.getElementById('width').value;
  document.getElementById('perimParagraph').innerHTML = 2 * length + 2 * width; 
}