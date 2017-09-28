// Jumbotron.js

import React, { Component } from 'react'
import ModalButtons from '../containers/ModalButtons'

export default class Jumbotron extends Component {
  render(){
    return(

      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3" className="thronepedia">Thronepedia</h1>
        </div>
        <div className="lmb">
          <ModalButtons />
        </div>
      </div>
    )
  }

}
