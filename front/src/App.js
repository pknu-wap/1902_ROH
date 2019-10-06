import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Content from './Wap';
import Detail from './Detail';
import Loading from './loading';
import './Wap.css';
import './master.css';

class App extends Component {
  state = {
  }
  componentDidMount(){
    setTimeout(()=>{
      this._getData();
    },1000)
  }
  _getData = async () =>{
    const toilet_list = await this._callApi("toilet_list");
    const building_coordinate = await this._callApi("building_coordinate");
    this.setState({
      toilet_list,
      building_coordinate
    });
  }
  _callApi = (lists) =>{
    return fetch('data.json', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(res=>res.json())
      .then(json=> json[lists])
      .catch(err=>console.log(err))
  }
  _renderBuilding = () => {
    return <Routed bldgs={this.state.building_coordinate}/>;
  }
  render(){
    const {building_coordinate} = this.state;
    return (
      <div className="App">
        <Header />
        <div className="content">
        {building_coordinate ? this._renderBuilding() :  <Loading />}
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
        <Route exact path="/" component={() => <Content bldgs={this.props.bldgs} />}/>
      </Router>
    );
  }
}
export default App;
