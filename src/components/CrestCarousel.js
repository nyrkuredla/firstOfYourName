import React, { Component } from 'react';
import reactDom from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
export default class CrestCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <a href="houses/7">
            <img src="public/arryn.jpeg" />
          </a>
        </div>
        <div>
          <a href='houses/229'>
            <img src="public/baratheon.jpeg" />
          </a>
        </div>
        <div>
          <a href='houses/169'>
            <img src="public/greyjoy.jpeg" />
          </a>
        </div>
        <div>
          <a href='houses/229'>
            <img src="public/lannister.jpeg" />
          </a>
        </div>
        <div>
          <a href='houses/362'>
            <img src="public/stark.jpg" />
          </a>
        </div>
        <div>
          <a href='houses/378'>
            <img src="public/targaryen.jpeg" />
          </a>
        </div>
        <div>
          <a href='houses/395'>
            <img src="public/tully.jpeg" />
          </a>
        </div>

        <div>
          <a href='houses/395'>
            <img src="public/tyrell.jpg" />
          </a>
        </div>
      </Carousel>
    )
  }
}
ReactDom.render(<CrestCarousel />, document.querySelector('.CrestCarousel'))
