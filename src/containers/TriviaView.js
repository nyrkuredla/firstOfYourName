import React, {Component} from "react"

import TriviaHeader from "../components/TriviaHeader"

export default class TriviaView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.trivia}`
    return(
    <div className={className}>
      <TriviaHeader/>
      <div className="questions">
        <h2>Who said it?</h2>
        <p>change for questions</p>
      </div>
    <form>
        <button className="answerBtn correctAns" type="submit" value="correct" name="pick">Answer</button>
    </form>
       <div>
        {/* <button className="answerBtn wrongAns" type="radio" value="wrong" name="pick" onClick={change_wrongAns}>Answer</button> */}
       </div>
     </div>
    )
  }
}
