// RegisterView.js

import React, { Component } from 'react'

export default class RegisterView extends Component {
  render(){
    return(
      <form id="register-form" className="form-horizontal">
          <div className="form">
            <div className="col-md">
              <input id="name" name="Name" type="text" placeholder="What is thy name?" className="form-control input-md" required="" />
            </div>
              <button id="regButton" name="registerButton" className="btn btn-primary">REGISTER</button>
          </div>
      </form>
    )
  }
}
