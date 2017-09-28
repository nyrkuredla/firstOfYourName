//constants
const axios = require('axios');
const quotesLink = "https://got-quotes.herokuapp.com/quotes";
const apiLink = "https://www.anapioficeandfire.com/api/";


//function to get random quote from quote API; exported to services file
function fetchRandomQuote () {
  axios.get(quotesLink);
}

async function matchChars() {
  quoteInfo = await fetchRandomQuote();
  let quoteChar = "";
  let quoteWords = "";
  console.log(quoteInfo)
)
}


//empty arrays and objects to be filled with questions and answers
const triviaQuestions = [];
const questionObj = {
  "id": "",
  "questionText": "",
  "correctAnswer": {"isTrue": true, "answerText": ""},
  "wrongAnswers": [
    {"isTrue": false, "answerText": ""},
    {"isTrue": false, "answerText": ""},
    {"isTrue": false, "answerText": ""}
  ]
}

//QUOTES GAME
const quoteChars = [
  {"char": "bronn", "name": "Bronn of the Blackwater"},
  {"char": "brynden", "name": "Brynden Tully, the Blackfish"},
  {"char": "cersei lannister", "name": "Cersei Lannister"},
  {"char": "hound", "name": "Sandor Clegane, the Hound"},
  {"char": "jaime", "name": "Jaime Lannister"},
  {"char": "littlefinger", "name": "Petyr Baelish"},
  {"char": "olenna Tyrell", "name": "Olenna Tyrell, the Queen of Thorns"},
  {"char": "renly", "name": "Renly Baratheon"},
  {"char": "tyrion", "name": "Tyrion Lannister"},
  {"char": "varys", "name": "Varys, the Spider"},
  {"char": "sansa", "name": "Sansa Stark"},
  {"char": "davos", "name": "Davos Seaworth, the Onion Knight"}
]

//if


//answer object =

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

matchChars()
