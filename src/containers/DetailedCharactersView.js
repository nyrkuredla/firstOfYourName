import React, {Component} from "react"


export default class DetailedCharactersView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.thronepedia}`
    return(
      <div className={className}>
      </div>
    )
  }
}
