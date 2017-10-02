import React, {Component} from "react";

import ThreeColumns from "../components/ThreeColumns";
import ThronepediaNav from "../components/ThronepediaNav"
import '../styles/thronepedianav.css';

import ThronepediaHeader from "../components/ThronepediaHeader"
export default class ThronepediaView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.thronepedia}`
    return(

      <div className={className}>
          <ThronepediaNav/>
        <ThronepediaHeader/>

        <ThreeColumns/>
      </div>
    );
  }
}
