//CONSTANTS
const axios = require('axios');
const _ = require('lodash');
const apiLink = "https://www.anapioficeandfire.com/api/";


//array of major houses and their urls for API searches
const majorHousesArr = [
  {"house": "baratheon", "url": "houses/15"},
  {"house": "stark", "url": "houses/362"},
  {"house": "lannister", "url": "houses/229"},
  {"house": "greyjoy", "url": "houses/169"},
  {"house": "tyrell", "url": "houses/398"},
  {"house": "targaryen", "url": "houses/378"},
  {"house": "arryn", "url": "houses/7"},
  {"house": "mormont", "url": "houses/271"},
  {"house": "tully", "url": "houses/395"}];

//object that will be populated with house data
let houseDataObj = {
  "name": "",
  "region": "",
  "coatOfArms": "",
  "words": "",
  "titles": [],
  "seats": [],
  "ancestralWeapons": []
}

//FUNCTIONS

export function getChosenHouseUrl () {
  //get houseURL from user input (dropdown)
  let chosenHouseUrl = apiLink;
  let chosenHouse = "baratheon"; //for testing; this will come from dropdown
  let houseArrUrl = _.find(majorHousesArr, ['house', chosenHouse]).url;
  chosenHouseUrl += houseArrUrl;
  return chosenHouseUrl;
};

export function getChosenHouseData () {
  axios.get(getChosenHouseUrl().then((response) => {
    houseDataObj.name = response.data.name;
    houseDataObj.region = response.data.region;
    houseDataObj.coatOfArms = response.data.coatOfArms;
    houseDataObj.words = response.data.words;
    houseDataObj.titles = response.data.titles;
    houseDataObj.seats = response.data.seats;
    houseDataObj.ancestralWeapons = response.data.ancestralWeapons;
    console.log(houseDataObj);
    return houseDataObj;
  });
}



//TO DO:
