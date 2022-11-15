/* 
PsuedoCode:
create a game by clicking a start buttom
game should be timed
users should attempt to guess the correct word that is hidden on the page
- "_" should be the placeholders for all letters originally
- after typing one of the letters in the word, that letter should pop up on the screen
- game should end if the user guessing the word correctly (add +1 to their total wins)
- game should end if the timer runs out before the user guesses the word (add +1 to their total losses)
display record of wins and losses 

What to use in content: 
- timer (activity 9-10)
- keyboard event (activity 15-16)
- store the record on local (activities 21-26)
- set interval
- need a function for interval
- need function to set wins
- need function to set losses
- need function to grab wins
- need function to grab losses

- remember to use text.content
*/

//RANDOM SELECTOR FUNCTION -------------------------------------------------------------------------------------------------------------

function randomchoice(max) {
    return Math.floor(Math.random()*max);
  }

//END OF RANDOM SELECTOR FUNCTION ------------------------------------------------------------------------------------------------------

//Start INTERVAL FUNCTION --------------------------------------------------------------------------------------------------------------------

var timer = document.querySelector(".timetext")
var startbutton = document.getElementById("startbutton")
var secondsLeft
var underarray

function setTime() {
    var secondsLeft = 10
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft + " seconds left to solve the word!"
      
      if (secondsLeft === 1) {
        timer.textContent = secondsLeft + " second left to solve the word!"
      }
      if (secondsLeft === 0) {
        // Stops execution 
        clearInterval(timerInterval);
        timer.textContent = "You Lost!"
      }
  
    }, 1000);

}

//End OF INTERVAL FUNCTION ---------------------------------------------------------------------------------------------------------------

//Start Generate Random Word FUNCTION -----------------------------------------------------------------------------------------------------------
var wordlist = ["timber", "oatmilk", "randomize", "avoid", "dominant", "media", "terrible", "sturdy", "ripple", "destiny", "ordinance", "budlight", "vodka", "foolish"]
var newword = document.getElementById("newword")


function rendergame() {
    var underscore = " _ "
    var randomword = wordlist[randomchoice(wordlist.length)]
    var splitword = randomword.split("")

    var underarray = []
    
    while (underarray.length < splitword.length) {
        underarray.push(underscore)
    }

    newword.textContent = underarray.join(" ");



    document.addEventListener("keydown", function (event) {
      var letterinword = false;
      var key = event.key.toLowerCase();

      console.log(splitword)

    
      for(var i = 0; i < splitword.length; i++) {
        if (splitword[i] == key) {
          underarray[i] = key;
          newword.textContent = underarray.join(" ");
        } 
      }}
      )
    

}



startbutton.addEventListener("click", rendergame);

/*document.addEventListener("keydown", function (event) {
  var letterinword = false;
  var key = event.key.toLowerCase()

  for(var i = 0; i < wordlist.length; i++) {
    if (splitword[i] === key) {
      letterinword === true;
    } 
  }
    if (letterinword) {
      for (var i = 0 ; i < wordlist.length; i++){
        if (splitword[i] === key) {
          underarray[i] === key;
        newword.textContent = underarray.join(" ");
        }
    }
  }})
  */
//End random word function``--------------------------------------------------------------------------------------------------------------------

//Start of Checkletter function (for the game) --------------------------------------------------------------------------------------------------------------------

function checkletter (letter) {
  var letterinword = false;

  for(var i = 0; i < wordlist.length; i++) {
    if (splitword[i] === letter) {
      letterinword === true;
    }
  }
    if (letterinword) {
      for (var i = 0 ; i < wordlist.length; i++){
        if (splitword[i] === letter) {
          underarray[i] === letter;
        }
        newword.textContent = underarray.join(" ")
    }

  }
}

// End of Chekleter function --------------------------------------------------------------------------------------------------------------------
//Start of Event --------------------------------------------------------------------------------------------------------------------
/*document.addEventListener("keydown", function (event) {
 
  var key = event.key.toLowerCase();
  var alphachar = "abcdefghijklmnopqrstuvwxyz0123456789 ".split(" ");

  if (alphachar.includes(key)) {
    checkletter(key)
  }
})*/

//End of Event --------------------------------------------------------------------------------------------------------------------

/*
- Make an array filled with a bunch of random words
- retrieve a random word using math random
- split the string by using split function
- match each letter with 
- make an array of underscores
- match the event.keypress with the index of 

IF keydown is included within the array, reveal that specific index 
*/
//Use key down event to reveal correct letters
