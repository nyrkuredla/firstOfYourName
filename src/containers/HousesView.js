import React, {Component} from "react"
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

import Header from '../components/Header'
import Select from '../components/Select'

export default class HousesView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.thronepedia}`
    return(
      <div className={className}>
        <Select/>
        <div className="carousel-div col-6 mx-auto">
        <Carousel>
          <div>
            <img src="./arryn.jpeg" />
          </div>
          <div>
            <img src="./baratheon.jpeg" />
          </div>
          <div>
            <img src="./greyjoy.jpeg" />
          </div>
          <div>
            <img src="./lannister.jpeg" />
          </div>
          <div>
            <img src="./stark.jpg" />
          </div>
          <div>
            <img src="./targaryen.jpeg" />
          </div>
          <div>
            <img src="./tully.jpeg" />
          </div>
          <div>
            <img src="./tyrell.jpg" />
          </div>
        </Carousel>
        </div>
      </div>
    )
  }
}
