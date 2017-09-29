//constants
const axios = require('axios');
const _ = require('lodash')
const quotesLink = "https://got-quotes.herokuapp.com/quotes";
const apiLink = "https://www.anapioficeandfire.com/api/";


//QUOTES GAME

//this array is pulled from the quotes link front page, plus a few that I added based on what the API returned (Sansa, Davos).
const quoteCharArr = [
  {"char": "bronn", "name": "Bronn of the Blackwater"},
  {"char": "brynden", "name": "Brynden Tully, the Blackfish"},
  {"char": "cersei lannister", "name": "Cersei Lannister"},
  {"char": "hound", "name": "Sandor Clegane, the Hound"},
  {"char": "jaime", "name": "Jaime Lannister"},
  {"char": "littlefinger", "name": "Petyr Baelish"},
  {"char": "olenna", "name": "Olenna Tyrell, the Queen of Thorns"},
  {"char": "renly", "name": "Renly Baratheon"},
  {"char": "tyrion", "name": "Tyrion Lannister"},
  {"char": "varys", "name": "Varys, the Spider"},
  {"char": "sansa", "name": "Sansa Stark"},
  {"char": "davos", "name": "Davos Seaworth, the Onion Knight"}
];

//to be populated with three incorrect and one correct answer object
let answersArr = [
  {}
];

//on componentDidMount:

//function to get random quote from quote API; exported to services file
export function fetchRandomQuote () {
  axios.get(quotesLink);
  //set state: quote (from response)
}

//match character from random quote to array of possible answers. if there is an answer, proceed; if not, repeat the fetch request (this is because there are some characters and quotes that are incorrectly attributed or just very uncommon)
export function getCorrectAns (input) {
  //TO DO: link input to user input on trivia page (set state)
  let quoteChar = "olenna"; //for testing
  let correctAns = { "answer": "", "isCorrect": true }
  if (_.find(quoteCharArr, ['char', quoteChar])) {
    //TO DO: update state with correct answer
    correctAns.name = (_.find(quoteCharArr, ['char', quoteChar])).name
    correctAns.answer = quoteChar;
    answersArr.push(correctAns);
    return correctAns;
  }
  else {
    //TO DO: repeat the operation to pull a new quote and match the new quote character
    console.log("boo, no correct answer item found")
  }
}

export function getIncorrectAns() {
  //TO DO: get correct answer character from state, then:
  let correctChar = "olenna" //for testing
  for (let i = answersArr.length; i < 4; i++) {
    let randomCharArr = _.shuffle(quoteCharArr);
    let incorrectAns = { "answer": "", "isCorrect": false };
    let randomChar = randomCharArr[i];
    if (randomCharArr[i].char !== correctChar) {
      incorrectAns.name = randomChar.name;
      incorrectAns.answer = randomChar.char;
      answersArr.push(incorrectAns)
    }
  }
  answersArr = _.shuffle(answersArr)
  return answersArr;
}

//TO DO:

//user select button onclick changes answer state to answer.
//user submit button onsubmit:
  //prevents default, sets state and compares state answer to correct answer.
  //if correct: display correct answer alert and user correct answer count gets added one.
  //if incorrect: display incorrect answer alert and user incorrect answer count gets added one.





//HOUSES AND CHARACTERS TRIVIA (REACH)
//major houses and their URL fragments to be appended to apiLink for searching
// const majorHouses = [
//   {"house": "Baratheon", "url": "houses/15"},
//   {"house": "Stark", "url": "houses/362"},
//   {"house": "Lannister", "url": "houses/229"},
//   {"house": "Greyjoy", "url": "houses/169"},
//   {"house": "Tyrell", "url": "houses/398"},
//   {"house": "Targaryen", "url": "houses/378"},
//   {"house": "Arryn", "url": "houses/7"},
//   {"house": "Mormont", "url": "houses/271"},
//   {"house": "Tully", "url": "houses/395"}]
console.log(getIncorrectAns());
