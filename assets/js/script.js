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
*/
var timer = document.getElementById("#timer")





//INTERVAL FUNCTION
var secondsLeft = 10

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft + " seconds left to solve the word!"
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);}

    setTime()
