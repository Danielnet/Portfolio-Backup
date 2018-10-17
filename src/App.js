import React, { Component } from 'react';
import { HashRouter,Route,Switch } from 'react-router-dom'
import Portfolio from './Layout/portfolio.js';
import Kompetanse from './Layout/kompetanse.js';
import Header from './Main-Components/header.js';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

<Header/>
        <HashRouter>
          <Switch>
        <Route exact path="/" component= {Portfolio} />
            <Route path="/portfolio" component= {Portfolio} />
            <Route path={"/kompetanse"} component= {Kompetanse} />
          </Switch>
        </HashRouter>

      </div>
    );
  }
}

export default App;
