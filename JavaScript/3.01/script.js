if (confirm('Give away your personal information? ')) {
  var userName = prompt("What is your name?");
  if (userName != null) {
    document.write(userName)
  }
}
else {
  alert("say goodbye")
};