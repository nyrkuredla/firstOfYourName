// HomeView.js

import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'
import TriviaCard from '../components/TriviaCard'



export default class HomeView extends Component {
  constructor(){
    super()
    this.state={
      typedName: "",
      username: "",
      correctAns: 0,
      incorrectAns: 0,
      titles: [],
      backgroundUrls: {
        level1: "level-1",
        level2: "level-2",
        level3: "level-3",
        level4: "level-4",
        level5: "level-5",
        level6: "level-6",
        level7: "level-7",
        level8: "level-8",
        level9: "level-9",
        level10: "level-10"
      }
    }
  }

  // I think we should be able to make a className that is level + {correctAns} so we end up on the correct background
  // I may need help making this happen

_handleUsername = (event) => {
  event.preventDefault()
  this.setstate({username: event.target.value})
}

_handleAnswer = (event) => {
  if (this.target.value === true) {
    correctAns += 1
  } else {
    incorrectAns += 1
  }
}
// also add a title?  talk with Ryan about this one.

// we need to pass {...this.state} to our trivia since the homepage makes the user and resets values back to empty

  render(){
    let className = `hw-100-percent ${this.props.home}`
    return(
      <div className={className}>
        <div id="snow">
          <div className="viewNorth">
              <div>
                {/* <br></br>
                <TriviaCard /> */}
                <br></br>
              <div className='jt'>
                <Jumbotron />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
