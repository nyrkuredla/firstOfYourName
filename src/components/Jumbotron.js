// Jumbotron.js

import React, { Component } from 'react'
import ModalButtons from '../containers/ModalButtons'
import TriviaBut from './TriviaBut'
import ThroneBut from './ThroneBut'

export default class Jumbotron extends Component {
  render(){
    return(

      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">First of Your Name</h1>
          <p className="lead">App</p>
        </div>
        <div>
          <ThroneBut />
        </div>
        <div>
          <TriviaBut />
        </div>
      </div>
    )
  }

}
