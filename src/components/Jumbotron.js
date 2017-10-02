// Jumbotron.js

import React, { Component } from 'react'
import ModalBut from './ModalBut'
import ThroneBut from './ThroneBut'

export default class Jumbotron extends Component {
  render(){
    return(

      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">First of Your Name</h1>
          <p className="lead">Choose your destination</p>
        </div>


        <div className="container">
          <div className="row justify-content-around">

            <div className="col">
              <ThroneBut />
            </div>

            <div className="col">
              <ModalBut handleUsername={this.props.handleUsername}/>
            </div>

          </div>
        </div>





      </div>
    )
  }

}
