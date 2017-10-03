import React, {Component} from "react"

import ThronepediaHeader from '../components/ThronepediaHeader'
import HouseCard from '../components/HouseCard'

export default class DetailedHousesView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.bodyClassName.thronepedia}`
    return(
      <div className={className}>
        <ThronepediaHeader/>
        <HouseCard/>
      </div>
    )
  }
}
