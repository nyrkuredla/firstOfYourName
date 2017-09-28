import React, { Component } from 'react';
import '../styles/App.css';
import { Route, Switch, HashRouter } from 'react-router-dom'

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
  constructor(){
    super()
    this.state = {
      bodyClassName : {
        home: "home-view",
        thronepedia: "thronepedia-view",
        trivia: "trivia-view"
      }
    }
  }
  render() {
    return (
      <div className="App hw-100-percent">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">First of Your Name</h1>
        </header> */}
        <HashRouter>
          <Switch>
            <Route exact path='/' component={()=> <HomeView {...this.state.bodyClassName} />}/>
            <Route exact path='/thronepedia' component={()=> <ThronepediaView {...this.state.bodyClassName} />}/>
            <Route exact path='/thronepedia/regions' component={()=> <RegionsView {...this.state.bodyClassName} />}/>
            <Route exact path='/thronepedia/houses' component={()=> <HousesView {...this.state.bodyClassName} />}/>
            <Route exact path='/thronepedia/characters' component={()=> <CharactersView {...this.state.bodyClassName} />}/>
            <Route exact path='/thronepedia/regions/:name' component={()=> <DetailedRegionsView {...this.state.bodyClassName} />}/>
            <Route exact path='/thronepedia/houses/:name' component={()=> <DetailedHousesView {...this.state.bodyClassName} />}/>
            <Route exact path='/thronepedia/characters/:name' component={()=> <DetailedCharactersView {...this.state.bodyClassName} />}/>
            <Route exact path='/trivia' component={()=> <TriviaView {...this.state.bodyClassName} />}/>
            <Route exact path='/trivia/win' component={()=> <WinView {...this.state.bodyClassName} />}/>
            <Route exact path='/trivia/lose' component={()=> <HomeView {...this.state.bodyClassName} />}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
