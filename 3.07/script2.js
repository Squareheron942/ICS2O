function randWord() {
  var num = Math.floor(Math.random() * 10);
  var words = ['mechanism', 'epiphany', 'harvest', 'government', 'exhibition', 'definite', 'excuse', 'topple', 'uncertainty', 'suspect']
  return words[num];
}

document.write(randWord());