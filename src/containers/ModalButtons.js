// ModalButtons.js

import React, { Component } from 'react'
import Modals from '../components/Modals'

export default class ModalButtons extends Component {
  constructor(){
    super()
    this.state={
      showMod: false
    }
  }

  _handleModal = (event) => {
    this.setState({
      showMod: !this.state.showMod
    })
  }

  render(){
    return(
      <div className="wrapper">
        <div className="loginModalbtn">
          <button
            onClick={this._handleModal}
            className="btn btn-#06192F"
            type="button"
            data-toggle="modal"
            data-target="#loginModal">
            LOGIN
          </button>
        </div>
        <br></br>
        <div className="regModalbtn">
          <button
            onClick={this._handleModal}
            className="btn btn-#06192F"
            type="button"
            data-toggle="modal"
            data-target="#regModal">
            REGISTER
          </button>
        </div>
        <br></br>
        <div className="guestModalbtn">
          <button
            onClick={this._handleModal}
            className="btn btn-#06192F"
            type="button"
            data-toggle="modal"
            data-target="#gusModal">
            GUEST
          </button>
        </div>
      </div>
    )
  }}
