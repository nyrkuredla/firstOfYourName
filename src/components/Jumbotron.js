// Jumbotron.js

import React, { Component } from 'react'
import ModalButtons from '../containers/ModalButtons'

export default class Jumbotron extends Component {
  render(){
    return(

      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">First of Your Name</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
        <div className="lmb">
          <ModalButtons />
        </div>
      </div>
    )
  }

}