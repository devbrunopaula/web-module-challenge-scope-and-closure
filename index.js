// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

//? Task 1: `counterMaker`
// Study the code for counter1 and counter2. Answer the questions below.
 
 //? 1. What is the difference between counter1 and counter2?
//!  Counter1 creates a closure between the context of the count variable and  the new updated value of the variable.
   
//!   Counter2  The counter2 function and the count variable are both delcare in the global scope,
//!   when the  counter2 function is called it has to reach its outer scope to reference the count variable.
 
//?  Which of the two uses a closure? How can you tell?
//!  Counter 2 is using a closure.  Counter 2 is referencing outside of its context

//?  3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
//! Counter1 its works great when you need to holdon to the memory of the last time in which the function was called.


// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


//? Task 2: inning() 

//?    Write a function called `inning` that generates a random number of points that a team scored in an inning. 
//?    This should be a whole number between 0 and 2. */

function inning(max) {
  const randomNumber = Math.floor(Math.random() * 3);
  return randomNumber
}
 //! console.log(inning(3))

 

// Task 3: finalScore()
//? Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of 
//? innings and and returns the final score of the game in the form of an object.

//For example, 

// finalScore(inning, 9) might return: 
// {
//   "Home": 11,
//   "Away": 5,
// }

// */ 

function finalScore(score, innings){
 
  let homeTeamScore = 0;
  let awayTeamScore = 0;

  for(let i = 0; i < innings; i++){
    homeTeamScore = homeTeamScore + score();
    awayTeamScore = awayTeamScore + score();
  }

  return {'Home': homeTeamScore, 'Away': awayTeamScore}
  
}

// console.log(finalScore(inning, 9))

// Task 4: 

//? Create a function called `scoreboard` that accepts the following parameters: 

//? (1) Callback function `inning` that you wrote above
//? (2) A number of innings

//? and returns the score at each pont in the game, like so:

// 1st inning: 0 - 2
// 2nd inning: 1 - 3
// 3rd inning: 1 - 3
// 4th inning: 2 - 4
// 5th inning: 4 - 6
// 6th inning: 4 - 6
// 7th inning: 4 - 6
// 8th inning: 5 - 8
// 9th inning: 6 - 10

// Final Score: 6 - 10 */

function test(cb, innings) {

  let home = []
  let away = []
  let inningsRank = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th']
  let plays = ''
       
       for(let i = 0; i <= innings; i++){
         home.push(cb())
         away.push(cb())
        
     }
console(1)
      
     

}

//console.log(test(inning,9))


function scoreboard(scorePerInning, numberOfInnings) {
  let homeTeamScore = 0;
  let awayTeamScore = 0;
  let innings = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th']

  for(let i = 0; i < numberOfInnings; i++){
    homeTeamScore =  scorePerInning() + homeTeamScore
    awayTeamScore =  scorePerInning() + awayTeamScore
    console.log((`${innings[i]} inning: Home: ${homeTeamScore} - Away: ${awayTeamScore}`))
  }

  
  if(homeTeamScore === awayTeamScore){
    return `Exta Time Home Team ${homeTeamScore+1} - ${awayTeamScore} Away Team `
  }else {
  return   `Final Score: Home: ${homeTeamScore} - Away: ${awayTeamScore}`
  }
  
}
console.log(scoreboard(inning, 9))


