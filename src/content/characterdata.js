//CONSTANTS
const axios = require('axios');
const _ = require('lodash');
const apiLink = "https://www.anapioficeandfire.com/api/";


//array of major characters and their urls for API searches
const majorCharsArr = [
  //have to finish filling this out; goal is to get 20
  {"character": "cersei", "url": "characters/238"},
  {"character": "margaery", "url": "characters/16"},
  {"character": "renly", "url": "characters/862"},
  {"character": "jon", "url": "characters/583"},
  {"character": "danaerys", "url": "characters/1303"},
  {"character": "jorah", "url": "characters/1560"},
  {"character": "theon", "url": "characters/1022"},
  {"character": "ned", "url": "characters/339"},
  {"character": "arya", "url": "characters/148"},
  {"character": "jaime", "url": "characters/529"},
  {"character": "littlefinger", "url": "characters/823"}
  {"character": "stannis", "url": "characters/1963"},
  {"character": "catelyn", "url": "characters/232"}
];

//object that will be populated with character data
let characterDataObj = {
  "name": "",
  "culture": "",
  "born": "",
  "died": "",
  "titles": [],
  "aliases": [],
  "playedBy": []
}

//FUNCTIONS

export function getChosenCharacterUrl () {
  //get characterURL from user input (dropdown)
  let chosenCharacterUrl = apiLink;
  let chosenCharacter = "cersei"; //for testing; this will come from dropdown
  let characterArrUrl = _.find(majorCharactersArr, ['character', chosenCharacter]).url;
  chosenCharacterUrl += characterArrUrl;
  return chosenCharacterUrl;
};

export function getChosenCharacterData () {
  axios.get(getChosenCharacterUrl().then((response) => {
    characterDataObj.name = response.data.name;
    characterDataObj.culture = response.data.culture;
    characterDataObj.born = response.data.born;
    characterDataObj.died = response.data.died;
    characterDataObj.titles = response.data.titles;
    characterDataObj.aliases = response.data.aliases;
    characterDataObj.playedBy = response.data.playedBy;
    console.log(characterDataObj);
    return characterDataObj;
  });
}
