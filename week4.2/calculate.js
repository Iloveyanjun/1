// Function to parse the input string and extract numbers
function parseNumbers(input) {
  return input
    .split(/\s+/)
    .map(Number)
    .filter((num) => !isNaN(num));
}

// Function to calculate average of an array of numbers
function average(numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}

// Function to calculate maximum value in an array of numbers
function max(numbers) {
  if (numbers.length === 0) return -Infinity;
  return Math.max(...numbers);
}

// Function to calculate minimum value in an array of numbers
function min(numbers) {
  if (numbers.length === 0) return Infinity;
  return Math.min(...numbers);
}

// Main function to handle input and calculations using window.prompt
function calculations() {
  const numbers = [];
  let input;
  while (true) {
    input = window.prompt("Enter an integer (-1 to stop):");
    const num = parseInt(input);
    if (isNaN(num)) {
      alert("Please enter a valid integer.");
      continue;
    }
    if (num === -1) break;
    numbers.push(num);
  }

  const average_number = average(numbers);
  const max_number = max(numbers);
  const min_number = min(numbers);

  // Display the results using window.alert
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `
        <p>1.平均值: ${average_number}</p>
        <p>2.最大值: ${max_number}</p>
        <p>3.最小值: ${min_number}</p>
    `;
}
