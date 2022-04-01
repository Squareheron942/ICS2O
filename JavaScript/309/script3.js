function countWords() {
  var str = document.getElementById('sntcIn').value;
  str = str.replace(/(^\s*)|(\s*$)/gi,"");
  str = str.replace(/[ ]{2,}/gi," ");
  str = str.replace(/\n /,"\n");
  document.getElementById('wrdCount').innerHTML = str.split(' ').length;
}