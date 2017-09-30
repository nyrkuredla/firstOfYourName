import axios from 'axios';

//functions from content files
import { fetchRandomQuote, getCorrectAns, getIncorrectAns } from './content/trivia'
import { getRandomTitle } from './content/titles'
import { getRandomDeath } from './content/deaths'
import { getChosenHouseUrl, getChosenHouseData } from './content/housedata.js'
//check to make sure that functions are properly wired through services file to front pages!

//links to APIs
const quotesLink = "https://got-quotes.herokuapp.com/quotes";
const apiLink = "https://www.anapioficeandfire.com/api/";

//TO DO:
//write character data functions (similar to house functions but I don't have the URLs yet)
//wire up functions to components; this will require setting state for answers, etc. (see individual function files for details on this)


//login state:
constructor(){
  super();

  this.state = {
    "name": "",
    "correctAnsCount": 0,
    "incorrectAnsCount": 0,
    "titles": [],
    "backgroundUrls": []
  }
}

  _handleName = (evt) => {
    let inputName = evt.target.name;
    this.setState({
      [inputName] : evt.target.value
    })
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState(
      {"name": this.state.name}
    )
  }
