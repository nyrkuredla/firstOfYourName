import React, { Component } from 'react'
import '../styles/threecolumn.css';

const ThreeColumns = (props) => {
    return(
      <div className="container w-200 h-200 text-white">
        <div className="row text-white">
          <div className ="col text-white house-col">
              <a href="/house">
                <h3 className="text-white">House</h3>
              </a>
              <img className='house-image w-50 h-50 ' src="./houseTapestry.jpg" alt="picture of the different houses"/>
          </div>
          <div className ="col text-white characters-col">
            <a href="/characters">
              <h3 className="text-white">Characters</h3>
            </a>
            <img className='characters-image w-50 h-50 ' src="./characters.jpeg" alt="picture of the different characters"/>
          </div>

        </div>


      </div>

      )
  }


export default ThreeColumns;
