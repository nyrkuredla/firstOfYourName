// TriviaBut.js

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import "./tb_styles.css"

export default class TriviaBut extends Component {
  constructor(){
    super()
    this.state={
      showBox: false
    }
  }

  _handleToggle = (event) => {
    this.setState({
      showBox: !this.state.showBox
    })
  }

  render(){
    return(
      <div className="wrapper">
        <form className="namer">
          <button className="triviaButton" type="button" ></button>
        </form>
    
          <button id="submit_name">
            <Link to="/trivia">Proceed</Link>
          </button>
        </div>
    )
  }
}
