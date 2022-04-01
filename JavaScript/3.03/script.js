if (confirm("Can I steal your identity?") == true) {
  let fName = prompt("What is your first name?");
  let lName = prompt("What is your last name?");
  let bYear = prompt("What year were you born?");
  let cYear = prompt("What year is it? If you don't answer I'll assume it's 2022.");

  // Makes the name be "unknown" if no answer is given

  if (fName == "null" && lName == "null") {
    fName = "unknown";
    lName = "";
  };

  // Makes the birth date calculation work even if there is no date given

  if (bYear == false) {
    bYear = 0;
  };

  // Makes the date 2022 if there is no date given

  if (cYear == "null") {
    cYear = 2022;
  };

  // Prints the value of the variables in the log

  console.log("fName = " + fName + " lName = " + lName + " bYear = " + bYear + " cYear = " + cYear)

  // Prints the final information

  document.write("My name is " + fName + " " + lName + ".<br>" + "I was born in " + bYear + "." + "<br>" + "I am " + (cYear - bYear) + " years old.");
}