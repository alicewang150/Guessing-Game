//create a secretNumber
var secretNumber = 20;


//ask for a guess

var guess = Number(prompt("Guess a number!"));

//check guess

if (guess === secretNumber) {
    alert("You got it RIGHT!!")
}

else if (guess < secretNumber) {
    alert("Too low, guess again")
    
}

else  {
    alert("Too high, guess again")

}