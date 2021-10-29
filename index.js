let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Please enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attemps = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attemps++;
  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess:");
  } else {
    guess = prompt("Too low! Enter a new guess:");
  }
}

if (guess === "q") {
  console.log("OK, YOU QUIT!");
} else {
  prompt("CONGRATS YOU WIN!!");
  console.log(`YOU GOT IT! It took you ${attemps} guesses`);
}
