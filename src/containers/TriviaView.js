import React, {Component} from "react"

import TriviaHeader from "../components/TriviaHeader"

export default class TriviaView extends Component{

_handleChoice = (event) => {
  console.log("Clicks fired!");
}

  render(){
    let className = `hw-100-percent ${this.props.trivia}`
    return(
    <div className={className}>
      <TriviaHeader/>
      <div className="questions parchment">
        <h2>Who said it?</h2>
        <p>change for questions</p>
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
    )
  }
}
