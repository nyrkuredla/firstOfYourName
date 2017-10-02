import React, {Component} from "react"
import { fetchRandomQuote, getCorrectAnsObj, getIncorrectAnsObj } from '../../services'
import TriviaHeader from "../components/TriviaHeader"
import TriviaCard from "../components/TriviaCard"
import '../styles/scrollBackdrop.css'

export default class TriviaView extends Component{

_handleChoice = (event) => {
  console.log("Clicks fired!");
}

_handleLevel = (event) => {
  console.log("Correct! Next Level!");
}
  render(){
    console.log("username from app props", this.props.username);
    let className = `hw-100-percent ${this.props.trivia}`
    return(
    <div className={className}>
      <TriviaHeader/>
      <div className="parchment mx-auto">
      {/* <TriviaCard/> */}
      <div className="questions parchment">
        <h2>Who said it?</h2>
        <p>change for questions</p>

      </div>
    <form>
        <button className="answerBtn correctAns" type="submit" value="correct" name="pick">Answer</button>
    </form>
       <div>
      {/* <button className="answerBtn wrongAns" type="radio" value="wrong" name="pick" onClick={change_wrongAns}>Answer</button> */}

       <div className="col-6 mx-auto">
           <div className="input-group">
             <span className="input-group-addon">
               <input type="radio" aria-label="Radio button for following text input"/>
             </span>
             <label type="text" className="form-control" aria-label="Text input with radio button">
               Answers will go here!
             </label>
           </div>
         </div>
       </div>
       </div>

       </div>
    )
  }
}
