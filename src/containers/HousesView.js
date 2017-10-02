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
            <img src="./hoarryn2.jpg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./hobaratheon2.jpg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./hogreyjoy2.jpg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./holannister2.jpg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./strak.jpg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./hotargaryen2.jpg" />
          </div>
          <div onChange ={this.handleSelect}>
            <img src="./hotully2.jpg" />
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
