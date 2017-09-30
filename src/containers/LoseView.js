import React, {Component} from "react";
import { getRandomDeath } from '../content/deaths'

import TriviaHeader from "../components/TriviaHeader"

export default class LoseView extends Component{
  constructor(){
    super();
    this.state = {
      "death": ""
    }
  }
  componentDidMount() {
    let death = getRandomDeath();
    this.setState({
      "death": death
    })
  }
  render(){
    let className = `hw-100-percent ${this.props.trivia}`
    return(
      <div className={className}>
      <TriviaHeader/>
        <h1>Valar Morghulis!</h1>
        <p>You have been {this.state.death}</p>
      </div>
    )
  }
}
