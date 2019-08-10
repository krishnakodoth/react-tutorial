import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Bootstrap from './components/Bootstrap';
import PageNotFound from './components/PageNotFound';
import NavBar from './lauouts/NavBar';
import NavLink from './lauouts/NavLink';

import Calculator from './components/calculator/Calculator';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Router>
          <div className="container-fluid">
          <div className="row">
            <NavLink />
            <main role="main" className="main-wrap col-md-9 ml-sm-auto col-lg-10 px-4">
              
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/home' component={Home} />
                  <Route path='/bootstrap' component={Bootstrap} />
                  <Route path='/calculator' component={Calculator} />
                  <Route path='*' component={PageNotFound} />
                </Switch>
            </main>
          </div>
        </div>
        </Router>
        
      </React.Fragment>
    );
  }

}

export default App;
