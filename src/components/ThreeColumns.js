import React, { Component } from 'react'

const ThreeColumns = (props) => {
    return(
        <div className="container three-column-container w-80 h-65 ">
          <div className="row d-flex flex-row w-100 h-100 ">
              <div className = "col d-flex flex-column w-33 h-65 ">
                <h3>Region</h3>
                <div className="border border-white  d-flex  one-column ">this is where the regions will go</div>
              </div>
              <div className = "col d-flex flex-column w-33 h-65 ">
                <h3>House</h3>
                <div className= "border border-white  one-column  ">this is where the houses will go</div>
              </div>
              <div className = "col d-flex flex-column w-33 h-65 ">
                <h3>Characters</h3>
                <div className="border border-white   one-column ">this is where the characters will go</div>
              </div>

          </div>
        </div>
      )
  }


export default ThreeColumns;
