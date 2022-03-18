
//hide the no name div by default
var noNameDiv=document.getElementById("no-name");
if(noNameDiv!=null)
noNameDiv.style.display='none'

//enable dark mode
function nightmode() {
  let element = document.getElementById["dark"];
  let body = document.body;
  console.log("checed");
  body.className = "dark-mode";


}

//enable light mode
function lightMode() {
  let element = document.getElementById["light"];
  let body = document.body;
  console.log("checed");
  body.className = "light-mode";

}

//first check if the player name field is empty
function validateForm() {
  if(noNameDiv!=null)
noNameDiv.style.display='none'

  var a = document.forms["Form-1"]["playerName"].value;
   

  if (a == null || a == "") {
    if(noNameDiv!=null){
      noNameDiv.style.display='block'
      document.getElementById("msg").innerHTML = "Please enter your name to start playing the game";
    }  
  } else {

    document.getElementById("form-2").style.visibility = "visible";
    document.getElementById("form-1").style.visibility = "hidden";
    document.getElementById("form-2").reset();
  }
}


function StartGame() {
  validateForm()

}

function players() {
  var player = document.getElementById("playerName").value;
  document.getElementById("playerName").value = player;

}
//refresh the window for a new game
function reload() {
  window.location.reload(true);

}

document.getElementById("tryAgain").onclick = function () {

  reload();

}


//generating the random number
let number = Math.floor(Math.random() * 10 + 1);

//the number of guesses made before the correct guess 
let guess = 1;


document.getElementById("submitGuess").onclick = function () {
  document.getElementById("result").style.visibility = "visible";

  //fetch the name entered by the user
  const playerName = document.getElementById("playerName").value;

  console.log(playerName);

  //number guessed by the player
  let numberGuessed = document.getElementById("guess").value;

  //checking if the number guessed by the player matches the random number
  if (numberGuessed == number) {
    //if the player guesses the random number correctly
    document.getElementById("result").style.cssText += `
        color:#dea62d; 
        background-color:#382a18;
        `;
    document.getElementById("output").innerHTML = "CONGRATULATIONS!! " + playerName + " You guessed (" + number + ") right in " + guess + " Guess";
    document.getElementById("output-1").innerHTML = "yeeeaay!!";
    // document.getElementById("submitGuess").style.visibility = "hidden";

  }
  else if (numberGuessed > number) {
    guess++;
    document.getElementById("output").innerHTML = "OOOPS! sorry " + playerName + "! wrong guess but HOT! try a smaller number!";


  }
  else if (Math.abs(number - numberGuessed) < 3) {
    guess++;
    document.getElementById("output").innerHTML = "OOOPS! sorry " + playerName + "! wrong guess but HOT!";

  } else {
    guess++;
    document.getElementById("output").innerHTML = "OOOPS! sorry " + playerName + "! Wrong guess but BOILING! Try a larger number!";

  }
  //if the player does not gues the correct number within 4 tries the correct number is displayed and the game is over
  if (guess > 4) {
    document.getElementById("result").style.cssText += `
        color:#fff; 
        background-color:#63290b;
        `;
    alert("No more Guesses.")
    document.getElementById("output-1").innerHTML = "The random number is " + number + "."
    document.getElementById("output").innerHTML = "Click try again to start over"
    document.getElementById("submitGuess").style.visibility = "hidden";
  }


}
