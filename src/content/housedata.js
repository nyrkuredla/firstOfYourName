const axios = require('axios');
const _ = require('lodash');
const apiLink = "https://www.anapioficeandfire.com/api/";
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

//functions needed

function getChosenHouseUrl () {
  //get houseURL from user input (dropdown)
  let chosenHouseUrl = apiLink;
  let chosenHouse = "baratheon"; //for testing; this will come from dropdown
  let houseArrUrl = _.find(majorHousesArr, ['house', chosenHouse]).url;
  chosenHouseUrl += houseArrUrl;
  console.log(chosenHouseUrl);
  return chosenHouseUrl;
};

function getChosenHouseData () {

}

getChosenHouseUrl();
//get house data by house name
//get data by house name: region, seat,
