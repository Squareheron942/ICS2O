function createResume() {
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;
  var age = document.getElementById("age").value;
  var bDate = document.getElementById("bDate").value;
  var status = document.querySelector("input[name='radios']:checked").value;
  var GPA = document.getElementById("gpa").value;
  var info = document.getElementById("info").value;
  
  document.getElementById("output").innerHTML = `Hi. My name is ${fName} ${lName}. I am a ${age} year old ${status} looking for work at your company. I was born on ${bDate}. My GPA was ${GPA}. Here is everything you need to know about me: ${info}`
}
