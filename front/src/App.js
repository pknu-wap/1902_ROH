import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Content from './Wap';
import Detail from './Detail';
import './Wap.css';
import './master.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Routed />
        </div>
      </div>
    );
  }
}

class Header extends Component{
    render(){
      return(
        <div className = "container">
          <h1>부경대 화장실 찾기</h1>
          <h3>-대연캠퍼스-</h3>
        </div>
        );
    }
}

class Routed extends Component{
  render(){
    return (
      <Router>
        <Route path="/detail" component={Detail}/>
        <Route exact path="/" component={Content}/>
      </Router>
    );
  }
}
export default App;
