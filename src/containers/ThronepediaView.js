import React, {Component} from "react";

import ThreeColumns from "../components/ThreeColumns";
import Header from '../components/Header'

export default class ThronepediaView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.thronepedia}`
    return(
      <div className={className}>
        <Header/>
        <ThreeColumns/>
      </div>
    );
  }
}
