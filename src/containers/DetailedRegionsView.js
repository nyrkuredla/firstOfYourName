import React, {Component} from "react"

import DetailedJumbotron from "../components/DetailedJumbotron"
import ThronepediaHeader from '../components/ThronepediaHeader'

export default class DetailedRegionsView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.thronepedia}`
    return(
      <div className={className}>
        <ThronepediaHeader/>
        <DetailedJumbotron/>
      </div>
    )
  }
}
