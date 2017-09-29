// RegisterView.js

import React, { Component } from 'react'

export default class RegisterView extends Component {
  render(){
    return(
      <form id="register-form" className="form-horizontal">
        <fieldset>
          <div className="form-group">
            <div className="col-md">
              <input id="email" name="Email" type="text" placeholder="Email" className="form-control input-md" required="" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md">
              <input id="password" name="password" type="password" placeholder="Password" className="form-control input-md" required="" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md">
              <input id="password" name="confirm_password" type="password" placeholder="Confirm Password" className="form-control input-md" required="" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md">
              <button id="regButton" name="registerButton" className="btn btn-primary">REGISTER</button>
            </div>
          </div>
        </fieldset>
      </form>
    )
  }
}
