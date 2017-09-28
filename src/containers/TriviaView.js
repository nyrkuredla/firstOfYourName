import React, {Component} from "react"


export default class TriviaView extends Component{
  render(){
    return(
    <div className="game">
      <div className="questions">
        <h2>Who said it?</h2>
        <p>{change_for_quote}</p>
      </div>
    <form>
        <button className="answerBtn correctAns" type="submit" value="correct" name="pick">{{answer}}</button>
    </form>
       <div>
        <button className="answerBtn wrongAns" type="radio" value="wrong" name="pick" onclick="{change_wrongAns}">{{answer}}</button>
       </div>
     </div>
    )
  }
}
