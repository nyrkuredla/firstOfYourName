import React, {Component} from "react"
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

import ThronepediaHeader from "../components/ThronepediaHeader"

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
        <ThronepediaHeader/>
        <div className="carousel-div col-6 mx-auto">
        <Carousel>
          <div>
            <img src="./bronn.jpg" />
            <p className="legend">Bronn of the Blackwater</p>
          </div>
          <div>
            <img src="./brynden2.jpg" />
            <p className="legend">Brynden Tully, the Blackfish</p>
          </div>
          <div>
            <img src="./cersei.jpg" />
            <p className="legend">Cersei Lannister</p>
          </div>
          <div>
            <img src="./davos.jpg" />
            <p className="legend">Davos Seaworth, the Onion Knight</p>
          </div>
          <div>
            <img src="./hound.jpg" />
            <p className="legend">Sandor Clegane, the Hound</p>
          </div>
          <div>
            <img src="./jaime.jpg" />
            <p className="legend">Jaime Lannister</p>
          </div>
          <div>
            <img src="./Littlefinger.jpg" />
            <p className="legend">Petyr Baelish</p>
          </div>
          <div>
            <img src="./olenna.jpg" />
            <p className="legend">Olenna Tyrell, the Queen of Thorns</p>
          </div>
          <div>
            <img src="./Renly.jpg" />
            <p className="legend">Renly Baratheon</p>
          </div>
          <div>
            <img src="./sansa.jpg" />
            <p className="legend">Sansa Stark</p>
          </div>
          <div>
            <img src="./tyrion.jpg" />
            <p className="legend">Tyrion Lannister</p>
          </div>
          <div>
            <img src="./varys.jpg" />
            <p className="legend">Varys, the Spider</p>
          </div>
        </Carousel>
        </div>
      </div>
    )
  }
}
// ReactDom.render(<CrestCarousel />, document.querySelector('.CrestCarousel'))
