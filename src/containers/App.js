import React, { Component } from 'react';
import '../styles/App.css';
import HomeView from './HomeView'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">First of Your Name</h1>
        </header> */}
        <HomeView />
      </div>
    );
  }
}

export default App;
