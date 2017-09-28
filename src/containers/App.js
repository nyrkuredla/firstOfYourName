import React, {Component} from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { Route, Switch } from 'react-router-dom'

import HomeView from './HomeView'
import ThronepediaView from './ThronepediaView'
import RegionsView from './RegionsView'
import HousesView from './HousesView'
import CharactersView from './CharactersView'
import DetailedRegionsView from './DetailedRegionsView'
import DetailedHousesView from './DetailedHousesView'
import DetailedCharactersView from './DetailedCharactersView'
import TriviaView from './TriviaView'
import WinView from './WinView'
import LoseView from './LoseView'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">First of Your Name</h1>
        </header> */}
        <HomeView/>
        <Hashrouter>
          <Switch>
            <Route exact path='/' component={HomeView}/>
            <Route exact path='/thronepedia' component={ThronepediaView}/>
            <Route exact path='/thronepedia/regions' component={RegionsView}/>
            <Route exact path='/thronepedia/houses' component={HousesView}/>
            <Route exact path='/thronepedia/characters' component={CharactersView}/>
            <Route exact path='/thronepedia/regions/:name' component={DetailedRegionsView}/>
            <Route exact path='/thronepedia/houses/:name' component={DetailedHousesView}/>
            <Route exact path='/thronepedia/characters/:name' component={DetailedCharactersView}/>
            <Route exact path='/trivia' component={TriviaView}/>
            <Route exact path='/trivia/win' component={WinView}/>
            <Route exact path='/trivia/lose' component={LoseView}/>
          </Switch>
        </Hashrouter>
      </div>
    );
  }
}

export default App;
