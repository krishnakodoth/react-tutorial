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
import CoreJs from './components/core_js/CoreJs';
import FileUpload from './components/FileUpload';
import Pagination from './components/Pagination/Pagination';
import Filter from './components/Filter';
import Mixins from './components/Mixins';
import RenderProps from './components/RenderProps/RenderProps';
import Chartjs2 from './components/Chartjs2';
import HighChart from './components/HighChart';
import ReactVideo from './components/ReactVideo';




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
                  <Route path='/core-js' component={CoreJs} />
                  <Route path='/file-upload' component={FileUpload} />
                  <Route path='/pagination' component={ Pagination } />
                  <Route path='/react-chartjs-2' component={ Chartjs2 } />
                  <Route path='/high-chart' component={ HighChart } />
                  <Route path='/react-video' component={ ReactVideo } />

                  

                  

                  
                  <Route path='/filter' component={ Filter } />
                  <Route path='/render-props' component={ RenderProps } />
                  <Route path='/mixin' component={ Mixins } />
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
