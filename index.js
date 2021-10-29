let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Please enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
