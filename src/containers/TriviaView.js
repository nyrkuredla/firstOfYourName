import React, {Component} from "react"
import axios from 'axios';
import {fetchRandomQuote, getCorrectAnsObj, getIncorrectAnsObj} from '../../services'
import TriviaHeader from "../components/TriviaHeader"
import TriviaCard from "../components/TriviaCard"
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
      guessChar: "",
      answersArr: [],
      quote: ""
    }
  }

  _handleChoice = (event) => {
    console.log("Clicks fired!");
  }

  _handleLevel = (event) => {
    console.log("Correct! Next Level!");
  }

  componentDidMount () {
    let correctChar = this.state.correctAnsObj.answer;
    let answersArr = this.state.answersArr;
  axios.get("https://got-quotes.herokuapp.com/quotes").then((response) => {
    console.log(response.data.character);
    this.setState({
      quote: response.data.quote,
      correctAnsObj: {
        ...this.state.correctAnsObj,
        name: response.data.character,
        answer: response.data.character
      }
    })
    answersArr.push(this.state.correctAnsObj)
    console.log("answersArr", this.state);
  }).then(this.setState({ answersArr: getIncorrectAnsObj(correctChar, answersArr)}))
}

_handleInput = (evt) => {
  //set state on answer select
  let inputName = evt.target.name
  this.setState({
    [inputName]: evt.target.value
  })
}

_handleSubmit = (evt) => {
  evt.preventDefault();
  this.setState({"guessChar": this.state.guessChar});
}

  render() {
    let className = `hw-100-percent ${this.props.bodyClassName.trivia}`
    return (
      <div className={className}>
        <TriviaHeader/>
        <div className="parchment mx-auto">
          <div className="questions">
            <h2> Who Said It?</h2>
            <p>{this.state.quote}</p>
          </div>
          <TriviaCard handleSubmit={this._handleSubmit} handleInput={this._handleInput} answersArr={this.state.answersArr}/>
        </div>
        </div>
      )}
}
