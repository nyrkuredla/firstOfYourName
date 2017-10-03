// RegisterView.js

import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class RegisterView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      // correctAnsCount: 0,
      // incorrectAnsCount: 0,
      // titles: [],
      // backgroundUrls: []
    }
  }

  handleName = (event) => {
    this.setState({username: event.target.value})
    console.log("username", event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let username = this.refs.username.value
    console.log("username on submit", username);
    this.props.handleUsername(username)
  }



  render() {
    return (
      <div className="card w-100">
        <div className="row">
          <div className="col">
              <div className="input-group">
                <input ref="username" onChange={this.handleName} name="username" value={this.state.name} type="text" placeholder="thy name?" id="username" className="form-control input-group"/>
                <span className="input-group-btn"/>
                <button onClick={this.handleSubmit} id="username" name="nameButton" type="button" className="btn">
                  <Link className="button_link" to="/trivia">Proceed</Link>
                </button>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
