var name = window.prompt("Please enter your name", "Your name,please");
let time1 = new Date();
var hours = time1.getHours(); // create the time outside the function
var minutes = time1.getMinutes();
var seconds = time1.getSeconds();
document.writeln(
  "<h1>Hello," + name + " It's " + hours + ":" + minutes + ":" + seconds
); // print out the name and the time
window.onload = function () {
  // initial the variant
  var time1 = new Date();
  var hours = time1.getHours();
  var picture = document.getElementById("picture");
  var message = document.getElementById("message");

  /*use the comparison equation to choose which one to display */
  if (hours >= 0 && hours <= 12) {
    message.innerHTML = "good morning";
    message.className = "morning"; // set css class name to use
    picture.innerHTML = "<img src='morning.jpg' alt='Morning'>";
  } else if (hours >= 12 && hours <= 18) {
    message.innerHTML = "good afternoon";
    message.className = "afternoon"; // set css class name to use
    picture.innerHTML = "<img src='afternoon.jpg' alt='Afternoon'>";
  } else {
    message.innerHTML = "good night";
    message.className = "night"; // set css class name to use
    picture.innerHTML = "<img src='night.jpg' alt='Night'>";
  }
};
