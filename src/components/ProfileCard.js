// ProfileCard.js

import React, { Component } from 'react'

export default class ProfileCard extends Component {
   constructor(props){
     super(props)
     this.state={
       username:"",
       correctAns: 0,
       incorrectAns: 0,
       titles: []
     }
   }

  render(){
    return(
      <div className="profile_wrapper">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="cardheader">
            </div>
            <div className="profile_image">
              <img alt="" src="" />
            </div>
            <div className="profile_info">
              <div className="profile_name">
               <h3>{this.props.name}</h3>
              </div>
              <div className="profile_details">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Titles: {this.state.titles}</li>
                  <li className="list-group-item">Correct Answers: {this.state.correctAnsCount}</li>
                  <li className="list-group-item">Wrong Answers: {this.state.incorrectAnsCount}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
