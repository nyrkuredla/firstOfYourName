
//functions from content files
import { getRandomTitle } from './src/content/titles'
import { getRandomDeath } from './src/content/deaths'
import { getChosenHouseUrl, getChosenHouseData } from './src/content/housedata'
import { getChosenCharacterUrl, getChosenCharacterData } from './src/content/characterdata'
//check to make sure that functions are properly wired through services file to front pages!

//links to APIs
const apiLink = "https://www.anapioficeandfire.com/api/";

//TO DO:
//wire up functions to components; this will require setting state for answers, etc. (see individual function files for details on this)

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

//on componentDidMount:

//function to get random quote from quote API; exported to services file
export function fetchRandomQuote () {
  axios.get("https://got-quotes.herokuapp.com/quotes");
  //set state: quote (from response)
}

// //match character from random quote to array of possible answers. if there is an answer, proceed; if not, repeat the fetch request (this is because there are some characters and quotes that are incorrectly attributed or just very uncommon)
// export function getCorrectAnsObj (input) {
//   //TO DO: link input to user input on trivia page (set state)
//   let quoteChar = _.lowerCase(input);
//   let correctAnsObj = { "answer": "", "isCorrect": true, "name": "" }
//   if (_.find(quoteCharArr, ['char', quoteChar])) {
//     //TO DO: update state with correct answer
//     correctAnsObj.name = (_.find(quoteCharArr, ['char', quoteChar])).name
//     correctAnsObj.answer = quoteChar;
//     answersArr.push(correctAnsObj);
//     return correctAnsObj;
//   }
//   else {
//     //TO DO: repeat the operation to pull a new quote and match the new quote character
//
//   }
// }

export function getIncorrectAnsObj(correctChar) {
  let answersArr = [];
  for (let i = 0; i < 3; i++) {
    let randomCharArr = _.shuffle(quoteCharArr);
    let incorrectAnsObj = { "answer": "", "isCorrect": false };
    let randomChar = randomCharArr[i];
    if (randomCharArr[i].char !== correctChar) {
      incorrectAnsObj.name = randomChar.name;
      incorrectAnsObj.answer = randomChar.char;
      answersArr.push(incorrectAnsObj)
    }
  }
  answersArr = _.uniq(answersArr)
  answersArr.push({ name: correctChar, answer: correctChar, isCorrect: true})
  return answersArr;
}
