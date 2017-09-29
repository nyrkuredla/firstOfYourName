import React, {Component} from "react"

import Header from '../components/Header'

export default class CharactersView extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    let className = `hw-100-percent ${this.props.thronepedia}`
    return(
      <div className={className}>
        <Header/>
      </div>
    )
  }
}
