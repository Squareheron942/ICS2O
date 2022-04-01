const sntc = ["Yes", "No", "<img src='https://i.kym-cdn.com/photos/images/newsfeed/001/462/400/978.jpg'>", "You can do it!", "All we can do is hope...", "I am outside your house", "You have 10 minutes", "ur mom", "I do not care what you say about my mother. Your opinion is your opinion. But trust me, if you actually attempt to do something to my mother, even though she's made some bad decisions in the past that we still need to work through, I will personally call the police on you and I'll be laughing as your mugshot is shown on TV. You don't even know her, do you? The point of your entire existence seems to be to just tease other people. Well, I believe your jokes are in bad taste, and you should cease and desist digging through the dregs left at the bottom of the joke barrel; you could get a splinter, whose pain will be significantly increased by the uncommonly high amount of salt you carry in your bloodstream. Thank you, and let us cease talking about each other's parents."];

var ansNum = Math.floor(Math.random() * 9);

var ans = sntc[ansNum];

//var c = document.getElementById("myCanvas");
//var ctx = c.getContext("2d");

//ctx.beginPath();
//ctx.arc(100, 75, 50, 0, 2 * Math.PI);
//ctx.stroke();

if (prompt("Ask me a question! I'm a magic 9 ball!") == false) {
  alert("Am I a joke to you?");
} else {
  document.write(ans);
}

console.log(ansNum);
console.log(ans);