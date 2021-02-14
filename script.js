"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
//secretNumber replaced with coins
//score replaced with wins
//highscrore replaced with loses

//Function that determines what to do if the wager is too low or too high

let coins = 50; //This starts the coins off at 50

let wins = 0; //This starts the wins off at 50

let loses = 0; //This starts the loses off at 0

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}; //This function allows you to change the content of the message

//When you click Go!
document.querySelector(".go").addEventListener("click", function () {
  let wager = Number(document.querySelector(".wager").value); //This attributes the number you type on the webpage to the variable "wager"

  console.log(coins, wager);

  //What to do if the wager is 0
  if (wager === 0) {
    //When there is no input
    displayMessage("You have to wager some coins!");

    //What to do if the wager is too high
  } else if (wager > coins) {
    displayMessage("You can only wager the coins you have!");

    //What to do if the wager is acceptable
  } else if (wager <= coins) {
    let secretNumber = Math.trunc(Math.random() * 2) + 1; //This generates a secret number between 1 and 2

    console.log(secretNumber);

    //When player wins
    if (secretNumber === 2) {
      displayMessage("🎉  You win!");
      //Add the coins you have won to your current coins
      coins = coins + wager;
      document.querySelector(".coins").textContent = `Coins: ${coins}`;
      console.log(wager, coins);
      //Set the background colour to green
      document.querySelector("body").style.backgroundColor = "#60b347"; //
      document.querySelector(".wager").style.width = "30rem";
      //Increments the wins
      wins++;
      document.querySelector(".wins").textContent = wins;

      //When player loses
    } else if (secretNumber === 1) {
      //Remove the coins you have lost from your current coins
      coins = coins - wager;
      document.querySelector(".coins").textContent = `Coins: ${coins}`;
      console.log(wager, coins);
      //Increment the loses
      loses++;
      document.querySelector(".loses").textContent = loses;
      //If you still have coins to wager
      if (coins > 0) {
        displayMessage("💥 You lose");
        //Set the background colour to black
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".wager").style.width = "30rem";
        //If you are out of coins to wager
      } else if (coins === 0) {
        displayMessage("💥 You're outta money!! Press Again to play again. ");
        //Set the background colour to red
        document.querySelector("body").style.backgroundColor = "#95322F";
        document.querySelector(".wager").style.width = "30rem";
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  coins = 50;
  wins = 0;
  loses = 0;
  displayMessage("Start gambling...");
  document.querySelector(".coins").textContent = "Coins: 50";
  document.querySelector(".wins").textContent = wins;
  document.querySelector(".loses").textContent = loses;
  document.querySelector(".wager").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".wager").style.width = "15rem";
});

///Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach  a clickeventhandler
///2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input fields
// 4. Also restore the original background color(#222)and number width(15rem)
