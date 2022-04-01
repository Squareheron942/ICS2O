var year = prompt("Enter a year.");


if (year % 4 == 0 && year % 100 != 0) {
  alert("This year is a leap year!");
} else if (year % 4 == 0 && year % 100 == 0) {
  if (year % 400 == 0){
    alert("This year is a leap year!");
  }
  else {
    alert("This year is not a leap year!");
  }
} else {
  alert("This year is not a leap year!");
}