// ThroneBut.js

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ThroneBut extends Component {
  render(){
    return(
      <div className="throneButton">
        <button id="thronepediaButton" className="btn btn-#808080 btn-lg">
          <Link className="button_link" to="/thronepedia">THRONEPEDIA</Link>
        </button>
      </div>
    )
  }
}
