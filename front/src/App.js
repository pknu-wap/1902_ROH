import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Wap from './Wap';
import Detail from './Detail';

class App extends Component {
  render(){
    return (
      <div className="App">
      <Router>
        <Route path="/detail" component={Detail}/>
        <Route exact path="/" component={Wap}/>
      </Router>
      </div>
    );
  }
}

export default App;
