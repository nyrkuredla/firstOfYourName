// ThroneBut.js

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ThroneBut extends Component {
  render(){
    return(
      <div>
        <button>
          <Link to="/thronepedia">Connor's Favorite</Link>
        </button>
      </div>
    )
  }
}
