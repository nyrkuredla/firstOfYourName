import React, {Component} from "react";

import ThreeColumns from "../components/ThreeColumns";

export default class ThronepediaView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.thronepedia}`
    return(

      <div className={className}><ThreeColumns/>
      </div>

    );
  }
}
