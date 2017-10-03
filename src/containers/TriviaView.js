import React, {Component} from "react"
import axios from 'axios';
import {fetchRandomQuote, getCorrectAnsObj, getIncorrectAnsObj} from '../../services'
import TriviaHeader from "../components/TriviaHeader"
import TriviaCard from "../components/TriviaCard"
import LoseView from "./LoseView"
import '../styles/scrollBackdrop.css'

export default class TriviaView extends Component {
  constructor(){
    super()
    this.state={
      correctAnsObj: {
        answer: "",
        isCorrect: true,
        name: ""
      },
      selectedChar: "",
      guessedChar: "",
      answersArr: [],
      quote: ""
    }
  }
  //
  // _handleChoice = (event) => {
  //   console.log("Clicks fired!");
  // }
  //
  // _handleLevel = (event) => {
  //   console.log("Correct! Next Level!");
  // }

  componentDidMount () {
    let correctChar = this.state.correctAnsObj.answer;
    let answersArr = this.state.answersArr;
    //fetching random quote from quotes API
  axios.get("https://got-quotes.herokuapp.com/quotes").then((response) => {
    //using character returned in API fetch to generate list of random incorrect characters
    let newAnswers = getIncorrectAnsObj(response.data.character)
    newAnswers = _.uniq(newAnswers)
    let randIndex = _.random(0, (newAnswers.length - 1))
    //setting state with answers
    this.setState({
      answersArr: newAnswers,
      quote: response.data.quote,
      correctAnsObj: {
        ...this.state.correctAnsObj,
        name: response.data.character,
        answer: response.data.character
      }
    })
  })
}
//REMEMBER we need to Shuffle

_handleInput = (evt) => {
  //set state on answer select
  this.setState({
    selectedChar: evt.target.value
  })
}

_handleSubmit = (evt) => {
  //set state on answer submit and update user correct/incorrect answer counts accordingly
  evt.preventDefault();
  this.setState({"guessedChar": this.state.selectedChar});
  this.props.handleAnswer(this.state.selectedChar, this.state.correctAnsObj.answer)
}

  render() {
    let answersProps = _.shuffle(this.state.answersArr)
    let className = `hw-100-percent ${this.props.bodyClassName.trivia}`
    return (
      <div className={className}>

        <TriviaHeader/>
        <div className="parchment mx-auto">
          <div className="questions">
              <br></br>
                <br></br>
                  <br></br>
            <div className="card w-75">
              <div className="row justify-content-center">
            <h2> Who Said It?</h2>
            <p>{this.state.quote}</p>
            </div>
            </div>
          </div>
          <TriviaCard handleSubmit={this._handleSubmit} handleInput={this._handleInput} answersArr={answersProps}/>
        </div>
        </div>
    )}
}
