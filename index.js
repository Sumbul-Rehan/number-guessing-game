#! /usr/bin/env node
import inquirer from "inquirer";
// 1=computer will generate a random number
// 2= user input for guessing number
// 3=campare user input with computer generate number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessnumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    }
]);
if (answer.userGuessnumber === randomNumber) {
    console.log("congratulations! you guessed  a right number.");
}
else {
    console.log("you guessed wrong number");
}
