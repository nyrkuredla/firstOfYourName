import React, {Component} from "react"
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

import ThronepediaHeader from '../components/ThronepediaHeader'
import Select from '../components/Select'

export default class HousesView extends Component{
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

  render(){
    let className = `hw-100-percent ${this.props.thronepedia}`
    return(
      <div className={className}>
        <ThronepediaHeader/>
        <p>Choose a House</p>
        <div className="carousel-div col-6 mx-auto">
        <Carousel>
          <div onChange ={this.handleSelect}>
            <img src="./arryn.jpeg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./baratheon.jpeg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./greyjoy.jpeg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./lannister.jpeg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./stark.jpg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./targaryen.jpeg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./tully.jpeg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./tyrell.jpg" />
          </div>
        </Carousel>
        </div>
      </div>
    )
  }
}
