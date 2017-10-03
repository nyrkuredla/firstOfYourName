// ProfileCard.js

import React, { Component } from 'react'

export default class ProfileCard extends Component {
  render(){
    return(
      <div className="profile_wrapper">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="profile_info">
              <div className="profile_details">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark"><h3>{this.props.username}</h3></li>
                  <li className="list-group-item bg-dark">Titles: {this.props.titles}</li>
                  <li className="list-group-item bg-dark">Correct Answers: {this.props.correctAns}</li>
                  <li className="list-group-item bg-dark">Wrong Answers: {this.props.incorrectAns}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
