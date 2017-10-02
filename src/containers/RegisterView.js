// RegisterView.js

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RegisterView extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      // correctAnsCount: 0,
      // incorrectAnsCount: 0,
      // titles: [],
      // backgroundUrls: []
    }

    this.handleName = this.handleName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleName(submit){
    this.setState({
      name : submit.target.value
    })
  }

  handleSubmit(submit){
    submit.preventDefault()
    this.props.nameChange(this.state.name)

    this.setState({
      name: ""
    })
  }

  render(){
    return(
      <div className="card w-100">
        <div className="row">
          <div className="col-lg-6">
            <div className="input-group" onSubmit={this.handleSubmit}>
              <input onChange={this.handleName} name="name" value={this.state.name} type="text" placeholder="What is thy name?" className="form-control input-md" />
              <span className="input-group-btn" />
              <button id="nameButton" name="nameButton" className="btn btn-primary">
                <Link to="/trivia">Proceed</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
