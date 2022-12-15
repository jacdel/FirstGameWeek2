var userGuess = prompt('lets play a game?');

let MAX = 10;
let MIN = 1;
var computerValue = Math.floor(Math.random() * MAX + 1)+ MIN ;
console.log(computerValue);

//check if the number guess is correct then print correct
console.log(typeof(userGuess))
console.log(typeof(computerValue))
if(userGuess == computerValue){
    console.log('correct');
    alert('correct');
}
else {
    alert('WRONG')
}

var playAgain = prompt("Let's play again? y/n");