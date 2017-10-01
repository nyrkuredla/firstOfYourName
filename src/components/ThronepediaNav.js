import React, { Component } from 'react'
import '../styles/thronepedianav.css';
export default class ThronepediaNav extends Component {
  render() {
    return (

<nav className="navbar navbar-expand-lg thronepedia-nav text-justify text-center text-white">
  <a className="navbar-brand text-justify text-white" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li clasNames="nav-item active">
        <a className="nav-link text-white text-justify " href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white text-justify" href="#">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white text-justify" href="#">Houses</a>
      </li>

      <li className="nav-item">
        <a className="nav-link text-white text-justify" href="#">Characters</a>
      </li>
    </ul>

  </div>
</nav>)
  }
}
