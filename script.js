document.getElementById('button').addEventListener('click',guess)
let myage = 15
let answerr = 0

function guess() {

  do {
    answerr = prompt("Guess my age pls")
   if ( myage == answerr) {
  alert ("Congrats! You Won")
  } else if ( myage < answerr) {
  alert ("Guess a bit higher")
  } else if ( myage > answerr) { 
  alert  ("Guess a bit lower")
  }
  } while(myage != answerr) 
 
}