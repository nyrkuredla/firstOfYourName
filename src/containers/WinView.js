import React, {Component} from "react"

import TriviaHeader from "../components/TriviaHeader"
export default class WinView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.bodyClassName.trivia}`
    return(
      <div className={className}>
        <TriviaHeader/>
      </div>
    )
  }
}
