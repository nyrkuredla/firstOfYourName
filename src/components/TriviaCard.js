// TriviaCard.js

import React, { Component } from 'react'

export default class TriviaCard extends Component {
  render(){
    return(
      <div className="card">
        <img className="card-img" href="%PUBLIC_URL%/littleDrag.jpg" alt="Card image" />
        <div className="card-img-overlay">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

    )
  }















}
