// calculator program
const display = document.getElementById("display");
function appendtodisplay(input) {
  display.value += input;
}
function cleardisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
      } catch (error) {
        document.getElementById("display").value = "Error";
      }
}
function deletenumber(){
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}