var grade = prompt("What is your grade?");

if (grade < 1 || grade > 100) {
  alert("Invalid Grade")
} 

else if (grade >= 80) {
  alert("4");
} 

else if (grade >= 70) {
  alert("3");
}

else if (grade >= 60) {
  alert("2");
}

else if (grade >= 50) {
  alert("1");
}

else {
  alert("R");
}