import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Content from './Wap';
import Detail from './Detail';
import './Wap.css';
import './master.css';

class App extends Component {
  state = {
  }
  componentDidMount(){
    setTimeout(()=>{
      this._getData();
    },4000)
  }
  _getData = async () =>{
    const toilet_list = await this._callApi();
    this.setState({
      toilet_list
    });
  }
  _callApi = () =>{
    return fetch('data.json', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(res=>res.json())
      .then(json=> json.toilet_list)
      .catch(err=>console.log(err))
  }
  render(){
    const {toilet_list} = this.state;
    console.log(this.state.toilet_list);
    return (
      <div className="App">
        <Header />
        <div className="content">
          {toilet_list? <Routed /> :  "loading"}
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
