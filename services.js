import axios from 'axios';

//functions from content files
import { fetchRandomQuote, getCorrectAns, getIncorrectAns } from './content/trivia'
import { getRandomTitle } from './content/titles'
import { getRandomDeath } from './content/deaths'
import { getChosenHouseUrl, getChosenHouseData } from './content/housedata.js'
import { getChosenCharacterUrl, getChosenCharacterData } from './content/characterdata.js'
//check to make sure that functions are properly wired through services file to front pages!

//links to APIs
const quotesLink = "https://got-quotes.herokuapp.com/quotes";
const apiLink = "https://www.anapioficeandfire.com/api/";

//TO DO:
//wire up functions to components; this will require setting state for answers, etc. (see individual function files for details on this)
