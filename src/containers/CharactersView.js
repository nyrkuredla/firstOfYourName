import React, {Component} from "react"
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

import Header from '../components/Header'

export default class CharactersView extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    let className = `hw-100-percent ${this.props.thronepedia}`
    return(
      <div className={className}>
        <div className="carousel-div col-6 mx-auto">
        <Carousel>
          <div>
            <img src="./bronn.jpg" />
          </div>
          <div>
            <img src="./brynden2.jpg" />
          </div>
          <div>
            <img src="./cersei.jpg" />
          </div>
          <div>
            <img src="./davos.jpg" />
          </div>
          <div>
            <img src="./hound.jpg" />
          </div>
          <div>
            <img src="./jaime.jpg" />
          </div>
          <div>
            <img src="./Littlefinger.jpg" />
          </div>
          <div>
            <img src="./olenna.jpg" />
          </div>
          <div>
            <img src="./Renly.jpg" />
          </div>
          <div>
            <img src="./sansa.jpg" />
          </div>
          <div>
            <img src="./tyrion.jpg" />
          </div>
          <div>
            <img src="./varys.jpg" />
          </div>
        </Carousel>
        </div>
      </div>
    )
  }
}
// ReactDom.render(<CrestCarousel />, document.querySelector('.CrestCarousel'))
