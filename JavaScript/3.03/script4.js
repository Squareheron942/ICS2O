if (confirm("Would you like to create a fun sentence?") == true) {
  let adj = prompt("Enter an Adjective!");
  let adv = prompt("Enter an Adverb!");
  let vrb = prompt("Enter a Verb!");
  let noun = prompt("Enter a Noun!");
  let prn = prompt("Enter a Pronoun!");
  let lqd = prompt("Enter a drink!");
  let room = prompt("Enter the name of a room");
  let clth = prompt("Enter the name of a piece of clothing!");
  document.write("On a cold January evening, " + prn + vrb + " down to the " + room + " and wrapped myself in a " + clth + " next to a " + adj + " heater. A few minutes later, I " + vrb +" to make a " + adj + " cup of " + lqd + ".")
}