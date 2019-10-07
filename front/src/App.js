import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Map from './Wap';
import ToiletInfo, { Reply } from './Detail';
import Loading from './loading';
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
    return <Routed toilets={this.state.toilet_list} bldgs={this.state.building_coordinate}/>;
  }
  render(){
    const {toilet_list} = this.state;
    const {building_coordinate} = this.state;
    return (
      <div className="App">
        <Header />
        <div className="section">
        {toilet_list && building_coordinate ? this._renderBuilding() :  <div className="content"><Loading /></div>}
        </div>
      </div>
    );
  }
}


class Header extends Component{
    render(){
      return(
        <div className = "title">
          <h1>부경대 화장실 찾기</h1>
          <h3>-대연캠퍼스-</h3>
        </div>
        );
    }
}

class Routed extends Component{
  render(){
    const id = 1;
    return (
      <Router>
        <Route exact path="/" component={() => <div className="contents"><Map bldgs={this.props.bldgs} toilets={this.props.toilets}/></div>}/>
        <Route path="/detail" component={() => <div className="info"><ToiletInfo toilets={this.props.toilets} id={id}/></div>}/>
        <Route path="/detail" component={() => <div className="contents"><Reply toilets={this.props.toilets} id={id}/></div>}/>
      </Router>
    );
  }
}
export default App;
