import axios from 'axios';

//functions from content files
import { fetchRandomQuote, getCorrectAnsObj, getIncorrectAnsObj } from './src/content/trivia'
import { getRandomTitle } from './src/content/titles'
import { getRandomDeath } from './src/content/deaths'
import { getChosenHouseUrl, getChosenHouseData } from './src/content/housedata'
import { getChosenCharacterUrl, getChosenCharacterData } from './src/content/characterdata'
//check to make sure that functions are properly wired through services file to front pages!

//links to APIs
const quotesLink = "https://got-quotes.herokuapp.com/quotes";
const apiLink = "https://www.anapioficeandfire.com/api/";

//TO DO:
//wire up functions to components; this will require setting state for answers, etc. (see individual function files for details on this)
