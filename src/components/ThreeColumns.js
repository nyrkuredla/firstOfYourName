import React, { Component } from 'react'

const ThreeColumns = (props) => {
    return(
        <div className="container three-column-container w-80 h-65 ">
          <div className="row d-flex flex-row ">
              <div className = "col d-flex flex-column ">
                <h3>Region</h3>
                <div className="border border-white  d-flex flex-column one-column ">this is where the regions will go</div>
              </div>
              <div className = "col ">
                <h3>House</h3>
                <div className="border-1 mx-auto border-white  d-flex flex-column one-column ">this is where the houses will go</div>
              </div>
              <div className = "col ">
                <h3>Characters</h3>
                <div className="border border-white  d-flex flex-column one-column ">this is where the characters will go</div>
              </div>

          </div>
        </div>
      )
  }


export default ThreeColumns;
