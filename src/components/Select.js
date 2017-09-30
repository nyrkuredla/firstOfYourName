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

      <select onChange={this.handleSelect} class="custom-select">
        <option selected>Choose a House</option>
        <option value="houses-1">houses 1</option>
      </select>
    )
  }
}
