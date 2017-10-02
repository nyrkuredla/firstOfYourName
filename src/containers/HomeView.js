// HomeView.js

import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'
import TriviaCard from '../components/TriviaCard'



export default class HomeView extends Component {
  render(){
    let className = `hw-100-percent ${this.props.bodyClassName.home}`
    return(
      <div className={className}>
        <div id="snow">
          <div className="viewNorth">
              <div>
                {/* <br></br>
                <TriviaCard /> */}
                <br></br>
              <div className='jt'>
                <Jumbotron handleUsername={this.props.handleUsername}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
