var vowels = /[aeiou]/i;

function strFunc() {
  document.getElementById("output").innerHTML = findVowels();
}

function findVowels() {
var word = document.getElementById("inputWord").value;
  if (vowels.test(word[1])) {
    word += word[1];
    word = word.replace(words[1], '');
    return word;
  }
}

