 var incorrect = true;
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '_', '=', '+', '!', '@', '#', '$', '%', '^', '*', '(', ')', '[', ']', '{', '}', '\\', '|', ',', '.', '/', '<', '>', '?', '`', '~', '¡', '™', '£', '¢', '∞', '§', '¶', '•', 'ª', 'º', '≠', 'œ', '∑', '´', '®', '†', '¥', '¨', 'ˆ', 'ø', 'π', '“', '‘', '«', 'å', 'ß', '∂', 'ƒ', '˙', '∆', '˚', '¬', '…', 'æ', 'Ω', '≈', 'ç', '∫', '˜', 'µ', '≤', '≥', '÷', '⁄', '€', '‹', 'ﬁ', 'ﬂ', '‡', '°', '·', '‚', '±', 'Œ', '„', '´', '‰', 'ˇ', 'Á', '¨', '∏', 'Í', 'Î', 'Ï', '˝', 'Ó', 'Ô', 'Ó', 'Ô', '', 'Ò', 'Ú', 'Æ', '¸', '˛', '◊', 'ı', '˜', 'Â', ' '];
console.log(alphabet.length);
var passlength = Math.floor(Math.random() * Math.random() * 20);
var password;

  

for (var i = 0; i < passlength; i++) {
  password += alphabet[Math.floor(Math.random() * 169)];
}

password = password.replace('undefined', '');

if (password != 'undefined') {
  while (incorrect) {
    var ans = prompt('Enter the password (which is):' + password);
    if (ans == password) {
      incorrect = false;
    }
  }
}