import React, {Component} from "react";
import { getRandomDeath } from '../content/deaths'

import TriviaHeader from "../components/TriviaHeader"

export default class LoseView extends Component{

  render(){
    console.log(this.props);
    let className = `hw-100-percent ${this.props.bodyClassName.trivia}`
    return(
      <div className={className}>
        <h1>You Have Died!</h1>
        <p>You have been {this.props.obit}</p>
      </div>
    )
  }
}
