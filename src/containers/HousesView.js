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
    let className = `hw-100-percent ${this.props.bodyClassName.thronepedia}`
    return(
      <div className={className}>
        <ThronepediaHeader/>
        <p>Choose a House</p>
        <div className="carousel-div col-6 mx-auto">
        <Carousel>
          <div onChange ={this.handleSelect}>
            <img src="./hoarryn.jpg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./hobaratheon.jpg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./hogreyjoy.jpg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./holannister.jpg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./hostark.jpg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./hotargaryen.jpg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./hotully.jpg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./hotyrell.jpg" />
          </div>
        </Carousel>
        </div>
      </div>
    )
  }
}
