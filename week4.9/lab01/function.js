// script.js
document.addEventListener("DOMContentLoaded", function () {
  var sound = document.getElementById("sound");
  var generateButton = document.getElementById("washbutton");
  var table = document.getElementById("generate");

  generateButton.addEventListener("click", function () {
    generateRandomImages(table);
  });
});

function generateRandomImages(table) {
  // Clear existing table
  table.innerHTML = "";
  sound.play();
  // Loop through rows
  for (var i = 0; i < 4; i++) {
    var row = table.insertRow();
    // Loop through columns
    for (var j = 0; j < 13; j++) {
      var cell = row.insertCell();
      // Generate a random index between 0 and 51
      var index = Math.floor(Math.random() * 52);
      // Create image element
      var img = document.createElement("img");
      img.src = index + ".png";
      // Add image to cell
      cell.appendChild(img);
    }
  }
}
