import React, {Component} from "react"

import DetailedJumbotron from "../components/DetailedJumbotron"

export default class DetailedRegionsView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.thronepedia}`
    return(
      <div className={className}>
        <DetailedJumbotron/>
      </div>
    )
  }
}
