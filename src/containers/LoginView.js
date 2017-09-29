// LoginView.js

import React, { Component } from 'react'

export default class LoginView extends Component {
  render(){
    return(
      <form id="login-form" className="form-horizontal">
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
              <div className="checkbox">
                <label htmlFor="checkboxes-0">
                  <input type="checkbox" name="checkboxes" id="checkboxes-0" value="1" />
                  Keep me signed in
                </label>
	            </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md">
              <button id="loginButton" name="loginButton" className="btn btn-primary">LOGIN</button>
            </div>
          </div>
        </fieldset>
      </form>
    )
  }
}
