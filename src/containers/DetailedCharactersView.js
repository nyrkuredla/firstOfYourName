import React, {Component} from "react"

import ThronepediaHeader from '../components/ThronepediaHeader'
import CharacterCard from '../components/CharacterCard'

export default class DetailedCharactersView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.bodyClassName.thronepedia}`
    return(
      <div className={className}>
        <ThronepediaHeader/>
        <CharacterCard/>
      </div>
    )
  }
}
