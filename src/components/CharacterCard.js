import React, { Component } from 'react'

export default class CharacterCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{this.props.chacterDataObj.name}</h4>
          <p className="card-text">{this.props.characterDataObj.culture}</p>
          <p className="card-text">{this.props.characterDataObj.born}</p>
          <p className="card-text">{this.props.characterDataObj.died}</p>
          <p className="card-text">{this.props.characterDataObj.titles}</p>
          <p className="card-text">{this.props.characterDataObj.aliases}</p>
          <p className="card-text">{this.props.characterDataObj.playedBy}</p>
        </div>
      </div>
    )
  }

}
// let characterDataObj = {
//   "name": "",
//   "culture": "",
//   "born": "",
//   "died": "",
//   "titles": [],
//   "aliases": [],
//   "playedBy": []
// }
