import React, { Component } from 'react';
import reactDom from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
export default class CrestCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="public/arryn.jpeg" />
        </div>
        <div>
          <img src="public/baratheon.jpeg" />
        </div>
        <div>
          <img src="public/greyjoy.jpeg" />
        </div>
        <div>
          <img src="public/lannister.jpeg" />
        </div>
        <div>
          <img src="public/stark.jpg" />
        </div>
        <div>
          <img src="public/targaryen.jpeg" />
        </div>
        <div>
          <img src="public/tully.jpeg" />
        </div>
        <div>
          <img src="public/tyrell.jpg" />
        </div>
      </Carousel>
    )
  }
}
ReactDom.render(<CrestCarousel />, document.querySelector('.CrestCarousel'))
