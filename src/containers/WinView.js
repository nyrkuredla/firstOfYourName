import React, {Component} from "react"


export default class WinView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.trivia}`
    return(
      <div className={className}>
      </div>
    )
  }
}
