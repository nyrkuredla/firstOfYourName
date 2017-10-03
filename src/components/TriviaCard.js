// TriviaCard.js
import _ from 'lodash'
import React, {Component} from 'react'
import '../styles/triviaCard.css'

export default class TriviaCard extends Component {

  render() {
    let answers = _.shuffle(this.props.answersArr)
    console.log(this.props.answersArr);
    console.log("answers", answers);
    return(
    <div className="card w-75">
      <div className="tctester_card">
      {answers.map((answerInfo) => {
        return (
          <div key={answerInfo.name} className="singular-choice">
          <input className="form-check-input" type="radio" name="guessChar" value={answerInfo.answer} onClick={this.props.handleInput}/>
          <label className="form-check-label">
              {answerInfo.name}
          </label>
          </div>
        )
      })}
      <br></br>
    <div className="row justify-content-center">

    <button className="btn btn-lg-center" onClick={this.props.handleSubmit}>
      Answer!
    </button>

    </div>
    </div>
    </div>
  )}
}






    // <div className="trivia_card">
    //   <img className="card-img" href="%PUBLIC_URL%/littleDrag.jpg" alt="Card image" />
    //   <div className="card-img-overlay">
    //     <h4 className="card-title">Card title</h4>
    //     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    //   </div>
    // </div>
