import React, { Component } from 'react'

export default class CharacterCard extends Component {
  render() {

    return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{this.props.houseDataObj.name}</h4>
        <p className="card-text">{this.props.houseDataObj.region}</p>
        <p className="card-text">{this.props.houseDataObj.coatOfArms}</p>
        <p className="card-text">{this.props.houseDataObj.words}</p>
        <p className="card-text">{this.props.houseDataObj.titles}</p>
        <p className="card-text">{this.props.houseDataObj.seats}</p>
        <p className="card-text">{this.props.houseDataObj.ancestralWeapons}</p>
      </div>
    </div>
  }

}

// let houseDataObj = {
//   "name": "",
//   "region": "",
//   "coatOfArms": "",
//   "words": "",
//   "titles": [],
//   "seats": [],
//   "ancestralWeapons": []
// }
