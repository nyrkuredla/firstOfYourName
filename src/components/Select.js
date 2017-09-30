import React, {Component} from 'react'

export default class Select extends Component {
  constructor() {
    super()
    this.state = {
      chosenHouse: "",
      houseDataObj: {
        "name": "",
        "region": "",
        "coatOfArms": "",
        "words": "",
        "titles": [],
        "seats": [],
        "ancestralWeapons": []
      }

    }
  }

  handleSelect = (event) => {
    this.setState({chosenHouse: event.target.value})
  }

  render() {
    return (
      <select onChange={this.handleSelect}>
        <option value="houses-1">houses 1</option>
        <option value="houses-2">houses 2</option>
      </select>
    )
  }
}
