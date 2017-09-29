import React, {Component} from "react"

import DetailedJumbotron from "../components/DetailedJumbotron"
import Header from '../components/Header'

export default class DetailedRegionsView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.thronepedia}`
    return(
      <div className={className}>
        <Header/>
        <DetailedJumbotron/>
      </div>
    )
  }
}
