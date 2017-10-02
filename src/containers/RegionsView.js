import React, {Component} from "react"

import ThronepediaHeader from '../components/ThronepediaHeader'


export default class RegionsView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.bodyClassName.thronepedia}`
    return(
      <div className={className}>
        <ThronepediaHeader/>
      </div>
    )
  }
}
