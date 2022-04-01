var vowels = /[aeiou]/i;


    
function strFunc() {
  var str = document.getElementById("inputWord").value;
  var word = '';
  var sntcOut = '';  
  
  str = str.replace(/(^\s*)|(\s*$)/gi,"");
  str = str.replace(/[ ]{2,}/gi," ");
  str = str.replace(/\n /,"\n");
  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    word = str[i];
    if (vowels.test(word[0])) {
      sntcOut += word + 'ay ';
    } else {
      word += word[0];
      word = word.replace(word[0], '');
      sntcOut += word + 'ay ';
    }
  }
  document.getElementById('output').innerHTML = sntcOut;
}

